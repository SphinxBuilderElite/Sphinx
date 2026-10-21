# Referencing: a working guide

For Dr Ahmed Atwa. Checked 21 October 2026. Machine-readable version: `referencing.json`.

Your own course rule applies here too: **AI never writes the references.** Every reference goes in through Zotero from the real record (PubMed, DOI or the publisher page). Hallucinated references are now one of the fastest routes to desk rejection.

---

## 1. Vancouver in one page (ICMJE / NLM *Citing Medicine*)

Vancouver is the numbered style that medical journals inherited from the ICMJE "Uniform Requirements". The detailed rulebook is NLM's free book *Citing Medicine* (https://www.ncbi.nlm.nih.gov/books/NBK7256/). The ICMJE sample-reference page sits at https://www.nlm.nih.gov/bsd/uniform_requirements.html.

**In the text**
- Number references in the order you first cite them: 1, 2, 3...
- Reuse the same number every time you cite that source again.
- Format is set by the journal: superscript (BJJ), square brackets [1], or round brackets (1). ICMJE's own default is Arabic numerals in parentheses.
- Ranges and lists: 3-5 or 3,7,9. No spaces.
- Put the number where the claim is, not only at the end of a paragraph. The usual place is after the full stop with superscript, and before it with brackets. Follow the journal.
- References cited only in tables or figure legends take the number of the first text mention of that table or figure.

**In the list**
- **Authors:** surname then initials, no full stops, comma between authors: `Costa ML, Achten J, Parsons NR`.
- **How many:** ICMJE sample references list the **first six authors, then "et al."** when there are more than six. NLM itself now lists every author, so some journals want them all. Do whatever the journal's style says; the CSL file handles it.
- **Group authors:** use the group name as an author (e.g. `HEALTH Investigators`). If there are named authors and a group, list them as they appear in the byline.
- **Title:** sentence case, no quotation marks.
- **Journal:** the NLM abbreviation, without full stops (`N Engl J Med`, `Bone Joint J`, `Bone Jt Open`). Check it in the NLM Catalog (https://www.ncbi.nlm.nih.gov/nlmcatalog).
- **Date, volume, issue, pages:** `2014;349:g4807.` or `2002 Jul 25;347(4):284-7.` NLM shortens page ranges (284-7, not 284-287).
- **DOI:** add at the end as `doi:10.xxxx/xxxxx` when the journal asks for it. BJJ's own style file does not print DOIs; many Elsevier and BMC journals do.

## 2. Worked examples (Vancouver)

These follow the ICMJE/NLM patterns. Templates in angle brackets show the parts to fill in. They are not real references.

**Journal article (7+ authors, so first six then et al)**
> Costa ML, Achten J, Parsons NR, Rangan A, Griffin D, Tubeuf S, et al. Percutaneous fixation with Kirschner wires versus volar locking plate fixation in adults with dorsally displaced fracture of distal radius: randomised controlled trial. BMJ. 2014;349:g4807. doi:10.1136/bmj.g4807

**Journal article with a group author**
> HEALTH Investigators; Bhandari M, Einhorn TA, Guyatt G, Schemitsch EH, Zura RD, et al. Total hip arthroplasty or hemiarthroplasty for hip fracture. N Engl J Med. 2019;381(23):2199-208.

(Check the author list against PubMed before using this. The exact byline order on group papers varies.)

**Book**
> Browner WS, Newman TB, Cummings SR, Grady DG, Huang AJ, Kanaya AM, et al. Designing clinical research. 5th ed. Philadelphia: Wolters Kluwer; 2022.

**Chapter in an edited book**
> `<Chapter authors>`. `<Chapter title>`. In: `<Editors>`, editors. `<Book title>`. `<Edition>`. `<Place>`: `<Publisher>`; `<Year>`. p. `<first-last>`.

The NLM sample: Meltzer PS, Kallioniemi A, Trent JM. Chromosome alterations in human solid tumors. In: Vogelstein B, Kinzler KW, editors. The genetic basis of human cancer. New York: McGraw-Hill; 2002. p. 93-113.

**Online handbook (a living document with versions)**
> Higgins JPT, Thomas J, Chandler J, Cumpston M, Li T, Page MJ, et al., editors. Cochrane handbook for systematic reviews of interventions [Internet]. Version 6.5. Cochrane; 2024 [cited 2026 Oct 21]. Available from: https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current

**Website / web page**
> British Orthopaedic Association. BOASTs [Internet]. London: BOA; [date unknown] [cited 2026 Oct 21]. Available from: https://boa.ac.uk/standards-guidance/boasts.html

**Clinical guideline**
> National Institute for Health and Care Excellence. Fractures (non-complex): assessment and management. NICE guideline NG38 [Internet]. London: NICE; 2016 [cited 2026 Oct 21]. Available from: https://www.nice.org.uk/guidance/ng38

**Reporting guideline (cite the paper, not just the website)**
> Page MJ, McKenzie JE, Bossuyt PM, Boutron I, Hoffmann TC, Mulrow CD, et al. The PRISMA 2020 statement: an updated guideline for reporting systematic reviews. BMJ. 2021;372:n71. doi:10.1136/bmj.n71

> von Elm E, Altman DG, Egger M, Pocock SJ, Gøtzsche PC, Vandenbroucke JP; STROBE Initiative. The Strengthening the Reporting of Observational Studies in Epidemiology (STROBE) statement: guidelines for reporting observational studies. Lancet. 2007;370(9596):1453-7.

**Preprint**
> `<Authors>`. `<Title>`. medRxiv [Preprint]. `<Year Mon Day>` [cited `<date>`]. Available from: https://doi.org/`<doi>`

Say it is a preprint every time. Replace it with the published version before submission if one exists. Remember BJJ will not consider your own paper if it has been preprinted.

**Dataset**
> `<Organisation or authors>`. `<Dataset title>` [dataset]. `<Version>`. `<Place>`: `<Publisher/repository>`; `<Year>` [cited `<date>`]. Available from: `<URL or DOI>`

For your own OSF data and code: `Atwa A, <co-authors>. <Project title>: analysis code and data dictionary [dataset]. OSF; <year>. doi:10.17605/OSF.IO/<id>`

**Software: R**
> R Core Team. R: a language and environment for statistical computing [computer program]. Version 4.5.x. Vienna: R Foundation for Statistical Computing; 2025. Available from: https://www.R-project.org/

**R packages: run `citation("meta")` in R and copy what it gives you.** Packages often name a paper as the preferred citation. For `meta` this is:
> Balduzzi S, Rücker G, Schwarzer G. How to perform a meta-analysis with R: a practical tutorial. Evid Based Ment Health. 2019;22(4):153-60.

Always give the package version in the methods ("meta version 8.x; R 4.5.x"). `sessionInfo()` or `renv.lock` lists them.

## 3. NLM journal abbreviations and DOIs

- Search the NLM Catalog for the full title. The record shows the "NLM Title Abbreviation" and whether it is "Currently indexed for MEDLINE". One look does two jobs: the abbreviation and the ST3 indexing check.
- The PubMed record shows the abbreviation, volume, issue, pages and DOI. Import from PubMed, not from Google Scholar. Scholar metadata is often wrong.
- To find a DOI, use the article page, the PubMed record, or Crossref search (https://search.crossref.org).
- Zotero imports a DOI or PMID if you paste it into the magic wand ("Add item by identifier").

## 4. Harvard and APA (for med-ed journals)

Some medical-education journals and university assignments use author-date styles. Warwick assignments often use Harvard or APA. Check each journal, and let Zotero do the formatting.

**APA 7 basics**
- In text: (Costa et al., 2014) for three or more authors; (Costa & Achten, 2014) for two.
- Reference list: alphabetical by first author. List up to 20 authors.
- DOI as a URL: `https://doi.org/10.1136/bmj.g4807`.
- Example: Costa, M. L., Achten, J., Parsons, N. R., Rangan, A., Griffin, D., Tubeuf, S., & Lamb, S. E. (2014). Percutaneous fixation with Kirschner wires versus volar locking plate fixation in adults with dorsally displaced fracture of distal radius: Randomised controlled trial. *BMJ, 349*, g4807. https://doi.org/10.1136/bmj.g4807

**Harvard basics**
- In text: (Costa et al. 2014). Many versions exist ("Cite Them Right" is common in UK universities).
- Reference list is alphabetical. Journal titles are usually written out in full and italicised.

## 5. Journal-specific styles you will meet

| Journal | What the style does | Source / status |
|---|---|---|
| **Bone & Joint Journal / BJO / BJR** | Superscript numbers. First 6 authors then et al. (7 or more triggers it). NLM abbreviations in italics. No DOI printed. The 4,000-word limit **includes references**. Follows ICMJE in general. | Zotero CSL "The Bone & Joint Journal" (updated 25 Jan 2026) and BJJ/BJO instructions, both checked 21 Oct 2026 |
| **JBJS (Am)** | Numbered. Has its own CSL in the Zotero repository. | Check the current JBJS instructions for authors (the page did not load for verification) |
| **Injury and other Elsevier journals** | Many Elsevier titles accept any consistent style at first submission and reformat on acceptance. Elsevier's numbered Vancouver CSL is a safe default. | Check the Injury "Guide for Authors" before submitting |
| **Springer (AOTS, EJOST, Int Orthop)** | Numbered, Springer-style. Use the journal's own CSL. | Check the journal's submission guidelines |
| **BMC journals (BMC MSK, JOSR, BMC Med Educ)** | Numbered Vancouver in square brackets, with DOIs. | Check the BMC submission guidelines |
| **Medical Teacher, Medical Education, Clinical Teacher** | Vary between numbered and author-date. | Load the journal's CSL and check its instructions for authors |

**Rule:** never format references by hand. Pick the journal's CSL in Zotero, then switch styles in one click when you cascade to the next journal.

## 6. Zotero setup (once, about 30 minutes)

1. Install **Zotero 7** (https://www.zotero.org/download) and the **Zotero Connector** for your browser.
2. The **Word plugin** installs automatically. In Word it shows as a Zotero tab. For **Google Docs**, the Connector adds a Zotero menu inside Docs.
3. **Styles:** Zotero → Settings → Cite → "Get additional styles". Or browse the **Zotero Style Repository** (https://www.zotero.org/styles). Add The Bone & Joint Journal, JBJS, Injury/Elsevier Vancouver, AMA, APA 7 and Cite Them Right Harvard.
4. **Collect from the source:** on PubMed, click the Connector. With a DOI or PMID, use "Add item by identifier". Check the title case and the journal abbreviation once.
5. **Abbreviations:** in the document preferences, tick "Use journal abbreviation". Fill the "Journal Abbr" field from the NLM Catalog if it is empty.
6. **Retractions:** Zotero flags items retracted in the Retraction Watch database. Never ignore that red banner.
7. **Group libraries:** make one shared group per project so co-authors cite from the same library.
8. **Storage:** 300 MB is free. Keep PDFs in a linked folder (for example with the ZotMoov plugin) so you do not hit the limit.
9. **Better BibTeX** (https://retorque.re/zotero-better-bibtex/) for R, Quarto and RMarkdown:
   - It gives every item a stable citation key (for example `costa2014percutaneous`).
   - Set up "Keep updated" auto-export of the project collection to `references.bib` in the project folder.
   - In Quarto, add `bibliography: references.bib` and `csl: the-bone-and-joint-journal.csl` to the YAML. Cite with `[@costa2014percutaneous]`.
10. **Before submission:** refresh the citations, then check the list against the text. For the final upload, some journals want plain text. Use "Unlink citations" on a **copy** of the file, never the master.

## 7. Errors that annoy editors (and quick fixes)

1. **Fabricated or AI-generated references.** Check every item against PubMed or the DOI. Fix: only ever import from the source.
2. **Citing a paper you have not read**, for example quoting a statistic through a review that cited someone else. Cite the original, or say "cited in".
3. **Wrong order or gaps** (1, 2, 4...). Caused by manual numbering. Zotero fixes it.
4. **Mixed styles** after copy-pasting from older drafts. Refresh in Zotero.
5. **Inconsistent journal names** (full in some, abbreviated in others). Use NLM abbreviations throughout.
6. **Title case chaos.** Use sentence case in Vancouver.
7. **Out-of-date sources.** Citing a 2010 guideline when a 2024 version exists. Recheck NICE, BOAST and Cochrane versions.
8. **Citing retracted papers.** Check Zotero's retraction flags and Retraction Watch.
9. **Too many self-citations**, or citation-padding of the target journal. Editors notice.
10. **Abstracts and conference posters used as evidence** when a full paper exists. Cite the paper.
11. **Missing reporting-guideline citation** ("reported according to STROBE" with no reference).
12. **Software not cited**, or package versions missing.
13. **Unpublished data or personal communications in the reference list.** Most styles put these in the text only.
14. **Preprint cited when the peer-reviewed version is out.**
15. **Over the reference limit**, or BJJ's word count blown by a long reference list.

## 8. How many references?

There is no universal limit. BJJ and BJO set no maximum number, but references count towards the 4,000-word cap. These ranges are rules of thumb from ortho journals, not rules:

| Article type | Typical number |
|---|---|
| Original article (cohort, RCT) | 25-40 |
| Systematic review / meta-analysis | 40-80, plus the included studies (often in a separate list or supplement) |
| Scoping or umbrella review | 50-150 (inclusion is broad) |
| QI report (SQUIRE) | 15-30 |
| Survey | 20-35 |
| Educational research | 25-50 (med-ed papers cite more theory) |
| Protocol paper | 20-40 |
| Letter / correspondence | 5-10 (excluded for ST3) |

Always check the specific journal's instructions on the day you submit.

## 9. Pre-submission reference checklist

- [ ] Every reference imported from PubMed or a DOI, none typed or AI-generated
- [ ] Journal CSL selected; citations refreshed
- [ ] Numbering in order of first citation; nothing in the list that is not cited
- [ ] NLM abbreviations consistent
- [ ] DOIs present if the journal wants them
- [ ] Retraction flags checked
- [ ] Reporting guideline cited; software and package versions cited
- [ ] Preprints replaced with published versions
- [ ] Word count with references within the limit (BJJ: 4,000)
- [ ] Copy of the file unlinked only if the journal requires plain text

## Sources (checked 21 Oct 2026)

- NLM: ICMJE sample references: https://www.nlm.nih.gov/bsd/uniform_requirements.html
- NLM: *Citing Medicine*, 2nd ed.: https://www.ncbi.nlm.nih.gov/books/NBK7256/
- NLM Catalog: https://www.ncbi.nlm.nih.gov/nlmcatalog
- Zotero CSL for The Bone & Joint Journal: https://www.zotero.org/styles/the-bone-and-joint-journal
- BJJ instructions for authors: https://boneandjoint.org.uk/journal/BJJ/instructions-for-authors
- BJO instructions for authors: https://boneandjoint.org.uk/journal/BJO/instructions-for-authors
- Better BibTeX documentation: https://retorque.re/zotero-better-bibtex/
- Zotero Style Repository: https://www.zotero.org/styles
