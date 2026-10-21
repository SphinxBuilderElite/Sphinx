# Part C: From Data to Figures, Plus the AI and Software Stack
### A working manual for Dr Ahmed Atwa (T&O, Blackpool), October 2026

> I wrote this as the head of biostatistics and research computing, and you can use it as a working manual. It assumes you know Excel, have cleaned data, have used jamovi and have run MICE once. The aim is to get you to the standard where a journal statistician has nothing serious to flag in your methods section.
> Sources are cited as [S#] and listed in `C_sources.json`. Prices and policies were checked in October 2026, so recheck them before you rely on them.

---

## 0. The ten rules (print these)

1. **Write the SAP before you see the outcome data.** Date it, version it and keep it in Git or on OSF.
2. **Never put identifiable patient data into a public AI tool.** That covers names, NHS numbers, hospital numbers, DOBs, postcodes, free-text notes and radiographs with burnt-in labels. No exceptions.
3. **Keep raw data read-only.** Every change gets made by a script (R) or logged in a codebook or change-log. Never edit cells by hand without leaving a trace.
4. **Report effect sizes with 95% CIs.** The p-value is secondary [S5].
5. **Draw a DAG before you choose confounders.** Stepwise selection is not a confounding strategy.
6. **Missing data needs a plan.** Report how much data is missing per variable, the assumed mechanism and how you handled it [S7].
7. **For implant survival, deaths are a competing risk.** Use cumulative incidence (Aalen–Johansen / Fine–Gray), not 1−KM [S14, S15].
8. **Interpret PROMs against the MCID** and say which MCID you used (within-group MIC or between-group MID).
9. **Use the reporting checklist from day one**, not at submission: STROBE/RECORD/CONSORT/STARD/TRIPOD+AI [S16–S19].
10. **Make the analysis reproducible.** Use one Quarto file that runs top-to-bottom from raw data to every table and figure.

---

## 1. Data collection and management

### 1.1 Governance first (UK)

Before you collect anything, work out what kind of study it is.

```
Is it research? ──► Use the HRA "Is my study research?" decision tool [S1]
   ├─ Audit / service evaluation ─► Trust audit/QI registration (Blackpool clinical audit dept)
   │                                 No REC, but Caldicott/IG rules still apply
   └─ Research ─► IRAS ► HRA approval (± REC) ► local R&D capacity & capability
                  └─ Retrospective, routinely collected, no consent? → may need CAG (s251) unless
                     data are de-identified by the direct care team before release
```

- [ ] Registered with the Trust audit/R&D office, with a reference number recorded
- [ ] Data Protection Impact Assessment (DPIA) screening done (IG team)
- [ ] Lawful basis recorded: under UK GDPR this is usually Art 6(1)(e) public task plus Art 9(2)(j) research or 9(2)(h) health care for audit
- [ ] Caldicott principles applied: justify the purpose, use the minimum data needed, access on a need-to-know basis [S2]
- [ ] Storage location approved: Trust network drive or Trust-licensed M365/SharePoint, or institutional REDCap. **Not** personal Dropbox, Google Drive, a personal laptop or an unencrypted USB stick
- [ ] Retention period and destruction date agreed

**Pseudonymisation vs anonymisation (ICO guidance [S3]).** Pseudonymised data (a study ID with a key held separately) is still personal data under UK GDPR. Data counts as anonymous only if re-identification is "reasonably unlikely" given the means available, so small orthopaedic cohorts with exact dates, rare injuries and a named hospital are often *not* anonymous.

Data minimisation recipe:
- [ ] Generate a study ID (e.g. `BTH-DRF-0001`). Keep the linkage key (ID ↔ hospital number) in a **separate, access-restricted file** on the Trust drive
- [ ] Store age at the index event instead of DOB, and intervals (days from injury to surgery) instead of calendar dates where you can. If you need dates, shift them by a per-patient random offset or keep month/year only
- [ ] Do not collect postcode unless you need deprivation data. If you do, derive IMD decile and then drop the postcode
- [ ] Keep free text out of the analysis dataset. Code it into categories at extraction
- [ ] Strip DICOM tags and burnt-in labels from images, and check the corners of every radiograph

### 1.2 REDCap (use it by default for anything beyond about 100 rows or more than one data collector)

**Why:** It gives you field validation, branching logic, an audit trail of who changed what and when, user rights and data access groups for multicentre work, and exports straight to R/SPSS/Stata with labelled factors. It is 21 CFR Part 11-capable and widely accepted by UK RECs.

**Access routes:**
- **University REDCap.** Many UK universities run instances that external NHS collaborators can use if a university-based PI sponsors the project. Manchester [S4], Aberdeen, Birmingham and Leicester are examples. As an LED at Blackpool, the realistic routes are (a) your Warwick affiliation (ask Warwick's research IT or CTU), (b) the **Lancaster/Manchester/UCLan academic partner** behind a supervisor's project, or (c) a collaborative or trainee network instance such as NORTH/BOTA/TRAUMA collaboratives, many of which run multicentre audits on REDCap.
- **NHS Trust REDCap.** Some Trusts and NIHR CRNs host their own instance, so ask Blackpool R&D. If there is none, use the Trust-approved M365 Forms/Excel route with the discipline in 1.3.

**Data dictionary discipline (build in the CSV, then upload):**

| Column | Example | Notes |
|---|---|---|
| Variable name | `age_years` | snake_case, ≤26 characters, no spaces, never start with a number |
| Field type | text / dropdown / radio / yesno / calc | Use coded choices, never free text for categories |
| Choices | `1, AO 23-A \| 2, AO 23-B \| 3, AO 23-C` | Keep codes stable across versions |
| Validation | integer, min 16, max 110 | Add range checks on every numeric field |
| Branching logic | `[fixation] = '2'` | Show the plate type only if ORIF |
| Required | y | Only for core variables |
| Identifier | y/n | Flag PHI so exports can strip it automatically |
| Field note | "Days from injury to theatre" | This becomes your codebook |

- [ ] Pilot on 10 records and fix the dictionary **before** live data entry
- [ ] Lock the dictionary. Any change after go-live gets a version note
- [ ] Use Data Quality rules (missing values, out-of-range, custom logic) weekly
- [ ] Do a double-entry or 10% re-abstraction check and report inter-rater agreement (kappa) for subjective fields such as fracture classification
- [ ] Export with the **R script export** so labels and factors carry over, or use the `REDCapR` or `redcapAPI` packages (keep the API token in `.Renviron`, never in the code)

### 1.3 Excel/Sheets discipline when REDCap is not available

Follow tidy-data rules (Broman & Woo [S6]):
- [ ] **One row = one observation** (patient or patient-episode). **One column = one variable.** One cell holds one value
- [ ] Repeated measures (PROMs at 6 weeks, 6 months and 1 year) go in long format in a separate sheet, or in wide format with consistent suffixes `ohs_0`, `ohs_6w`, `ohs_6m`, `ohs_12m`
- [ ] No merged cells, colour-coding as data, totals rows, comments in data cells or multiple tables per sheet
- [ ] Dates in ISO `YYYY-MM-DD`. Format the column as text or date deliberately
- [ ] Code missing data consistently: leave the cell blank for unknown and use explicit codes only when the reason matters (e.g. `-99` = not recorded, `-88` = not applicable, defined in the codebook)
- [ ] Use Data Validation dropdowns for categoricals and numeric limits
- [ ] Keep a separate **Codebook** sheet (variable, label, type, units, allowed values, source in the notes) and a **Change log** sheet (date, who, what changed, why)
- [ ] Freeze a raw export (`data_raw_2026-10-21.xlsx`), make it read-only, and never touch it again. Cleaning happens in R
- [ ] Version files by date in the filename, or better, keep them on SharePoint with version history turned on

### 1.4 Data cleaning checklist (run it in R, not by eye)

- [ ] **Structure:** expected number of rows and columns; variable types correct (numbers aren't text, dates are dates)
- [ ] **Duplicates:** duplicated study IDs; the same patient counted twice (bilateral fractures and re-admissions); decide on the unit of analysis (patient vs limb) and handle clustering if you include both sides
- [ ] **Range checks:** age 16–110, BMI 12–70, LOS ≥0, PROM within its scale (OHS/OKS 0–48, QuickDASH 0–100, PRWE 0–100, EQ-5D-5L index from −0.59 up to 1 depending on value set)
- [ ] **Logic checks:** surgery date ≥ injury date; death date ≥ surgery; revision date ≥ index op; "no complication" but a complication type recorded; male with a pregnancy field filled; age at event matches DOB
- [ ] **Categorical audit:** `table()` every factor and look for typos ("ORIF", "orif", "O.R.I.F")
- [ ] **Outliers:** plot them, then check against source. Do not delete a value just because it is extreme
- [ ] **Missingness:** % per variable, patterns (`naniar::vis_miss`, `mice::md.pattern`), and whether missingness relates to observed variables (compare complete vs incomplete cases)
- [ ] **Derived variables:** recalculate scores from items with the scoring manual's rules for missing items (e.g. the OHS/OKS rule allows up to 2 missing items, replaced by the patient's mean item score); PRWE allows ≤1 missing item per subscale
- [ ] **Re-run the whole pipeline from raw** and confirm you get identical output

### 1.5 Missing data strategy

**Mechanisms:**
- **MCAR:** missingness unrelated to anything (e.g. a lost form). Complete-case analysis (CCA) is unbiased but loses power.
- **MAR:** missingness depends on *observed* data (e.g. older patients less likely to return PROMs). MI is valid if the model includes those predictors.
- **MNAR:** missingness depends on the unobserved value itself (e.g. patients with bad outcomes don't return PROMs). No standard method fixes this, so run sensitivity analyses (delta-adjustment / tipping point).

You can't prove MAR from the data. Argue it from clinical knowledge and the variables you have.

```
% missing in key variables?
├─ <5% & plausibly MCAR ─► complete case, report n analysed, note it
├─ 5–40% & plausible MAR ─► Multiple imputation (mice), m ≥ % incomplete cases (e.g. 30% → m=30) [S8]
│                            + CCA as sensitivity analysis
├─ Outcome missing only, covariates complete, regression adjusted for predictors of missingness
│                          ─► CCA often valid (White & Carlin); MI adds little unless auxiliary vars
├─ >40–50% or suspected MNAR ─► MI + delta/tipping-point sensitivity; be cautious in conclusions
└─ Never: mean imputation, LOCF, "missing" as a category for confounders, or silently dropping
```

**Rules for MI (Sterne et al. BMJ 2009 [S7]):**
- [ ] Include the **outcome** in the imputation model. Leaving it out biases associations toward the null
- [ ] Include all analysis-model variables plus auxiliary variables that predict missingness or the missing values
- [ ] Preserve non-linearities and interactions you'll use in the analysis ("congeniality")
- [ ] Impute *items* or *totals* consistently. For PROMs with many missing items, imputing the total is usually pragmatic
- [ ] Check convergence (`plot(imp)`) and plausibility (`densityplot(imp)`)
- [ ] Pool with Rubin's rules (`pool()`). Never average the imputed datasets into one
- [ ] **Report:** number and % missing per variable, the reasons, the assumed mechanism, the software and version, the imputation method (PMM etc.), the number of imputations, the variables in the model, and CCA vs MI results (STROBE item 12c [S16])

---

## 2. Analysis

### 2.1 Statistical Analysis Plan (SAP) template

Fill it in, date it, and upload it to OSF (public or embargoed) before you analyse outcomes. Based on Gamble et al. JAMA 2017 for trials [S9], adapted for observational studies.

```markdown
# SAP v1.0 – <Study title> – <date> – Author(s), statistician reviewer
1. Background & objectives (primary, secondary; PICO/PECO)
2. Design (cohort/case-control/cross-sectional/RCT/diagnostic), setting, dates, data source
3. Eligibility (inclusion/exclusion), unit of analysis (patient vs limb vs episode)
4. Exposure/intervention definition; comparator; index date ("time zero")
5. Outcomes – primary (one!), secondary; definitions, timepoints, windows (e.g. 12-month OHS = 9–15 m)
6. Covariates/confounders – DAG attached; list with coding (continuous kept continuous; splines?)
7. Sample size / precision justification
8. Descriptive analysis – Table 1 contents; no p-values in Table 1 for RCTs
9. Primary analysis – model, effect measure (RD/RR/OR/HR/mean difference), 95% CI
10. Assumption checks & what you'll do if violated
11. Missing data – expected %, mechanism, method, m, sensitivity
12. Secondary/subgroup analyses – pre-specified, with interaction tests; labelled exploratory
13. Sensitivity analyses (e.g. CCA, per-protocol, excluding early deaths, E-value)
14. Multiplicity approach
15. Software & versions; code repository; reproducibility
16. Reporting guideline (STROBE/RECORD/CONSORT/STARD/TRIPOD+AI)
17. Deviations log (date, change, reason) – filled after data access
```

### 2.2 Sample size and power

You don't need a power calculation for every retrospective audit, but you do need a **precision justification** (e.g. "with 300 patients, the 95% CI around a 10% complication rate is ±3.4%").

| Design | Tool / R function | Inputs you need |
|---|---|---|
| Two means (e.g. OKS between groups) | G*Power; `pwr::pwr.t.test`; `power.t.test` | MID (OKS 5), SD (~8–10), α, power |
| Two proportions | `power.prop.test`; `pwr::pwr.2p.test` with `ES.h` | p1, p2 |
| Cohort (RR) / case-control (OR) | `epiR::epi.sscohortc`, `epiR::epi.sscc`; OpenEpi online | Exposure prevalence, baseline risk, ratio |
| Survival / time-to-event | `powerSurvEpi`, `gsDesign::nSurv`; Schoenfeld formula | HR, event rate, follow-up, **number of events** |
| Non-inferiority / equivalence | `TrialSize`, `epiR::epi.ssninfb`/`epi.ssninfc` | Margin (justified, e.g. ≤ MID), SD |
| Diagnostic accuracy | `MKmisc::power.diagnostic.test`; Buderer formula | Expected sens/spec, prevalence, CI width |
| Prediction model | `pmsampsize` (Riley et al. BMJ 2020 [S10]) | Outcome prevalence, number of parameters, anticipated R² |
| Agreement / reliability (ICC, kappa) | `kappaSize`, `ICC.Sample.Size` | Expected and minimally acceptable values |
| Repeated PROMs (mixed models) | `longpower`, simulation (`simr`) | Correlation between timepoints |

- [ ] Always state: the effect size and **where it came from** (MCID or prior study), the SD source, α, power, attrition inflation, and the software
- [ ] For regression, avoid the "10 events per variable" myth as a sole rule. Use pmsampsize for prediction and precision-based reasoning for association studies [S10]
- [ ] Never calculate *post-hoc* power from observed results. Report CIs instead

### 2.3 Test-selection algorithm

```
What is the OUTCOME?
│
├─ Continuous (OHS, LOS, ROM)
│   ├─ 2 independent groups ─► Welch t-test (default; doesn't assume equal variance)
│   │      skewed/ordinal/small n ─► Mann–Whitney U (+ Hodges–Lehmann shift with CI)
│   ├─ >2 groups ─► one-way ANOVA (Welch) ─► Kruskal–Wallis if skewed
│   ├─ Paired / pre-post ─► paired t ─► Wilcoxon signed-rank
│   ├─ Repeated over time ─► linear mixed model (NOT repeated t-tests)
│   ├─ Adjusting for confounders ─► linear regression (ANCOVA for baseline-adjusted PROM)
│   └─ Association between two continuous ─► Pearson (linear) / Spearman (monotonic)
│       Agreement (two raters, two methods) ─► ICC / Bland–Altman (NOT correlation)
│
├─ Binary (complication yes/no, revision at 1 y with complete follow-up)
│   ├─ 2×2 ─► χ² (expected ≥5) ─► Fisher exact if small cells; report RD/RR with CI
│   ├─ Paired ─► McNemar
│   └─ Adjusted ─► logistic regression (OR) or modified Poisson / log-binomial (RR)
│
├─ Count (number of dislocations, readmissions) ─► Poisson; overdispersed ─► negative binomial;
│                                                   offset log(follow-up time) for rates
├─ Ordinal (Likert, AO grade) ─► Mann–Whitney/Kruskal or ordinal (proportional odds) regression
│
├─ Time-to-event (revision, death, union)
│   ├─ Describe ─► Kaplan–Meier (only if competing events negligible) + log-rank
│   ├─ Competing risk present (death before revision) ─► cumulative incidence (Aalen–Johansen),
│   │     Gray's test; Fine–Gray (subdistribution HR) for prediction, cause-specific Cox for aetiology
│   └─ Adjusted ─► Cox PH (check PH with Schoenfeld residuals); time-varying effects if violated
│
└─ Diagnostic accuracy ─► sens/spec/PPV/NPV with exact CIs, ROC AUC (DeLong CI), calibration
```

**Assumptions and what to do when they're violated:**

| Method | Check | If violated |
|---|---|---|
| t-test/ANOVA | Normality of residuals (QQ plot, not just Shapiro–Wilk), variance | Welch; transform; non-parametric; bootstrap CI |
| Linear regression | Linearity (residual vs fitted), homoscedasticity, influential points (Cook's) | Splines (`rms::rcs`), robust SEs (`sandwich`), transform |
| Logistic | Linearity in the logit for continuous covariates; separation; EPV | Splines; Firth (`logistf`); penalised |
| Poisson | Dispersion (residual deviance/df ≈1) | Negative binomial (`MASS::glm.nb`); quasi-Poisson |
| Cox | Proportional hazards (`cox.zph`), linearity (martingale residuals) | Stratify; time-varying coefficient; RMST (`survRM2`) |
| χ² | Expected cells ≥5 | Fisher exact |
| Mixed models | Residual normality, random effects structure | Simplify RE; robust SE; GEE (`geepack`) |

### 2.4 Regression modelling for orthopaedic clinical papers

- **Linear:** continuous PROM at follow-up, adjusted for **baseline PROM** (ANCOVA). This is more powerful and less biased than analysing change scores.
- **Logistic:** binary outcomes with fixed follow-up (30-day complication, 1-year mortality after NOF). Report adjusted ORs with CIs. When the outcome is common (>10%), the OR exaggerates the RR, so consider modified Poisson with robust SEs (`sandwich`) to get the RR directly.
- **Poisson / negative binomial:** counts and rates (e.g. infections per 1000 patient-days).
- **Kaplan–Meier and Cox:** time to revision or union. State time zero, censoring rules and the number at risk under the plot. Report median follow-up by reverse KM.
- **Competing risks (arthroplasty survivorship):** in elderly arthroplasty and hip fracture cohorts many patients die before they could be revised. 1−KM treats deaths as censored and **overestimates revision risk**. A meta-analysis found this overestimation in arthroplasty literature (Lacny et al. 2015 [S14]), and Ranstam & Robertsson's arthroplasty reporting guidelines emphasise it [S15]. Use `tidycmprsk::cuminc()` / `cmprsk` with Gray's test. For aetiological questions use **cause-specific Cox**. Use **Fine–Gray** for absolute-risk prediction. The NJR reports KM in younger cohorts, but competing risks matter in NOF and over-80s cohorts.
- **Mixed models for repeated PROMs:** `lme4::lmer(ohs ~ group*time + baseline + (1|id))` or `nlme`/`mmrm` for an unstructured covariance (MMRM, the RCT standard). These use all available data and are valid under MAR.
- **Propensity scores / IPTW for observational comparisons** (e.g. nail vs plate, cemented vs uncemented hemi):
  1. Draw a DAG and list pre-treatment confounders only (never post-treatment variables or mediators)
  2. Fit the PS model (logistic or flexible), then match (`MatchIt`) or weight (`WeightIt`, ATE/ATT)
  3. **Check balance:** standardised mean differences <0.1 (`cobalt::love.plot`). Do not use p-values to judge balance
  4. Check overlap/positivity. Trim extreme weights or use stabilised or overlap weights
  5. Fit the outcome model on the matched/weighted sample with robust or cluster SEs
  6. Austin 2011 is the readable primer [S11]
- **E-values (VanderWeele & Ding 2017 [S12]):** the minimum strength of association an unmeasured confounder would need with both exposure and outcome to explain away the effect. Report one for the point estimate and one for the CI limit closest to the null. In R use `EValue::evalues.OR()` / `evalues.HR()` / `evalues.RR()`.
- **Model building:** prespecify covariates from the DAG and clinical knowledge. Avoid univariable screening ("p<0.2 then into the model") and stepwise selection. Keep continuous variables continuous, with splines if non-linear, and don't dichotomise age at 70.

### 2.5 Confounding and DAGs

- [ ] Draw the DAG in **DAGitty** (dagitty.net, or `dagitty`/`ggdag` in R) [S13]
- [ ] Identify the **minimal sufficient adjustment set** for the exposure → outcome effect
- [ ] Don't adjust for **mediators** (e.g. adjusting for post-op infection when the exposure is surgical approach and the outcome is revision), **colliders** or **instruments**
- [ ] Put the DAG in the supplement. Reviewers increasingly ask for it
- [ ] Be clear about your aim and use the matching language: **description**, **prediction** (TRIPOD+AI [S19]) or **causal inference** (DAG, target trial emulation). Don't write "associated with" and then make causal recommendations

### 2.6 Multiple comparisons

- One prespecified primary outcome means no correction is needed for it.
- For secondary outcomes, either (a) label them exploratory and report CIs without claims, or (b) apply Holm (better than Bonferroni) or Benjamini–Hochberg FDR for many tests: `p.adjust(p, "holm")`.
- Subgroups need **interaction tests**, not separate p-values per subgroup. Keep them few and prespecified, with a stated direction.
- Don't test baseline differences in RCT Table 1 (CONSORT).

### 2.7 MCID for orthopaedic PROMs

These values are context-specific (population, intervention, anchor and method), so always cite the source and say whether it is within-person (MIC) or between-group (MID).

| PROM | Range (direction) | Commonly cited threshold | Source |
|---|---|---|---|
| Oxford Hip Score | 0–48 (higher = better) | Between-group MID ≈5; group-level MIC ≈11; individual MIC 8; MDC90 5 | Beard et al. J Clin Epidemiol 2015 [S20] |
| Oxford Knee Score | 0–48 (higher = better) | Between-group MID ≈5; group-level MIC ≈9; individual MIC 7; MDC90 4 | Beard et al. 2015 [S20] |
| WOMAC (normalised 0–100) | higher = worse (raw) | MCID varies widely (~10–20 points, or 12–18% of baseline); OMERACT-OARSI responder criteria are often preferred | Angst 2001; Tubach 2005 [S21] |
| DASH | 0–100 (higher = worse) | ≈10.8 | Franchignoni et al. JOSPT 2014 [S22] |
| QuickDASH | 0–100 (higher = worse) | ≈15.9 (11–16 across studies) | Franchignoni 2014 [S22] |
| PRWE (distal radius fracture) | 0–100 (higher = worse) | 11.5 | Walenkamp et al. CORR 2015 [S23] |
| EQ-5D index | <0 to 1 | ~0.07–0.08 (Walters & Brazier); depends on value set | [S24] |
| EQ-VAS | 0–100 | ~7–10 | context-dependent |

**EQ-5D, current state of play:** a new **UK EQ-5D-5L value set** was published in *Value in Health* in 2026, and NICE is due to consult on switching to it. Until then NICE's position statement still points to the mapping (crosswalk) to the 3L value set [S24]. State which value set you used and give the version.

**How to use MCIDs:**
- [ ] Power the study on the MID (between-group)
- [ ] Report the mean difference with its 95% CI and show where the CI falls relative to the MID ("the CI excluded a clinically important difference" is a strong, useful statement)
- [ ] Report the **responder proportion** (% achieving the MIC) as a secondary outcome. Report the PASS (patient-acceptable symptom state) where it exists (e.g. OHS ≥42, OKS ≥ about 30–35 in some studies)
- [ ] Don't use a *within-group* MIC to judge a *between-group* difference

### 2.8 Report effect sizes and avoid p-hacking

- Report effect sizes: mean difference, RD, RR, OR or HR **with 95% CI**. Give exact p-values (p = 0.03, not p < 0.05; p < 0.001 is fine). The BJJ editorial guidance (Parsons et al. 2019 [S5]) and the ASA statement (Wasserstein & Lazar 2016 [S25]) say p-values must not be the sole basis for conclusions.
- **Garden of forking paths:** choosing the outcome, timepoint, cut-off, covariates or subgroup *after* seeing results is p-hacking even when it's unintentional. The SAP is the cure. Log every deviation.
- "No significant difference" is **not** equivalence. Use a non-inferiority/equivalence design or interpret the CI against the MID.

### 2.9 Common statistical errors that get orthopaedic papers rejected

Sources: BJJ guidance [S5], Ranstam & Robertsson arthroplasty guidelines [S15], the review of statistical assumptions in orthopaedic literature [S26], and journal statistical reviewer reports.

- [ ] Treating bilateral cases as independent (clustering ignored). Use one side per patient, mixed models or GEE, or cluster-robust SEs
- [ ] Using 1−KM for revision in elderly cohorts without a competing-risks analysis
- [ ] Testing multiple PROM timepoints separately with t-tests instead of a longitudinal model
- [ ] Analysing change scores without baseline adjustment, or inferring a between-group effect from two within-group p-values ("A improved significantly, B didn't")
- [ ] Choosing confounders by univariable p<0.05 or stepwise selection; no DAG
- [ ] Adjusting for mediators or post-exposure variables
- [ ] Dichotomising continuous variables (age, BMI, time to surgery) arbitrarily
- [ ] Overfitting: too many predictors for the number of events. No internal validation for prediction models (needs bootstrap optimism correction, calibration and TRIPOD+AI)
- [ ] Reporting p-values without effect sizes or CIs; post-hoc power calculations
- [ ] Testing baseline differences in RCTs
- [ ] Not reporting missing data, or using mean/LOCF imputation
- [ ] Using correlation to assess agreement; kappa without CIs
- [ ] Presenting percentages without numerators; excessive decimal places (give percentages to one decimal at most, ORs to two)
- [ ] Confusing SD and SEM; using mean (SD) for skewed data (use median (IQR))
- [ ] Mismatch between the abstract and the results, or totals that don't add up. Run a GRIM check on yourself (see 5.7)
- [ ] Causal language from observational data without a causal framework
- [ ] No reporting checklist, or one filled in without page numbers

---

## 3. Software stack and learning path

### 3.1 Recommended stack (free vs paid)

| Need | Primary (free) | Alternative | Paid/licence | Notes |
|---|---|---|---|---|
| Analysis language | **R** (current 4.5.x) | Python (pandas, statsmodels, lifelines) | Stata (UK academic licence ~£200–£400/yr for students); SPSS (often via university/NHS) | Learn R. It's the lingua franca of medical statistics and free forever |
| IDE | **RStudio Desktop** or **Positron** (Posit's newer VS Code-based IDE, stable since mid-2025 [S27]) | VS Code | Posit Workbench (institutional) | RStudio is easier for beginners. Positron suits you if you'll also use Python |
| GUI stats | **jamovi** (R-based; the `Rj` editor shows the R syntax) | **JASP** (Bayesian, good for teaching) | SPSS | Fine for quick checks; move the final analysis to scripts |
| Reproducible reports | **Quarto** (.qmd → Word/PDF/HTML) | R Markdown | — | Renders Word manuscripts with journal-styled reference docs |
| Version control | **Git + GitHub** (private repos are free) | GitLab | — | **Code only, never patient data.** Add `data/` to `.gitignore` |
| Data capture | **REDCap** (institutional) | Trust M365 Forms + Excel | Castor EDC, OpenClinica | REDCap gives you the audit trail |
| Reference manager | **Zotero** + Better BibTeX | Mendeley | EndNote (often via NHS/university) | Zotero + Quarto + BibTeX works very smoothly |
| Diagrams | **draw.io / diagrams.net**, `consort` R pkg, PRISMA2020 Shiny app | Inkscape (vector editing) | BioRender (free tier watermarked; ~$35+/mo academic) | |
| Figures | **ggplot2** + `patchwork` + `ggsurvfit` | Python matplotlib | GraphPad Prism | Prism is good but paid and not script-reproducible |

**Core R packages:**

| Task | Packages |
|---|---|
| Import/clean | `tidyverse` (dplyr, tidyr, readr, stringr, forcats, lubridate), `readxl`, `janitor`, `labelled`, `REDCapR` |
| Data checks | `naniar`, `skimr`, `pointblank` or `validate`, `assertr` |
| Tables | **`gtsummary`**, `finalfit` (HealthyR), `flextable` (Word export) |
| Models | base `glm`, `MASS`, `lme4`, `mmrm`, `geepack`, `rms`, `sandwich`/`lmtest`, `emmeans`, `broom` |
| Survival | `survival`, `ggsurvfit` (current go-to; `survminer` still widely used), `tidycmprsk`/`cmprsk`, `survRM2` |
| Missing data | `mice`, `naniar`, `ggmice`, `howManyImputations` |
| Causal | `MatchIt`, `WeightIt`, `cobalt`, `EValue`, `dagitty`, `ggdag` |
| Meta-analysis | `meta`, `metafor`, `robvis` (risk-of-bias plots) |
| Power | `pwr`, `epiR`, `pmsampsize`, `simr`, `longpower` |
| Figures | `ggplot2`, `patchwork`, `scales`, `viridis`/`ggokabeito`, `ragg` (high-dpi output), `forestploter` |
| Reproducibility | `renv` (locks package versions), `here`, `targets` (pipelines, advanced) |

### 3.2 Free courses (in recommended order)

1. **R for Data Science, 2nd ed.** (Wickham, Çetinkaya-Rundel, Grolemund), r4ds.hadley.nz [S28]. Covers the tidyverse
2. **HealthyR** (Surgical Informatics, University of Edinburgh). The free book *R for Health Data Science* (Harrison & Pius) and the `finalfit` package are written by surgeons for surgeons, which makes it the most relevant fit for you [S29]
3. **NHS-R Community** (nhsrcommunity.com): free webinars, training and a Slack, with NHS-specific examples [S30]
4. **Telling Stories with Data / Modern Dive** for regression intuition (free online)
5. **Epidemiologist R Handbook** (epirhandbook.com): a recipe book for survival, missing data and tables
6. **Coursera/JHU Data Science Specialisation** (audit free). Useful but less clinical. The **Imperial "Statistical Analysis with R for Public Health"** specialisation is more relevant
7. **Cochrane Interactive Learning / Cochrane Training** for systematic reviews and meta-analysis (some modules are free via the NIHR/NHS England Cochrane access)
8. **Happy Git and GitHub for the useR** (Jenny Bryan), happygitwithr.com
9. **Quarto docs** (quarto.org): the "Get Started" and manuscripts guides
10. **Causal inference:** *What If* by Hernán & Robins (free PDF); *Causal Inference in R* (r-causal.org)
11. **Missing data:** *Flexible Imputation of Missing Data* by van Buuren (free online at stefvanbuuren.name/fimd) [S8]

### 3.3 Project folder structure (use it for every paper)

```
2026_DRF_audit/
├─ 2026_DRF_audit.Rproj
├─ README.md            # what, who, how to run
├─ SAP_v1.0.pdf         # dated
├─ data/                # .gitignore'd ; stays on Trust drive
│   ├─ raw/             # read-only exports
│   └─ derived/         # created by scripts only
├─ R/
│   ├─ 01_import_clean.R
│   ├─ 02_impute.R
│   └─ 03_models.R
├─ analysis.qmd         # renders all tables/figures + numbers in text
├─ output/ figures/ tables/
├─ renv.lock
└─ .gitignore           # data/, *.xlsx, *.csv, .Renviron
```

---

## 4. R code skeletons

> These are templates. Change the variable names, run them line by line, and understand every line before you trust the output.

### 4.1 Setup, import and cleaning

```r
# 01_import_clean.R ---------------------------------------------------------
# install.packages(c("tidyverse","janitor","readxl","naniar","gtsummary","finalfit",
#                    "survival","ggsurvfit","tidycmprsk","mice","MatchIt","WeightIt",
#                    "cobalt","EValue","here","renv","flextable","broom","sandwich","lmtest"))
library(tidyverse); library(janitor); library(readxl); library(here); library(naniar)

raw <- read_xlsx(here("data/raw/drf_export_2026-10-21.xlsx"), na = c("", "NA", "-99")) |>
  clean_names()

# 1. structure
glimpse(raw); stopifnot(!any(duplicated(raw$study_id)))

# 2. types & recoding
df <- raw |>
  mutate(
    sex        = factor(sex, levels = c("F","M")),
    fixation   = fct_recode(str_to_upper(str_trim(fixation)),
                            "ORIF" = "O.R.I.F", "MUA" = "MUA + CAST"),
    fixation   = fct_relevel(fixation, "Cast"),            # reference level
    injury_dt  = as.Date(injury_dt), surgery_dt = as.Date(surgery_dt),
    days_to_op = as.numeric(surgery_dt - injury_dt),
    age_cat    = cut(age, c(16, 50, 65, 80, Inf), right = FALSE)  # description only
  )

# 3. range & logic checks -> a flags table to verify against source notes
flags <- df |>
  mutate(
    f_age   = !between(age, 16, 110),
    f_prwe  = !between(prwe_12m, 0, 100),
    f_dates = days_to_op < 0,
    f_logic = complication == "No" & !is.na(complication_type)
  ) |>
  filter(if_any(starts_with("f_"), \(x) x %in% TRUE)) |>
  select(study_id, starts_with("f_"))
write_csv(flags, here("output/data_flags.csv"))

# 4. categorical audit
df |> select(where(is.factor)) |> map(\(x) table(x, useNA = "ifany"))

# 5. missingness
miss_var_summary(df)          # % missing per variable
vis_miss(df)                  # pattern plot
gg_miss_upset(df)             # co-missingness

saveRDS(df, here("data/derived/df_clean.rds"))
```

### 4.2 Table 1 with gtsummary

```r
library(gtsummary); library(flextable)
theme_gtsummary_journal(journal = "jama")   # or "lancet", "nejm"
theme_gtsummary_compact()

tbl1 <- df |>
  select(fixation, age, sex, asa, ao_type, days_to_op, prwe_12m) |>
  tbl_summary(
    by = fixation,
    statistic = list(all_continuous() ~ "{median} ({p25}, {p75})",
                     all_categorical() ~ "{n} ({p}%)"),
    label = list(age ~ "Age, years", asa ~ "ASA grade", ao_type ~ "AO/OTA type",
                 days_to_op ~ "Injury to surgery, days", prwe_12m ~ "PRWE at 12 months"),
    missing_text = "Missing",
    digits = all_categorical() ~ c(0, 1)
  ) |>
  add_overall() |>
  # add_p()   # <- omit for RCTs; for observational, prefer SMDs:
  add_difference(everything() ~ "smd") |>
  modify_caption("**Table 1. Baseline characteristics by treatment**") |>
  bold_labels()

tbl1 |> as_flex_table() |> save_as_docx(path = here("output/tables/table1.docx"))
```

The `finalfit` alternative: `df |> summary_factorlist(dependent, explanatory, p = TRUE, add_dependent_label = TRUE)`.

### 4.3 Logistic regression (and the RR alternative)

```r
library(broom); library(sandwich); library(lmtest)

m_log <- glm(complication ~ fixation + age + sex + asa + ao_type,
             data = df, family = binomial)
tbl_regression(m_log, exponentiate = TRUE) |> add_global_p() |> bold_p()

# diagnostics
car::vif(m_log)                                 # collinearity
# linearity of age in logit: compare with spline
m_spl <- update(m_log, . ~ . - age + splines::ns(age, 3)); anova(m_log, m_spl, test = "LRT")
# events per parameter
sum(df$complication == "Yes", na.rm = TRUE) / length(coef(m_log))

# Risk ratios via modified Poisson (robust SE) – better when outcome is common
m_rr <- glm(as.numeric(complication == "Yes") ~ fixation + age + sex + asa + ao_type,
            data = df, family = poisson(link = "log"))
coeftest(m_rr, vcov = vcovHC(m_rr, type = "HC0")) |> tidy(conf.int = TRUE, exponentiate = TRUE)

# Finalfit one-liner: uni + multivariable table, OR plot
library(finalfit)
df |> finalfit("complication", c("fixation","age","sex","asa","ao_type"))
df |> or_plot("complication", c("fixation","age","sex","asa","ao_type"))
```

### 4.4 Kaplan–Meier, Cox and competing risks

```r
library(survival); library(ggsurvfit); library(tidycmprsk)

# time in years from index op; status: 0 censored, 1 revision, 2 death
df_s <- df |> mutate(time_y = as.numeric(end_dt - op_dt) / 365.25,
                     status_any = as.integer(status == 1),
                     status_cr = factor(status, 0:2, c("censor","revision","death")))

# KM (only appropriate if deaths are rare)
km <- survfit2(Surv(time_y, status_any) ~ implant, data = df_s)
km |> ggsurvfit(type = "risk") +            # cumulative incidence = 1 - S(t)
  add_confidence_interval() + add_risktable() + add_pvalue(caption = "Log-rank {p.value}") +
  labs(x = "Years since index operation", y = "Cumulative revision (1 – KM)") +
  coord_cartesian(xlim = c(0, 10)) + theme_classic(base_size = 11)

# median follow-up by reverse KM
survfit(Surv(time_y, status_any == 0) ~ 1, data = df_s)

# Cox
cox <- coxph(Surv(time_y, status_any) ~ implant + age + sex + asa, data = df_s)
tbl_regression(cox, exponentiate = TRUE)
cox.zph(cox); plot(cox.zph(cox))            # proportional hazards check

# Competing risks: cumulative incidence + Gray's test
ci <- cuminc(Surv(time_y, status_cr) ~ implant, data = df_s)
ci |> ggcuminc(outcome = "revision") + add_confidence_interval() + add_risktable() +
  labs(x = "Years", y = "Cumulative incidence of revision")
tbl_cuminc(ci, times = c(1, 5, 10), outcomes = "revision") |> add_p()

# Fine–Gray (subdistribution HR) and cause-specific Cox
fg  <- crr(Surv(time_y, status_cr) ~ implant + age + sex + asa, data = df_s)
tbl_regression(fg, exponentiate = TRUE)
csc <- coxph(Surv(time_y, status == 1) ~ implant + age + sex + asa, data = df_s) # deaths censored
```

### 4.5 Multiple imputation with mice

```r
library(mice); library(ggmice)
vars <- c("prwe_12m","fixation","age","sex","asa","ao_type","smoker","prwe_6w","complication")
d <- df |> select(study_id, all_of(vars))

ini  <- mice(d, maxit = 0)
meth <- ini$method; meth["study_id"] <- ""         # don't impute ID
pred <- ini$predictorMatrix; pred[, "study_id"] <- 0  # don't use ID as predictor
# outcome prwe_12m IS kept in the predictor matrix (essential)

m_n <- max(20, ceiling(100 * mean(!complete.cases(d))))  # m ~ % incomplete cases
imp <- mice(d, m = m_n, method = meth, predictorMatrix = pred,
            maxit = 20, seed = 20261021, printFlag = FALSE)

plot(imp)                      # convergence
densityplot(imp, ~ prwe_12m)   # observed vs imputed plausibility

fit <- with(imp, lm(prwe_12m ~ fixation + age + sex + asa + ao_type + prwe_6w))
pooled <- pool(fit); summary(pooled, conf.int = TRUE)
tbl_regression(fit)            # gtsummary pools mice fits automatically

# sensitivity: complete case
summary(lm(prwe_12m ~ fixation + age + sex + asa + ao_type + prwe_6w, data = d))

# MNAR delta-adjustment (tipping point): shift imputed PRWE worse by delta
for (delta in c(0, 5, 10, 15)) {
  post <- imp$post; post["prwe_12m"] <- paste("imp[[j]][,i] <- imp[[j]][,i] +", delta)
  imp_d <- mice(d, m = m_n, method = meth, predictorMatrix = pred, post = post,
                maxit = 20, seed = 20261021, printFlag = FALSE)
  print(c(delta = delta, summary(pool(with(imp_d, lm(prwe_12m ~ fixation + age + sex +
        asa + ao_type + prwe_6w))), conf.int = TRUE)[2, c("estimate","2.5 %","97.5 %")]))
}
```

### 4.6 Propensity score: IPTW and matching, with an E-value

```r
library(WeightIt); library(MatchIt); library(cobalt); library(EValue)

# Confounders from DAG (pre-treatment only)
f_ps <- fixation_orif ~ age + sex + asa + ao_type + dominant_hand + smoker + osteoporosis

# IPTW (ATE), stabilised
w <- weightit(f_ps, data = df, method = "glm", estimand = "ATE", stabilize = TRUE)
summary(w)                                  # look for extreme weights
bal.tab(w, stats = c("m","v"), thresholds = c(m = .1))
love.plot(w, thresholds = c(m = .1), abs = TRUE)   # supplement figure

fit_w <- glm(complication ~ fixation_orif, data = df, weights = w$weights,
             family = quasibinomial)
coeftest(fit_w, vcov = vcovHC(fit_w, type = "HC0"))   # robust SE
# (WeightIt >=1.0: glm_weightit() gives correct M-estimation SEs directly)
fit_w2 <- glm_weightit(complication ~ fixation_orif, data = df, weightit = w,
                       family = binomial); summary(fit_w2, ci = TRUE)

# Alternative: 1:1 nearest neighbour matching with caliper
m <- matchit(f_ps, data = df, method = "nearest", caliper = 0.2, std.caliper = TRUE)
bal.tab(m, thresholds = c(m = .1)); md <- match.data(m)
fit_m <- glm(complication ~ fixation_orif, data = md, weights = weights, family = binomial)
coeftest(fit_m, vcov = vcovCL, cluster = ~subclass)

# E-value for OR = 0.62 (0.45–0.85), outcome rare (<15%) so OR ~ RR
evalues.OR(est = 0.62, lo = 0.45, hi = 0.85, rare = TRUE)
```

### 4.7 Journal-quality figure export

```r
library(ragg)
p <- last_plot() + theme_classic(base_size = 9, base_family = "Arial") +
  scale_colour_okabe_ito()            # ggokabeito; colour-blind safe
ggsave(here("output/figures/fig2_cif.tiff"), p, device = agg_tiff,
       width = 174, height = 110, units = "mm", dpi = 600, compression = "lzw")
ggsave(here("output/figures/fig2_cif.pdf"), p, width = 174, height = 110, units = "mm") # vector
ggsave(here("output/figures/fig2_cif.eps"), p, device = cairo_ps, width = 174, height = 110,
       units = "mm")
```

---

## 5. Figures and tables

### 5.1 Figure specification checklist

- [ ] **Check the target journal's figure guidance first.** As examples, Bone & Joint Publishing asks for individual JPEG or TIFF files at the highest quality, graphs as EPS or Excel on acceptance, a maximum of 10 figures with no more than 6 parts each, composite panels, and legends that state the radiograph view and timepoint [S31]
- [ ] Resolution: **≥300 dpi for photos and radiographs, 600 dpi for mixed line art, 1000–1200 dpi for pure line art**, or supply vector files (PDF/EPS/SVG)
- [ ] Size: single column ≈84–90 mm, double ≈174–180 mm. Make the figure at its final size so fonts are 7–9 pt after printing
- [ ] Sans-serif font (Arial/Helvetica), consistent across all figures
- [ ] Colour-blind-safe palettes (Okabe–Ito, viridis). Never rely on red vs green. Add shapes or linetypes as a second channel. Check with the Coblis simulator
- [ ] Show the data: dot or box-and-jitter plots instead of "dynamite" bar charts with error bars (BJJ journals discourage summary-only bar graphs [S31])
- [ ] Axis labels with units; y-axis starting at zero for bars; number at risk under KM/CIF plots
- [ ] Panel labels A, B, C; legend inside the figure caption, not baked into the image

### 5.2 Standard figures and how to make them

| Figure | Tool |
|---|---|
| Flow diagram (STROBE/CONSORT) | `consort` R package; draw.io; PRISMA 2020 Shiny app for reviews |
| Table 1 / regression tables | `gtsummary` → `flextable` → Word |
| Forest plot (subgroups, ORs) | `finalfit::or_plot`, `forestploter`, `ggplot2` with `geom_pointrange`; `meta::forest` for meta-analysis |
| KM / CIF | `ggsurvfit` (+ risk table) |
| PROMs over time | Mean with 95% CI per timepoint from the mixed model (`emmeans`) plus spaghetti lines in light grey |
| Love plot (PS balance) | `cobalt::love.plot` |
| DAG | dagitty.net, exported as SVG, or `ggdag` |
| Risk-of-bias | `robvis` |
| Illustrations / technique figures | Inkscape (free vector editor); BioRender (check licence terms, since the free tier is not licensed for publication); your own photos with consent |

### 5.3 Image ethics

- [ ] Get written consent for any identifiable clinical photograph, following the GMC guidance on making and using visual recordings. Faces, tattoos and distinctive jewellery all count as identifiable
- [ ] Remove all identifiers from radiographs (name, hospital number, DOB, date stamps, Trust name)
- [ ] Brightness and contrast adjustments must apply to the whole image. No selective editing, splicing without clear demarcation, or cloning
- [ ] Keep the original files. Journals can ask for them
- [ ] **Don't use AI-generated images as data or clinical images.** If you use AI for schematic illustrations, check the journal policy (many prohibit it) and disclose it. ICMJE 2026 explicitly includes image-generation tools in the disclosure requirement [S32]

---

## 6. AI and productivity tools

### 6.0 The governance rule (non-negotiable)

**No identifiable or pseudonymised patient-level data goes into any public or consumer AI tool.** That includes ChatGPT, Claude.ai, Gemini, Perplexity, Elicit, NotebookLM, Grammarly and DeepL, on free or paid personal accounts. Pseudonymised data is still personal data under UK GDPR [S3]. Only use AI on patient data inside a **Trust-approved tool that has passed a DPIA** (e.g. an enterprise M365 Copilot deployment if Blackpool has approved one, or an NHS-assured ambient scribe [S33]). For code help, share **variable names, structure and synthetic or simulated data**, never real rows. Unpublished manuscripts and reviewer material shouldn't go into public AI either: ICMJE 2026 says confidential manuscripts must not be uploaded unless confidentiality is assured [S32].

### 6.1 Literature discovery

| Tool | Good for | Pitfalls | Cost (Oct 2026, check) |
|---|---|---|---|
| **PubMed / MeSH + Embase via NHS OpenAthens** | The definitive search. Required for systematic reviews | Steep learning curve. Ask your Trust library, which offers free literature searches | Free via NHS Knowledge & Library Services |
| **Semantic Scholar** | Free AI-ranked search, TLDRs, citation context, an API | Coverage gaps for older or non-English work | Free |
| **Elicit** | Question → paper table with extracted columns (n, design, outcomes); good for scoping | Extraction errors in numbers. Verify every cell against the PDF | Free (limited credits); Pro ≈$49/mo; higher tiers more [S34] |
| **Consensus** | Quick "what does the evidence say" with a consensus meter | Oversimplifies; weights study quality crudely | Free (limited); Pro ≈$12–20/mo [S34] |
| **Undermind** | Deep, exhaustive semantic search for niche questions; good at finding the "one paper" | Slow (minutes per query); paid tiers | Free tier; Pro (annual) [S35] |
| **Scite** | Smart citations (supporting/contrasting/mentioning); checks whether a cited claim holds up | Classifier errors; subscription | Paid (~$12–20/mo); some institutions |
| **Research Rabbit / Connected Papers / Litmaps** | Citation-network maps to find related and seminal papers and build reading lists | Network bias toward highly cited work; not systematic | Research Rabbit free; Connected Papers free (5 graphs/mo); Litmaps freemium |
| **Perplexity** | Fast web-wide answers with citations | Cites non-peer-reviewed sources and sometimes misattributes | Free / Pro ~$20/mo |
| **Scopus AI** (Elsevier) / **Web of Science Research Assistant** (Clarivate) | Conversational search grounded in curated indexes, with topic maps | Need institutional subscription (check Warwick library) | Institutional [S36] |
| **OpenEvidence** | US clinical Q&A on the literature | **Withdrew from the UK/EU in April 2026** (geoblocked), according to multiple reports [S37]. Don't plan around it | n/a in UK |

Rule: AI search is for **discovery and scoping**. For a systematic review, run the database searches yourself (PubMed, Embase, CENTRAL ± CINAHL) with a documented strategy (PRISMA-S), ideally with a librarian. AI-found papers can be added as "other sources".

### 6.2 Screening (systematic reviews)

| Tool | Good for | Pitfalls | Cost |
|---|---|---|---|
| **Rayyan** | Blinded dual screening, conflict resolution, AI relevance ranking | AI ranking is a prioritiser, not a decision-maker. The free tier limits AI features and reviews | Free tier; paid ~$8–13/mo |
| **ASReview LAB (v2, 2025)** | Open-source active learning. Screen about 10–30% of records and stop on a stopping rule [S38] | You must prespecify and report the stopping rule; local install | Free, open source |
| **Covidence** | End-to-end SR (screening → extraction → RoB); ML "relevance" sort; Cochrane-standard | Paid unless your institution has a licence (Cochrane authors get access) | Institutional / ~£200+/review |

Always: two independent human reviewers for inclusion decisions, AI used for prioritisation only, and the tool and its role reported in the methods.

### 6.3 Reading and synthesis

| Tool | Use | Caveat |
|---|---|---|
| **NotebookLM** (Google) | Upload your own PDFs and query only those sources, with inline citations to passages. Good for revision and scoping a field | Published papers only, no patient data. Check every citation |
| **SciSpace** | PDF "copilot", explains methods and tables | Hallucinated interpretations of stats; paid tiers |
| General LLMs (Claude, ChatGPT, Gemini) | Explaining a method, critiquing a draft SAP, red-teaming your discussion | Never let one invent references. Verify every citation in PubMed |

### 6.4 Reference managers

- **Zotero** (recommended): free and open source, with a browser connector and Word plugin. **Better BibTeX** gives stable citation keys for Quarto. Also does group libraries for co-authors and retraction alerts (Retraction Watch integration). Storage is 300 MB free, or point attachments at your own folder with ZotMoov/linked files.
- **EndNote**: often licensed by NHS Trusts and universities. Good for very large SR libraries and deduplication. Paid otherwise.
- **Mendeley**: free, but Elsevier has stripped features and the desktop app is legacy. Not recommended for new libraries.

### 6.5 Writing and editing

| Tool | Use | Caveat |
|---|---|---|
| **Writefull** (built into Overleaf, plus a Word add-in) | Academic language feedback trained on journal text | Language polish only |
| **Paperpal** | Manuscript-specific language plus submission checks | Paid tiers; disclose substantive use |
| **Trinka** | Academic/medical grammar, style consistency | Similar |
| **Grammarly** | General grammar | Cloud processing, so never use it on confidential or patient text. Its generative features count as AI use to disclose |
| **LanguageTool** | Open-source grammar, can be self-hosted | Less academic-specific |

Given your preference for writing your own prose: use these as **line editors**, not ghostwriters, and keep your voice. Generative rewriting of whole paragraphs leaves a recognisable register and must be disclosed under most journal policies.

### 6.6 Coding help (ChatGPT, Claude, Copilot for R)

These tools are useful and they make mistakes. Verification practices:
- [ ] Give the tool the **structure** (`str(df)` output with values replaced, or `dput()` of a *synthetic* data frame), never the real data
- [ ] Ask it to explain each line. If you can't explain the code yourself, don't use it
- [ ] Check package and function existence and argument names against the documentation (`?fun`). LLMs invent arguments
- [ ] Test on **simulated data with a known answer** (e.g. simulate OR = 2 and check the model recovers it)
- [ ] Cross-check key results in a second tool (e.g. jamovi or a different R package)
- [ ] Watch for the classic AI errors: wrong reference levels, `exp()` forgotten or doubled, mice pooling done by averaging data, Cox models with the wrong time origin, deaths treated as censored, using `p.adjust` incorrectly, `predict()` on the wrong scale
- [ ] Commit AI-assisted code to Git with a comment, and disclose AI coding assistance per journal policy

### 6.7 Integrity checkers

- **iThenticate / Crossref Similarity Check:** journals run it on submission. Universities give students Turnitin. Aim for low overlap outside methods boilerplate. **AI-text detectors are unreliable** (false positives, especially for non-native English writers) and shouldn't be relied on in either direction.
- **statcheck** (Nuijten et al.; R package and web app) recomputes p-values from reported test statistics and degrees of freedom [S39]. It mostly covers APA-style t/F/χ² reporting, but it's still a useful self-check.
- **GRIM / GRIMMER / SPRITE** (Brown & Heathers; Heathers et al.) [S40]: check whether reported means and SDs are possible given n and integer-scored scales. That makes them relevant for PROMs, since OHS and OKS are integer totals. Run them on your own tables before submission.
- **Self-audit:** check that every number in the abstract matches the results, that table totals equal n, and that percentages use the right denominator.

### 6.8 AI policies: current status (October 2026)

| Body | Position |
|---|---|
| **ICMJE** (January 2026 revision; new Section V on AI) | AI can't be an author. Humans are fully responsible. Disclose AI use at submission, in the cover letter and in the relevant manuscript section (writing assistance → acknowledgements; data analysis or figures → methods). Verify AI output for accuracy and bias. Don't cite AI as a primary source. Reviewers and editors must disclose AI use and not upload confidential manuscripts [S32] |
| **COPE** (position statement 2023) | AI tools can't meet authorship criteria or take responsibility. Authors must disclose how AI was used and are liable for all content [S41] |
| **WAME** (2023 recommendations) | Chatbots can't be authors. Authors must be transparent about use, take responsibility, and editors need appropriate tools [S42] |
| **Journals** (BJJ/BJO, JBJS, Elsevier, Springer, Wiley) | All follow the same core: no AI authorship, disclose generative AI use beyond basic grammar, no AI-generated images or data without explicit permission. Bone & Joint Publishing has a dedicated "AI policy for authors" page linked from its instructions [S31], so read the specific journal's page at submission |

**Disclosure statement template:** "During the preparation of this work the authors used [tool, version/date] for [language editing of the Discussion / generating draft R code for figure formatting, which was reviewed and tested by the authors]. The authors reviewed and edited all output and take full responsibility for the content of the publication. No patient data were entered into AI tools."

---

## 7. Reproducibility and integrity

- [ ] **Analysis scripts:** one Quarto document reproduces every number. Use inline R (`` `r round(or, 2)` ``) so the text and tables can't drift apart
- [ ] **`renv`** locks package versions. Record `sessionInfo()` in the supplement
- [ ] **Git:** commit at every milestone ("SAP locked", "data frozen", "primary analysis", "revision 1"). Keep the repo private until publication, then make the code public (GitHub, with a Zenodo DOI)
- [ ] **Preregistration:** OSF Registries for observational studies (time-stamped SAP), PROSPERO for systematic reviews, ISRCTN/ClinicalTrials.gov for trials (mandatory for RCTs in BJJ journals [S31])
- [ ] **Data availability statement:** NHS patient-level data usually can't be shared openly. A standard wording is: "De-identified data may be made available on reasonable request to the corresponding author, subject to approval by [Trust] Information Governance and a data-sharing agreement." Share the code, data dictionary and synthetic data (`synthpop` R package) openly. Note that Bone & Joint journals require a data availability statement and encourage FAIR deposition [S31]
- [ ] **Repositories:** OSF (protocols, SAPs, materials), Zenodo (code and DOIs, GitHub integration), Figshare
- [ ] **Reporting checklists:**
  - STROBE for cohort, case-control and cross-sectional studies [S16]
  - **RECORD** (the STROBE extension for routinely collected health data, e.g. NJR, HES, Trust EPR, NHFD) [S17]
  - CONSORT 2025 for RCTs (updated 2025) [S18]
  - STARD for diagnostic studies
  - TRIPOD+AI for prediction models, including ML [S19]
  - PRISMA 2020 + PRISMA-S for reviews
  - SAMPL for statistics reporting generally
  - SQUIRE 2.0 for QI
  - Find them all at the EQUATOR Network
- [ ] **ORCID** on everything. Use CRediT author contribution statements

---

## 8. A 12-week learning plan (about 4–6 hours a week, alongside clinical work)

Use a real project as the vehicle, either your distal radius audit or the VTE prophylaxis evaluation dataset, kept on the Trust machine. Practise at home on **public or synthetic data** (e.g. `finalfit::colon_s`, `survival::lung`, NHANES, or a `synthpop` copy of your data structure).

| Week | Focus | Do | Output |
|---|---|---|---|
| 1 | Setup + R basics | Install R, RStudio/Positron, Quarto, Git, Zotero + Better BibTeX. R4DS chs 1–8 | Project folder template on GitHub |
| 2 | Tidy data + import | R4DS (data import, tidy, transform). Rebuild one Excel audit sheet as tidy data + codebook | Codebook + `01_import_clean.R` |
| 3 | Cleaning + missingness | HealthyR chapters on data wrangling. Run the §1.4 checklist with `naniar` | Data-flags report |
| 4 | Descriptives + Table 1 | `gtsummary`/`finalfit`; export to Word | Table 1 in journal style |
| 5 | Figures | ggplot2 (R4DS + *ggplot2* book); Okabe–Ito; export at 600 dpi TIFF + PDF | Three publication-ready figures |
| 6 | Inference basics | CIs, effect sizes, test selection (§2.3); Parsons BJJ 2019; ASA statement | One-page "results paragraph" with CIs |
| 7 | Linear + logistic regression | HealthyR regression chapters; diagnostics; splines; modified Poisson | Adjusted model table + OR plot |
| 8 | DAGs + confounding + PS | DAGitty tutorial; *What If* chs 1–7 (skim); MatchIt/WeightIt vignettes; cobalt | DAG + love plot + IPTW estimate + E-value |
| 9 | Survival + competing risks | `survival`, `ggsurvfit`, `tidycmprsk` vignettes; read Lacny 2015 | KM vs CIF comparison plot on `survival::mgus2` |
| 10 | Missing data | van Buuren FIMD chs 1–6; Sterne BMJ 2009; mice + delta adjustment | MI vs CCA comparison table |
| 11 | Repeated PROMs + power | `lme4`/`mmrm`, `emmeans`; `pwr`, `pmsampsize`; MCID literature | Mixed-model PROM plot + a power calculation for your next study |
| 12 | Reproducible manuscript | Quarto manuscript with Zotero refs, inline numbers, `renv`; write the SAP for your next project; upload to OSF | Rendered Word manuscript draft + registered SAP |

**After week 12 (months 4–30):** build a personal "methods library" of the snippets you reuse. Take one formal course (e.g. a university short course in medical statistics, or the NIHR/NHS-R workshops). Get a statistician co-author on your first two or three papers and learn from their edits. Review for a journal (BJO, BJJ Open and Bone & Joint Research all accept early-career reviewers via ORCID). Aim for one causal-inference or registry-based (RECORD) paper as your methods showpiece.

---

## 9. Pre-submission statistical checklist

- [ ] SAP registered and dated; deviations listed
- [ ] Reporting checklist complete with page or line numbers
- [ ] Unit of analysis is right; clustering handled
- [ ] Flow diagram numbers add up at every step
- [ ] Table 1: medians or means appropriate to the distribution; n (%) with denominators; missing data shown
- [ ] Primary result given as effect size + 95% CI + exact p, interpreted against the MID
- [ ] Assumptions checked and reported (PH, linearity, overdispersion, balance)
- [ ] Missing data: amount, mechanism, method, sensitivity
- [ ] Competing risks addressed for survivorship outcomes
- [ ] Confounders justified (DAG); no stepwise selection; E-value for key observational findings
- [ ] Subgroups prespecified with interaction tests; multiplicity addressed
- [ ] Figures at ≥300–600 dpi or vector; colour-blind safe; numbers at risk shown
- [ ] Software and versions cited (R Core Team, package citations via `citation("mice")`)
- [ ] Data availability + code availability statements
- [ ] AI-use disclosure; no patient data was entered into AI
- [ ] Abstract numbers match the results; GRIM or statcheck self-check run
- [ ] A co-author or statistician read the methods and results cold
