# Part A: From Idea to Green Light (UK NHS, T&O)

Knowledge base for Dr Ahmed Atwa. LED in T&O at Blackpool Teaching Hospitals NHS FT, NIHR Associate PI on FACT.1. Compiled October 2026. Sources are listed in `A_sources.json`. Anything marked **[verify]** is a rule of thumb or a detail that varies locally, so confirm it before relying on it.

---

## 0. The strategic frame (read this first)

ST3 scoring is the constraint that matters, so design every project with it in mind:

- Only papers indexed in **both PubMed and Web of Science** count, and first-author papers are scored separately from other-author papers. Cureus does not count. Associate PI status counts once.
- Check every target journal in two places before you start writing:
  - the Clarivate Master Journal List (https://mjl.clarivate.com), to confirm Web of Science indexing (SCIE or ESCI);
  - the NLM Catalog (https://www.ncbi.nlm.nih.gov/nlmcatalog), to confirm the journal is MEDLINE-indexed. A journal whose papers reach PubMed only through PMC deposit is riskier.
- Re-read the current year's self-assessment scoring PDF each recruitment round. It is hosted by the Yorkshire & Humber deanery (the national T&O ST3 recruitment office). The rules change from year to year, so the current PDF overrides anything in this KB. **[verify]**
- **Portfolio maths:** aim for a pipeline with staggered completion dates, not one hero project. A realistic steady state for a busy LED:
  - 1 systematic review or meta-analysis running at any time (your first-author engine);
  - 1 retrospective cohort from Blackpool data (first-author, local);
  - 1 to 2 collaborative or multicentre projects (other-author, low effort per paper);
  - 1 "fast" item: a letter, protocol or technical note in an indexed journal. **[verify]** that this item type scores before you invest in it.
- **The rule that saves the most pain:** classify the project (audit, service evaluation or research) *before* you collect any data. Research cannot be approved retrospectively (UHL SOP; HRA).

---

## 1. Finding ideas

### 1.1 Gap-finding sources (ranked by yield for a T&O LED)

| Source | How to mine it | Typical output |
|---|---|---|
| **Your own audits and service evaluations** (distal radius vs BOAST, VTE prophylaxis duration) | Ask "what did the audit show that nobody can explain?" Turn variation into a research question, e.g. "Is X associated with Y?" | Retrospective cohort (research) or a published audit/QI paper |
| **BOASTs** (26 clinical and 6 process standards; newest are arterial injury Jun 2026, outpatient/on-call Feb 2026, MSK soft-tissue infection Jul 2025, compartment syndrome Jul 2025, spine assessment Apr 2025) | New standards mean the evidence behind them is thin and compliance is unknown. Run a multicentre compliance audit, then a research question on the outcomes of compliance | Collaborative audit; SR of the evidence behind a standard |
| **NICE research recommendations** | Each guideline has a "Recommendations for research" chapter. For example, CG124 (hip fracture) asks: CT vs MRI for occult hip fracture; regional vs GA; undisplaced intracapsular fracture management; intensive rehab; early supported discharge from care homes; THA vs hemi long-term; femoral component design. NG38 (non-complex fractures) and NG37 (complex fractures) have their own | SR or MA, registry study (NHFD/NJR), protocol for a trial |
| **James Lind Alliance PSPs** (listed by BOA): hip and knee replacement for OA (2026, survey open); first-time soft tissue knee injury (2023); problematic hip replacement (2021); complex fractures (2020); elbow (2019); foot and ankle (2019); revision knee (2018); upper-limb fractures in people over 50 (2017); broken bones in older people (2016); early hip and knee OA (2015); shoulder surgery (2014); plus the international Major Trauma PSP (AO-funded) | Funders commission against these. BOA says the JLA process produced 9 commissioned orthopaedic trial calls in 2 years. An SR answering a JLA question is easy to justify to editors | SR or scoping review; feasibility work |
| **Cochrane reviews (Bone, Joint & Muscle Trauma)** | Read the "Implications for research" section and the GRADE tables. Low or very-low certainty evidence plus an old search date gives you an update or a new SR. Indirectness is the commonest reason surgical fracture evidence gets downgraded (meta-research, PMC11973413) | SR update; non-Cochrane MA |
| **Limitations / future research sections** of recent BJJ, BJO, Injury and JBJS papers | Keep a running "gap log". Five papers that all say "a larger multicentre study is needed" is a collaborative project | Cohort, collaborative |
| **NHFD / NJR annual reports** | Variation between units, and outcomes flagged as unexplained | Registry application; local comparison study |
| **Clinical friction** (on-call, clinic, theatre) | Write down "why do we do X?" moments the same day | Survey; diagnostic accuracy; cohort |

### 1.2 Framing the question

- **PICO**: interventional or comparative questions. Population, Intervention, Comparator, Outcome (plus Timeframe = PICOT).
- **PECO**: exposure or aetiology questions. Population, Exposure, Comparator, Outcome. Use it for registry and observational work, e.g. "Does time-to-theatre >36 h (E) vs ≤36 h (C) increase 30-day mortality (O) in hip fracture (P)?"
- **PIRT / PIRD**: diagnostic accuracy. Population, Index test, Reference standard, Target condition.
- **SPIDER**: qualitative or mixed methods. Sample, Phenomenon of Interest, Design, Evaluation, Research type.
- **PCC**: scoping reviews (JBI). Population, Concept, Context.
- **Outcome sets**: before choosing outcomes, check the COMET Initiative database (https://www.comet-initiative.org) for a core outcome set. Note that COMET is a core-outcome-set initiative, *not* a trainee collaborative. Reviewers like COS-aligned outcomes.

### 1.3 FINER screen: tick all before committing

- [ ] **Feasible**: enough patients or records? Calculate a sample size, or at least an events-per-variable estimate (≥10 to 20 events per predictor for regression). Data actually recorded in the notes or EPR? Time available is realistic?
- [ ] **Interesting**: would a consultant at a regional meeting care?
- [ ] **Novel**: searched PubMed, Embase (via NHS Knowledge & Library Hub, https://library.nhs.uk) and PROSPERO, with no identical study in the last 3 to 5 years, or yours is clearly bigger, better or UK-specific.
- [ ] **Ethical**: approvals route identified (Section 3).
- [ ] **Relevant**: maps to a JLA, NICE or BOAST gap, or a local problem.

### 1.4 One-hour feasibility check (before telling anyone)

- [ ] Write the question in PICO/PECO in one sentence.
- [ ] Run a 20-minute PubMed search and note the 3 closest papers.
- [ ] Check PROSPERO and OSF for registered reviews on the same question.
- [ ] Estimate n: how many eligible cases per year at Blackpool? (Ask the coding/BI team, or count from theatre logs or the NHFD local dashboard.)
- [ ] Identify the data source (EPR, PACS, theatre system, local NHFD/NJR submissions).
- [ ] Name a target journal (indexed in both PubMed and WoS) and pick its reporting guideline (STROBE, PRISMA 2020, STARD 2015, CONSORT 2025, SPIRIT 2025, SQUIRE 2.0 for QI).
- [ ] Name a consultant supervisor and a likely statistician.
- [ ] Classify it with the HRA decision tool (Section 3.1).

---

## 2. Choosing a design a busy LED can actually finish

### 2.1 Design menu

Time is LED working-hours estimates for idea to submission. **[verify]** Treat these as rules of thumb.

| Design | Team | Approvals | Time to submission | Acceptance prospects | ST3 value | Notes |
|---|---|---|---|---|---|---|
| **Systematic review ± meta-analysis** | 3 to 5 people (2 independent screeners or extractors are mandatory), a librarian helps | None (no patients). PROSPERO registration expected | 6 to 12 months part-time. Borah et al. 2017 found registered SRs took a mean of ~67 weeks to publication | Good if the question is a genuine gap and the methods are rigorous (PRISMA 2020, RoB 2 / ROBINS-I, GRADE). Poor if it is redundant: editors now reject "me-too" MAs | First-author engine, fully under your control | Best fit for an LED because it runs on evenings and weekends. Avoid topics with 5 existing MAs |
| **Scoping review** | 2 to 4 | None. Register on OSF (PROSPERO does not accept scoping reviews) **[verify]** | 6 to 9 months | Moderate; JBI methods and PRISMA-ScR required | First-author | Good for emerging topics (e.g. AI in fracture detection) |
| **Umbrella review** | 3 to 5 | None. PROSPERO | 6 to 12 months | Moderate to good when many conflicting MAs exist | First-author | Needs AMSTAR-2 appraisal skill |
| **Retrospective cohort / case-control (single site)** | You, a supervisor, a statistician, 1 to 3 data collectors | Usually counts as research, so needs sponsor + HRA approval ± REC (see 3.4) | 9 to 15 months (approvals 2 to 4 months, data 2 to 4 months, analysis and writing 2 to 3 months) | Moderate. Single-centre retrospective work goes to BJO, Injury, Cureus-tier journals; aim for indexed specialty journals. Strength comes from size and a novel question | First-author | Pre-register it (OSF) and use STROBE to stand out |
| **Multicentre retrospective cohort** | Lead site plus 5 to 30 site leads | HRA approval covers all English sites, plus each site's C&C confirmation | 12 to 24 months | Good; national data carries weight | First-author for the lead. Collaborator authorship for the rest **[verify]** how collaborator-listed (PubMed "collaborator") papers score | Great for leadership points too |
| **Registry study (NJR, NHFD/FFFAP, HES)** | Needs a statistician and usually an academic partner | Registry EoI → committee → HQIP/NHSE data controller approval → DSA. ± REC/CAG | 12 to 30 months, depending on data access | High: large n, top journals | First-author if you lead | NJR full applications are reviewed quarterly. HES costs about £9.6k to £39k in fees (see 5.6). Realistic only with an academic unit |
| **Cross-sectional survey** (surgeons, trainees, patients) | 2 to 4 people, plus distribution via BOTA, BOA or specialist societies | Staff-only surveys are often not research, or need only light-touch review. Patient surveys are usually research (HRA approval; REC depends) | 4 to 9 months | Low to moderate; editors are tired of low-response surveys. Make the response rate defensible and use CHERRIES (online) or CROSS | First-author | Quick win, but choose the journal carefully |
| **Diagnostic accuracy** (e.g. a clinical test vs MRI) | 3 to 5 people; radiology buy-in | Retrospective: HRA ± REC. Prospective: REC | 9 to 18 months | Moderate to good with STARD 2015 and adequate n | First-author | Fits on-call imaging questions (scaphoid, occult hip) |
| **Audit / QI → published paper** | 1 to 3 | Local audit registration only | 3 to 6 months | Lower. BMJ Open Quality (indexed) and journals that take QI pieces; use SQUIRE 2.0 | Counts as a paper only if indexed in both. Audit also scores in its own domain | Your existing distal radius and VTE work belongs here |
| **Technical note / surgical technique** | 1 to 3 | Usually none (consent for photos) | 1 to 3 months | Variable; check whether the journal is WoS-indexed | **[verify]** whether this article type counts; usually it does as a publication if indexed | Low effort, low weight |
| **Letter / correspondence** | 1 to 2 | None | Days | High, if timely (within 4 to 6 weeks of the target paper) | **[verify]** many ST3 schemes exclude letters or score them lower | Do not count on it |
| **Protocol paper** (for an SR or trial) | Same as the parent study | Parent study approvals | 1 to 2 months after registration | Good (BMJ Open; JMIR Research Protocols; Systematic Reviews) | A full indexed paper, typically scored as a publication **[verify]** | Doubles the output of one project |
| **Trainee collaborative (national)** | 50 to 500 collaborators | Lead obtains approvals; local leads register audit or C&C locally | Your effort: 10 to 40 h over 6 to 12 months | High (multi-centre n) | Usually other-author or collaborator; leadership if you are the site or regional lead | Join via BOTA (www.bota.org.uk) and social media; ask about LED eligibility |
| **Prospective RCT** | CTU, statistician, funding | Full REC + HRA + MHRA if CTIMP/device | 3 to 6 years | High | Not an LED solo project. Your route in is Associate PI / site PI roles | You already have FACT.1 |

### 2.2 Decision tree: which design for which question?

```
Do you need patients' data at all?
├─ NO → Is there existing literature to synthesise?
│        ├─ Many primary studies, focused PICO → Systematic review ± MA (PROSPERO)
│        ├─ Broad / emerging topic, mapping concepts → Scoping review (OSF, JBI/PRISMA-ScR)
│        ├─ Multiple conflicting SRs exist → Umbrella review (PROSPERO)
│        └─ Opinions of clinicians → Staff survey (check HRA tool; often non-research)
└─ YES → Is the data already collected in routine care?
         ├─ YES → Is it local only?
         │        ├─ YES → Measuring vs a standard? → AUDIT (local registration)
         │        │        Describing what we do? → SERVICE EVALUATION
         │        │        Testing a hypothesis / generalisable? → RESEARCH: retrospective cohort/case-control
         │        └─ NO (national) → Registry study (NJR / NHFD / HES) or multicentre collaborative
         └─ NO (new data collection) → Will treatment be allocated by protocol?
                  ├─ YES → Trial (needs CTU; join as API/PI rather than lead)
                  └─ NO → Prospective observational / diagnostic accuracy (REC + HRA)
```

### 2.3 Design-specific quality checklist (what makes it "high quality")

- [ ] Protocol written and dated before data collection.
- [ ] Registered publicly: PROSPERO (SR), OSF (observational, scoping), ISRCTN (trials).
- [ ] Reporting guideline followed and the checklist submitted (EQUATOR Network: https://www.equator-network.org).
- [ ] Sample size or precision justified.
- [ ] Confounders pre-specified (DAG for cohort studies), plus a statistician-approved SAP.
- [ ] Missing data handled explicitly (multiple imputation, or at least reported).
- [ ] Two independent reviewers for screening, extraction and RoB (SR).
- [ ] GRADE certainty reported (SR).
- [ ] Data-sharing statement and code availability (GitHub/OSF).

---

## 3. UK approvals and governance

### 3.1 Step 1: Is it research? (always first)

Use the **HRA "Is my study research?" decision tool** (http://www.hra-decisiontools.org.uk/research/). The HRA says its outcome "can be taken as authoritative" if the inputs are accurate. Save a PDF of the result in the project folder. The managing organisation (Blackpool) makes the final decision.

| | Research | Service evaluation | Clinical audit |
|---|---|---|---|
| Intent | Generate **generalisable new knowledge**; test a hypothesis | "What standard does this service achieve?" | "Does this service reach a **predetermined standard**?" |
| Randomisation | May | No | No |
| Intervention | May compare or allocate interventions | Only interventions already in use, chosen by clinician and patient | Same as service evaluation |
| Data | Often beyond routine care | Usually existing data, ± simple questionnaire | Usually existing data |
| UK approval | Sponsor + HRA approval ± REC (+ CAG if identifiable data used without consent) | Local clinical governance / audit department; Caldicott advice | Local audit department registration |

Source: Warwick RIS summary of the HRA "Defining Research" table, and the HRA "What approvals do I need?" page.

**Traps:**

- "Retrospective" does not mean "not research". A retrospective notes review that tests a hypothesis (e.g. "risk factors for X") is research.
- You can publish audits and service evaluations, but you cannot call them research, and journals increasingly ask for the HRA tool output or a governance statement. Keep the audit registration number.
- Uncertain cases: email the HRA queries line (queries@hra.nhs.uk) with the tool PDF and a one-page outline. Copy in Blackpool R&D.

### 3.2 Step 2: What approvals does research need? (England)

```
Research involving NHS patients/data/staff/premises in England?
├─ YES → HRA Approval needed (via IRAS) — covers study-wide governance
│        ├─ Does it need NHS REC review too?  → use HRA tool "Do I need NHS REC review?"
│        │     (hra-decisiontools.org.uk/ethics)
│        │   Typically REC NOT needed: research limited to previously collected,
│        │     NON-IDENTIFIABLE data (to the research team); NHS staff-only studies
│        │   Typically REC needed: identifiable data, new data collection from patients,
│        │     any intervention, adults lacking capacity, prospective patient surveys
│        ├─ Identifiable confidential patient info used WITHOUT consent by people
│        │     outside the direct care team? → CAG (s251) support needed
│        └─ Then: each site confirms Capacity & Capability (C&C) → site "green light"
└─ NO (non-NHS) → University ethics, etc.
```

- **Staff-only studies** (e.g. surveying NHS staff) are exempt from REC but still need HRA study-wide assessment (Manchester University HRA page).
- **Local variation:** some trusts manage single-site, fully anonymised, care-team-extracted retrospective studies under local sponsor governance with no HRA submission at all. Barts Health/QMUL has an SOP for exactly this, logged on EDGE as "no HRA submission made". Ask Blackpool R&D which route they use. That one email can save 2 months. **[verify locally]**

### 3.3 The governance components

- [ ] **Sponsor.** Every research study needs a sponsor under the UK Policy Framework for Health and Social Care Research. For a single-site LED study this is normally **Blackpool Teaching Hospitals NHS FT** via R&D. For multicentre work it may be a university or the lead trust. Sponsor review typically wants: protocol, CI CV, GCP certificate (<3 years old), peer review evidence, departmental and clinical-director sign-off (C&C), and a costing or "no cost" declaration (Barts SOP model).
- [ ] **Chief Investigator (CI) / PI.** You can be CI on your own study if the sponsor agrees. Many trusts want a consultant as CI or supervisor for LEDs. **[verify]**
- [ ] **GCP training.** Free on NIHR Learn (https://learn.nihr.ac.uk), about 6 hours online, 6 CPD points. Most sponsors and CTUs expect a certificate less than 3 years old, with the GCP refresher module in between.
- [ ] **IRAS.** The Integrated Research Application System (https://www.myresearchproject.org.uk) is the single application for HRA approval ± REC. The document set typically includes: protocol, IRAS form, Organisation Information Document (OID), Schedule of Events (SoECAT if NIHR portfolio or funded), data collection form, PIS/consent (if prospective), CVs, insurance or indemnity letter, and the sponsor's authorisation.
- [ ] **HRA approval.** Reported as a **median of 60 days** in 2025-26 (63, 63, 70, 66 and 60 days in the 5 preceding years, per the HRA annual report). REC review runs in parallel where needed.
- [ ] **Local Capacity & Capability (C&C).** After HRA approval, each NHS site's R&D confirms it can host the study (staff, resources, data access). At your own trust with no external costs this can be quick, typically 2 to 6 weeks. **[verify]**
- [ ] **Caldicott Guardian.** Advises on any use of patient-identifiable information beyond direct care. Their written recommendation is mandatory for CAG applications. Their sign-off is commonly needed for service evaluations or audits leaving the care team.
- [ ] **UK GDPR and data protection.**
  - Lawful basis for NHS research is "task in the public interest" (Art 6(1)(e)), *not* consent (HRA GDPR guidance). The special-category condition is usually Art 9(2)(j) (research), with safeguards.
  - Consent is still relevant to the **common law duty of confidentiality**. People outside the care team need consent or s251 support to access confidential information.
  - Apply data minimisation: collect only the variables you will analyse.
- [ ] **DPIA (Data Protection Impact Assessment).** Required under UK GDPR Art 35 for high-risk processing (large-scale health data, new technology, linkage, data leaving the trust). Ask the Trust IG / DPO team early; many trusts require a DPIA screening for every research data flow. **[verify Blackpool process]**
- [ ] **Anonymisation vs pseudonymisation** (ICO guidance, finalised Apr 2025).
  - Identifiability sits on a spectrum. Use the "motivated intruder" test.
  - **Pseudonymised data is still personal data.** A spreadsheet with a study ID and a locally kept key is pseudonymised, not anonymised.
  - "Anonymised to the research team" means the care team extracts the data, strips identifiers, and the research team never sees the key. This is often what lets a study avoid REC review.
  - Never put dates of birth, full postcodes, NHS/hospital numbers or exact dates of rare events in the analysis file. Use age, partial postcode and relative days.
- [ ] **National Data Opt-out.** Applies to confidential patient information used for research or planning *without consent* (i.e. s251 studies). It does not apply to anonymised data or to consented studies.
- [ ] **Section 251 / CAG** (https://www.hra.nhs.uk/about-us/committees-and-services/confidentiality-advisory-group/).
  - Needed when confidential patient information is used without consent outside the direct care team in England or Wales (e.g. a researcher who is not in the care team screening notes, or a multicentre study collecting identifiers for linkage).
  - Research applications go through IRAS. Submit by the meeting cut-off date, choosing the full review or precedent set pathway.
  - Mandatory documents: authorised CAG form, IRAS XML, protocol, data flow diagram, written Caldicott Guardian recommendation. Expected if relevant: patient notification materials with a project-specific opt-out, evidence of PPI, and DSPT status.
  - Annual review reports are due every 12 months.
  - Realistic time: 2 to 6 months on top of HRA approval. **[verify]** **Design CAG out wherever possible**, e.g. have the care team extract the data, or use consent.
- [ ] **Consent.** Needed for prospective patient studies, including surveys and interviews, unless REC agrees otherwise. Use HRA consent and PIS guidance. Retrospective anonymised studies do not need individual consent.
- [ ] **PPI (patient and public involvement).** Increasingly expected by funders, CAG and editors. Even 2 to 3 patients reviewing the question and outcomes strengthens the application. Ask R&D whether Blackpool has a PPI group.

### 3.4 Most likely routes for your projects (cheat sheet)

| Scenario | Classification | Approvals | Typical time to green light |
|---|---|---|---|
| Distal radius management vs BOAST at Blackpool | Audit | Register with the Blackpool audit/clinical governance team | 1 to 4 weeks |
| VTE prophylaxis duration: describing current practice | Service evaluation | Clinical governance registration, ± Caldicott advice | 2 to 6 weeks |
| "Risk factors for failure of X at Blackpool, 2018-2025": care team extracts, anonymised | Research | Sponsor (Trust) + HRA approval (no REC, per the HRA tool), *or* local-only route if R&D allows + C&C | 2 to 4 months |
| Same study, but the researcher is not in the care team and sees identifiable notes | Research | HRA + REC + **CAG** (or consent) | 4 to 9 months. Avoid |
| Prospective PROMs collection in clinic | Research | HRA + REC + consent + C&C | 3 to 5 months |
| National survey of UK T&O surgeons | Staff survey (often research) | HRA tool; if research, HRA approval (no REC) or university ethics | 1 to 3 months |
| Systematic review | Not human-participant research | PROSPERO only | 2 to 8 weeks for registration |
| NJR or NHFD data analysis | Research (secondary data) | Registry EoI → committee → HQIP DARG → DSA ± REC/CAG | 6 to 18 months |
| Joining a national collaborative as site lead | Depends on the lead (audit or research) | Local audit registration, or C&C for HRA-approved research | 2 to 8 weeks |

### 3.5 Blackpool Teaching Hospitals R&D: what is known

- **Contact:** Clinical Research Centre, 2nd Floor, Area 5, Blackpool Victoria Hospital, Whinney Heys Road, FY3 8NR. Tel 01253 951514.
  - Email **bfwh.prc.blackpool@nhs.net**
  - Research ideas mailbox: **bfwh.researchideas@nhs.net**. Use this for your first approach.
- **Activity:** over 100 studies a year, more than 40 PIs, a Research Delivery Team and a Clinical Studies Centre. More than 140 studies are open at any time, and more than 14,000 participants have been recruited since 2008. **Orthopaedics** is named among the expanding research areas.
- **Affiliations:** a partner trust in the **NIHR Manchester Biomedical Research Centre**. Regional NIHR support comes from the **NIHR Research Delivery Network (RDN)**. The RDN replaced the Local Clinical Research Networks on 1 Oct 2024. The **NIHR Research Support Service North West hub** is led by Lancaster University with Liverpool, Manchester and Manchester Metropolitan universities.
- **What the website does not show:** sponsorship SOPs, internal grant schemes and the retrospective-study route. Ask R&D directly.
- **First email to R&D (template checklist):**
  - [ ] one-page outline (question, design, data, sites);
  - [ ] HRA tool PDF;
  - [ ] supervisor named;
  - [ ] the questions: "Will the Trust sponsor?"; "Is HRA submission needed for a single-site anonymised retrospective study, or is there a local route?"; "Who does DPIA screening?"; "Is there statistician support or a small grants scheme?"; "Is there an internal peer-review process?"

### 3.6 Master pre-data-collection checklist

- [ ] HRA "Is my study research?" result saved.
- [ ] HRA "Do I need NHS REC review?" result saved (if research).
- [ ] Supervisor (consultant) agreed in writing.
- [ ] Protocol v1.0 dated, version-controlled.
- [ ] Peer review of the protocol done (internal R&D, statistician, or RSS).
- [ ] Sponsor confirmed (letter or email).
- [ ] GCP certificate in date (<3 years).
- [ ] IRAS form submitted / HRA approval letter received (or local-route confirmation).
- [ ] REC favourable opinion (if needed).
- [ ] CAG support (if needed); National Data Opt-out applied.
- [ ] DPIA completed or screened out by IG.
- [ ] Caldicott Guardian sign-off (where identifiable data is used).
- [ ] Local C&C confirmation / green-light email from R&D.
- [ ] Registration done (OSF / PROSPERO / ISRCTN).
- [ ] Data collection form piloted on 10 cases; data dictionary written.
- [ ] Secure storage agreed (Trust network drive or REDCap; never personal devices or email).
- [ ] Authorship plan agreed in writing (ICMJE criteria and order).

---

## 4. Protocol and registration

### 4.1 Which registry for which design

| Design | Register where | Cost | When |
|---|---|---|---|
| SR / MA / umbrella | **PROSPERO** (https://www.crd.york.ac.uk/prospero/). The new version launched in 2025 with automated processing and duplicate detection | Free | Before screening starts (ideally before searches finish). Do not register after data extraction |
| Scoping review | **OSF Registries** (https://osf.io/registries) or a published protocol (JBI Evidence Synthesis, BMJ Open) | Free | Before screening |
| Retrospective / observational | **OSF** (OSF Prereg template; there are templates for secondary data analysis) | Free | Before you look at outcome data |
| Trials (and prospective interventional) | **ISRCTN** (£226 + VAT for non-CTIMPs; CTIMPs are auto-registered via IRAS) or **ClinicalTrials.gov** (free) | See left | Before the first participant (HRA condition). Results due within 12 months of study end |

### 4.2 Protocol standards

- **SPIRIT 2025** for trial protocols (updated 2025; PMC12035670).
- **PRISMA-P** for SR protocols.
- **STROBE / RECORD** for observational and registry studies. RECORD is the extension for routinely collected data. Write the protocol to match the STROBE/RECORD headings.
- **Statistical Analysis Plan (SAP):** write it before you look at the data. It covers primary and secondary outcomes, analysis populations, models, confounders, missing data, sensitivity analyses and the software. Get a statistician's sign-off. Put it on OSF with the protocol for a timestamp.

### 4.3 Protocol publication (converts one project into two indexed papers)

| Journal | Indexed | APC | Notes |
|---|---|---|---|
| **BMJ Open** | PubMed and WoS | £2,535 + VAT (2026); institutional deals may cover it | Accepts protocols for SRs, cohorts and trials; overall acceptance ~27% |
| **JMIR Research Protocols** | PubMed; WoS (ESCI) **[verify]** | US$1,900, or US$950 if already peer-reviewed or funded | Fast |
| **Systematic Reviews** (BMC) | PubMed and WoS | APC **[verify]** | SR protocols |
| **BMJ Open Quality** | PubMed and WoS **[verify]** | APC | QI projects (SQUIRE) |

- Check whether NHS England / Blackpool (via the NHS library) or a university affiliation gives you an APC waiver or read-and-publish deal. **[verify]**

### 4.4 Protocol skeleton (copy into a new doc)

- [ ] Title, version, date, registration ID
- [ ] Team, roles, sponsor
- [ ] Background and gap (cite the JLA / NICE / BOAST source)
- [ ] Aim, objectives, PICO/PECO
- [ ] Design and setting
- [ ] Eligibility criteria
- [ ] Data sources and variables (attach a data dictionary)
- [ ] Outcomes (primary and secondary, with definitions and timepoints; COS if one exists)
- [ ] Sample size / power or precision
- [ ] Statistical analysis (summary, with the SAP attached)
- [ ] Bias and confounding
- [ ] Data management, security, retention
- [ ] Ethics and approvals route (HRA tool outputs)
- [ ] PPI
- [ ] Dissemination and authorship plan
- [ ] Timeline (Gantt)

---

## 5. Funding and support

### 5.1 NIHR

- **Associate PI Scheme.**
  - Any UK health or care professional can join. It is a 6-month programme on an NIHR portfolio study, mentored by the local PI, with a checklist on NIHR Learn signed off by the local PI and the national study team. Once signed off, the NIHR team issues a certificate.
  - You must register *before* starting; there is no retrospective recognition. You can hold only one Associate PI role at a time, and there is one per study per site.
  - Ineligible if your role is specifically funded for research.
  - **Your status:** FACT.1 Associate PI, which counts once for ST3. Further API roles add CV breadth (and are worth doing for site-PI experience), but don't add ST3 points. **[verify]**
- **Next step up: local PI or co-PI on a portfolio study.** Ask R&D and the RDN which T&O portfolio studies Blackpool could open, then volunteer to be site PI or sub-I. This gives authorship as a collaborator in many trials.
- **NIHR Research Support Service (RSS).**
  - Replaced the Research Design Service from 1 Oct 2023. It is free and confidential, covering pre-application to post-award (design, statistics, PPI, health economics). The North West hub is led by Lancaster University.
  - Use it for any grant application and for difficult study designs.
- **NIHR Research Delivery Network (RDN).** Replaced the CRN on 1 Oct 2024. It supports the delivery of portfolio studies and offers research delivery staff.
- **NIHR Academy.**
  - Pre-doctoral routes and the In-Practice Fellowship (IPF). The IPF is 50% clinical and 50% academic over 2 years, can fund a Master's, and requires no PhD. It has historically targeted GPs, dentists and some other professions, so **check current doctor eligibility**.
  - Integrated clinical academic routes (ACF) are for trainees.
  - Realistically, the NIHR Academy becomes relevant once you hold a training number or have a clear PhD plan. **[verify current schemes at nihr.ac.uk]**
- **NIHR Learn** (https://learn.nihr.ac.uk). Free GCP, informed consent, Associate PI and research skills courses.

### 5.2 Royal colleges and societies

| Scheme | Amount | Eligibility | Deadline (latest seen) |
|---|---|---|---|
| **RCS England pump-priming grant** | Up to £10k over up to 24 months (consumables, equipment, technical help; not salary) | RCS England members; new consultants (≤5 years), senior lecturers, **SAS doctors**, post-doctoral trainees; UK NHS or university employee | **31 Oct 2026, 2pm**. Success rate 35% in 2026. LED eligibility is unclear, so **[verify]** whether LEDs count as SAS |
| **RCSEd small research pump-priming grant** | Up to £10k (1 year) | Surgical trainees and recent consultants; must be a College Member or Fellow | Currently closed; watch rcsed.ac.uk/grants |
| **RCSEd FST-ASME educational research grant** | Up to £3k | FST and/or ASME members; surgical education projects | Closed currently. **Relevant to your MSc Med Ed** |
| **BOA/ORUK Research Fellowship** | 2 per year, up to £65k (salary up to £60k for 1 year + £10k costs) | BOA member ≥3 months; trainee with NTN and MRCS B; *or* post-CCT / SAS | 10 Jun 2026 (annual). Not open to non-NTN LEDs unless SAS |
| **ORUK funds** (https://oruk.org/our-research-funds/) | Various: BIOS/ORUK Pump-Prime (early or pilot T&O studies; deadline 4 Jan 2026); Early Career Research Fellowship (May); BAJIS/ORUK pump priming (up to £6k); BHS, BASK and BSSH fellowships; BOTA x ORUK sustainability (£1,500 seed) | Varies | Mostly annual, Jan to Jun |
| **Specialist societies** (BOFAS, BESS, BHS, BASK, BSCOS, OTS, BSSH) | Small grants and prizes | Usually membership | Check each |

### 5.3 Trust and university

- **Blackpool R&D:** ask about internal small grants, statistician time and library literature-search support. NHS librarians will run SR searches for you; that alone is worth hours.
- **Honorary university appointment:**
  - Lancaster University (Lancaster Medical School; RSS North West hub lead) and Manchester (BRC partner) are the natural fits.
  - An honorary research or clinical-teaching contract gives library access (Embase, Web of Science, full text), statisticians, potentially university sponsorship and ethics, and an academic affiliation on papers.
  - Ask your educational supervisor and R&D who holds existing honorary links. **[verify]**
- **NHS Knowledge & Library Hub** (https://library.nhs.uk): free access to Embase, CINAHL and MEDLINE databases via your NHS OpenAthens login.

### 5.4 Statistician access (in order of ease)

1. Trust R&D or BI analyst (ask whether R&D has a statistician).
2. NIHR RSS North West, which is free.
3. A university co-author via an honorary link.
4. A paid freelance statistician, as a last resort. Budget £40 to £80 per hour. **[verify]**
5. Do it yourself in R or SPSS for simple descriptive work, then have a statistician review it.

### 5.5 Registry access costs and processes

- **NJR:**
  - Submit an EoI to research@njr.org.uk at any time; the committee responds within about 1 month.
  - Full applications are reviewed at quarterly Research Committee meetings. Upcoming: deadline **17 Nov 2026** for the 15 Dec 2026 meeting, then 16 Feb 2027 for 16 Mar 2027.
  - HQIP's DARG then approves, and data are released through the Data Access Portal.
  - Every paper must be reviewed by the NJR before submission. Fees follow the NJR Cost Recovery Policy.
- **NHFD / FFFAP:**
  - Use the free public data on data.gov.uk first. For restricted data, send an EoI to fffap@rcp.ac.uk; the Scientific & Publications Committee reviews within 4 weeks.
  - Then HQIP and NHS England approve, and a DSA is signed.
  - No exploratory analysis is allowed and no identifiers are released. There are quarterly progress reports and a draft-review requirement. Charges are possible.
- **HES via NHS England DARS** (from 1 Apr 2026, ex VAT):
  - application £1,431; dissemination £1,290; linkage £2,862 per dataset; annual review £694.
  - Worked examples: £9,641 for a small request and £38,899 for a large 3-year request.
  - **Not an LED-solo route.** Partner with an academic unit.

---

## 6. Realistic timelines (idea → submission → publication)

Part-time LED estimates. Peer review usually adds 3 to 9 months, and BMJ Open's median time to first decision was 134 days.

| Design | Idea → approvals | Data / analysis | Write-up → submission | Submission → acceptance | Total idea → print | Bottlenecks |
|---|---|---|---|---|---|---|
| SR / MA | 2 to 6 weeks (protocol + PROSPERO) | 3 to 6 months (screening, extraction, RoB) | 1 to 2 months | 3 to 9 months (and expect 1 to 2 rejections) | **10 to 18 months** | Second reviewer availability; scope creep; the search becomes outdated (re-run it if >12 months old) |
| Scoping review | 2 to 4 weeks (OSF) | 3 to 5 months | 1 to 2 months | 3 to 9 months | 9 to 15 months | Too broad a PCC |
| Single-site retrospective cohort | 2 to 4 months (R&D, HRA) | 2 to 4 months | 1 to 2 months | 3 to 9 months | **9 to 18 months** | Approval route uncertainty; EPR data quality; statistician time |
| Multicentre cohort / collaborative lead | 3 to 6 months | 4 to 8 months | 2 months | 3 to 9 months | 15 to 30 months | Site C&C; chasing collaborators; data cleaning |
| Registry (NJR / NHFD) | 6 to 18 months (EoI → committee → DARG → DSA) | 3 to 6 months | 2 months, plus the registry's review of the draft | 3 to 9 months | 18 to 36 months | Quarterly committee cycles; DSA; academic partner needed |
| Staff survey | 1 to 2 months | 2 to 3 months (response window) | 1 month | 3 to 6 months | 6 to 12 months | Low response; distribution channels |
| Audit / QI paper | 2 to 4 weeks | 2 to 4 months (+ re-audit) | 1 month | 2 to 6 months | 6 to 12 months | Journals reject single-loop audits; close the loop |
| Protocol paper | Parent approvals | n/a | 2 to 4 weeks | 2 to 5 months | 3 to 6 months | Must be submitted before results exist |
| Collaborative (as collaborator) | n/a | 1 to 3 months of local data entry | Lead's job | Lead's job | 12 to 24 months | Out of your control: join several |

### 6.1 Back-planning for ST3

- Papers must be **published, or accepted with proof, by the application evidence deadline**. **[verify]** the exact "accepted vs in press" rule for the current year.
- Working backwards from an application window roughly 2.5 years away:
  - SRs and cohorts must start **now to 6 months from now**;
  - registry studies need a partner and an EoI **within the next 3 months** or they will miss the window;
  - collaboratives can be joined at any time but have a 12- to 24-month lag.
- Keep a tracker with: stage, next action, owner, target journal, indexing checked (Y/N), and the ST3 category it fills.

---

## 7. Ninety-day launch plan (actionable)

- [ ] **Week 1:** Email bfwh.researchideas@nhs.net with the R&D question list (3.5). Complete or renew GCP on NIHR Learn if it is more than 2 years old.
- [ ] **Week 1:** Convert the distal radius audit and VTE service evaluation into papers: re-audit or close the loop, write them up with SQUIRE, and target journals indexed in both databases.
- [ ] **Week 2:** Mine CG124 / NG38 research recommendations, the JLA complex fractures and fragility fracture PSPs, and the newest BOASTs. Shortlist 5 questions and FINER-screen them.
- [ ] **Week 3:** Pick 1 SR question. Write the PRISMA-P protocol, register it on PROSPERO, and recruit 2 co-reviewers (FY doctors, CTs, students who want first-author-adjacent positions).
- [ ] **Week 4:** Pick 1 Blackpool retrospective cohort question. Get the HRA tool outputs, a supervisor, and the protocol plus SAP to R&D.
- [ ] **Month 2:** Contact BOTA (www.bota.org.uk) and the T&O collaboratives on social media. Sign up as site lead for 1 to 2 national collaboratives. Ask the RDN which T&O portfolio studies need a local PI or sub-I.
- [ ] **Month 2:** Book an NIHR RSS North West consultation for the cohort design or any grant.
- [ ] **Month 3:** Submit the SR protocol to BMJ Open or Systematic Reviews (optional extra paper). Decide whether to apply for the RCS England pump-priming grant (31 Oct 2026, if eligible) or wait for the next ORUK / BIOS round.
- [ ] **Ongoing:** Keep a gap log (one line per idea), write 30 minutes a day, and run a monthly pipeline review with your supervisor.
