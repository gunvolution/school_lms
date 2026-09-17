---
name: Modern EdTech LMS
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#444653'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#757684'
  outline-variant: '#c4c5d5'
  surface-tint: '#3755c3'
  primary: '#00288e'
  on-primary: '#ffffff'
  primary-container: '#1e40af'
  on-primary-container: '#a8b8ff'
  inverse-primary: '#b8c4ff'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#440098'
  on-tertiary: '#ffffff'
  tertiary-container: '#5f00d1'
  on-tertiary-container: '#c9aeff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c4ff'
  on-primary-fixed: '#001453'
  on-primary-fixed-variant: '#173bab'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#eaddff'
  tertiary-fixed-dim: '#d2bbff'
  on-tertiary-fixed: '#25005a'
  on-tertiary-fixed-variant: '#5a00c6'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  title-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.025em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies a modern, structured, and reassuring EdTech aesthetic crafted specifically for Indonesian secondary school (SMP) ecosystems. It balances institutional authority with accessible clarity for three distinct personas: administrative operators needing high-density data management, teachers handling grading and daily attendance under time constraints, and adolescent students requiring intuitive, distraction-free navigation.

The design movement is **Corporate Modern with High Functional Legibility**:
- **Clarity over novelty:** Visual styling prioritizes predictable navigation, scannable data layouts, and instant status recognition.
- **Academic reliability:** Deep educational blues evoke trust and focus, accented by clear status indicators for classroom routines (attendance, CBT assessments, report generation).
- **Reduced cognitive friction:** Clean white card containers rest on cool slate foundations, using crisp borders and delicate elevation to organize information without visual fatigue.

## Colors

The color palette is built around structural clarity, academic focus, and rapid status auditing:

- **Primary & Interactive Blue (`#1E40AF`, `#2563EB`):** Represents school leadership, institutional depth, and active primary controls (submitting grades, creating classes, navigation anchors).
- **Assessment Violet (`#7C3AED`):** Dedicated to Computer-Based Tests (CBT), timed quizzes, question banks, and academic proctoring modules to visually separate evaluative tasks from everyday coursework.
- **Neutral & Surface Slates:**
  - Base canvas: `#F8FAFC` (Slate 50)
  - Surface cards & modals: `#FFFFFF`
  - Subtle secondary containers: `#F1F5F9` (Slate 100)
  - Hairline borders & table rules: `#E2E8F0` (Slate 200)
  - Secondary typography: `#64748B` (Slate 500)
  - Headings & primary typography: `#0F172A` (Slate 900)
- **Role-Based Status Accents (Absensi & Validasi):**
  - **Success / Hadir (`#059669`, surface `#ECFDF5`, border `#A7F3D0`):** Indicates on-time presence, completed assignments, and passing scores.
  - **Warning / Izin & Sakit (`#D97706`, surface `#FFFBEB`, border `#FDE68A`):** Flags excused absences, pending parent notes, or upcoming deadlines.
  - **Danger / Alpa & Bentrok (`#E11D48`, surface `#FFF1F2`, border `#FECDD3`):** Highlights unexcused absences, scheduling conflicts, missing grades, and urgent administrative alerts.

## Typography

Plus Jakarta Sans is utilized across all typography levels for its geometric balance, open counterforms, and contemporary professionalism. Its legibility supports rapid scanning across high-volume rosters, complex grading rubrics, and dynamic exam questions.

- **Display & Headlines:** Used strictly for portal dashboards, class names (e.g., *Kelas 8-B Bahasa Indonesia*), and module headings. Rendered with tight leading and weight `600` or `700` to anchor page hierarchy.
- **Titles & Labels:** Optimized for tabular columns, status indicators, and multi-step wizard steppers. `label-sm` applies uppercase tracking only when used inside badge tags (e.g., `HADIR`, `ALPA`, `CBT AKTIF`).
- **Body:** Standardized at `14px` (`body-md`) for desktop density and comfortable reading across multi-paragraph student submissions, assignment rubrics, and system notices.

## Layout & Spacing

This design system uses a structured 12-column fluid grid on desktop transitioning to a 4-column flow on mobile viewports.

- **Desktop (1024px+):** Max-width containment at `1440px` with persistent collapsible sidebar navigation (`260px` expanded, `72px` mini). Canvas outer margin is `2rem` (`margin`), with `1.5rem` (`gutter`) column gaps.
- **Tablet (768px - 1023px):** Fluid grid collapsing to single- or dual-pane workflows. Side navigation transitions into an overlay drawer. Outer margin scales to `1.5rem`.
- **Mobile (< 768px):** Single-column stack with `1rem` outer margins (`margin-mobile`) and `0.75rem` gutters. Tables shift to structured horizontal swipe cards or stacked attribute panels for student attendance.
- **Vertical Rhythm:** Controlled by the `space-*` scale. Component interiors adhere to `space-md` (`1rem`) or `space-lg` (`1.5rem`), maintaining visual breathing room between class summary statistics and student lists.

## Elevation & Depth

Visual hierarchy is maintained through crisp structural borders paired with restrained, low-diffusion ambient shadows. This prevents sensory overload during extended administrative work sessions.

- **Base Layer (Flat Canvas):** The application canvas sits at `#F8FAFC`. All primary content is enclosed in crisp white containers (`#FFFFFF`) with a 1px solid border (`#E2E8F0`).
- **Level 1 (Cards & Data Panels):** Used for student cards, class tiles, and filter bars. 
  - Border: `1px solid #E2E8F0`
  - Shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.04)`
- **Level 2 (Hover States & Active Dropdowns):** Used when hovering over class rosters or expanding filter selectors.
  - Border: `1px solid #CBD5E1`
  - Shadow: `0 4px 6px -1px rgba(15, 23, 42, 0.06), 0 2px 4px -2px rgba(15, 23, 42, 0.04)`
- **Level 3 (Modals, Roster Drawers, CBT Floating Bar):** Floating exam timers, student profile slide-outs, and confirmation dialogs.
  - Border: `1px solid #E2E8F0`
  - Shadow: `0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)`

## Shapes

The design system employs a **Rounded** shape geometry (`roundedness: 2`, base `0.5rem` / `8px` corner radius) to project an approachable yet disciplined tone appropriate for secondary education:

- **Inputs, Form Controls, & Buttons:** `0.5rem` (8px) for comfortable click targets and a tidy form alignment.
- **Card Containers & Data Tables:** `rounded-lg` (`1rem` / `16px`) with matching clip paths for internal header bars and row segments.
- **Status Chips & Pills:** Full pill (`9999px`) applied exclusively to attendance labels (*Hadir*, *Sakit*, *Izin*, *Alpa*) and countdown badges to maximize shape contrast against rectangular form fields.

## Components

### Buttons
- **Primary:** Background `#1E40AF`, text `#FFFFFF`, radius `0.5rem`, padding `0.625rem 1.25rem`. Hover `#1D4ED8`, focus ring `2px #2563EB` with `2px` offset.
- **Secondary / Outline:** Background `#FFFFFF`, border `1px solid #E2E8F0`, text `#0F172A`. Hover background `#F8FAFC`, border `#CBD5E1`.
- **CBT Specialized:** Background `#7C3AED`, hover `#6D28D9`, active `#5B21B6`. Reserved for starting tests, submitting answer sheets, and grading assessments.
- **Destructive:** Background `#FFF1F2`, border `1px solid #FECDD3`, text `#E11D48`. Hover background `#FFE4E6`.

### Attendance Badges & Chips
- Compact pills (`rounded-full`, padding `0.25rem 0.75rem`, font `label-sm`).
- **Hadir (Present):** Background `#ECFDF5`, text `#065F46`, border `1px solid #A7F3D0`.
- **Izin (Permitted):** Background `#FFFBEB`, text `#92400E`, border `1px solid #FDE68A`.
- **Sakit (Sick):** Background `#FEF3C7`, text `#78350F`, border `1px solid #FCD34D`.
- **Alpa (Absent without notice):** Background `#FFF1F2`, text `#9F1239`, border `1px solid #FECDD3`.

### Data Tables & Roster Lists
- **Header:** Background `#F8FAFC`, bottom border `1px solid #E2E8F0`, typography `label-sm` in `#64748B` with uppercase tracking.
- **Row:** Height `52px`, background alternating `#FFFFFF` and `#FAFAFA` (optional zebra), bottom border `1px solid #F1F5F9`. Hover background `#F8FAFC`.
- **Selection:** Row selection marks left edge with a `3px solid #2563EB` accent strip and tint `#EFF6FF`.
- **Pagination:** Footer panel anchored to table bottom containing active range indicators, per-page dropdown (10, 25, 50, 100), and compact numeric pagination pills.

### Inputs & Selection Controls
- Text inputs and dropdowns use height `40px`, background `#FFFFFF`, border `1px solid #E2E8F0`, inner padding `0.5rem 0.875rem`, radius `0.5rem`.
- Focus state applies border `#2563EB` and subtle ambient glow `0 0 0 3px rgba(37, 99, 235, 0.12)`.
- Error validation applies border `#E11D48` and displays `body-sm` guidance in `#E11D48`.

### Cards & Modular Containers
- Standard classroom and report cards utilize `#FFFFFF` surface, `1px solid #E2E8F0`, padding `1.25rem`, and corner radius `1rem`.
- Course cards include a 6px top accent bar keyed to subject category (e.g., `#2563EB` for Science/Math, `#7C3AED` for Assessments, `#059669` for Extracurriculars).

### CBT (Computer-Based Test) Exam Bar
- Sticky bottom or top bar rendered in `#0F172A` with contrasting `#FFFFFF` text.
- Displays fixed countdown timer in monospaced digits, quick jump pagination grid to navigate numbered questions (green for answered, amber for flagged/ragu-ragu, gray for unvisited), and persistent action trigger for final submission.