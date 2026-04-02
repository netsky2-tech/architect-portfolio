# Design System Strategy: Modular Context Orchestration

## 1. Overview & Creative North Star: "The Architect’s Terminal"
This design system is a sophisticated translation of high-performance engineering into a visual language. We are moving away from "web-style" layouts toward **Modular Context Orchestration**. The Creative North Star is an integrated IDE (Integrated Development Environment) reimagined as a premium editorial experience.

It breaks the "template" look by treating the browser as a viewport into a multi-layered architectural system. We utilize **Cyber-Brutalist** principles—raw, honest expressions of structure and monospaced data—softened by a "CeraVe-clean" clinical precision. Expect extreme whitespace, rigid 0px border radii, and intentional asymmetry where technical metadata (labels, timestamps, coordinates) anchors the visual weight of large, airy content blocks.

## 2. Colors & Tonal Logic
The palette is rooted in `surface` (#10141a) to provide a deep, carbon-fiber foundation. The relationship between colors isn't just aesthetic; it’s semantic.

*   **Primary (`primary_container` #00ff41):** Used exclusively for "Active Execution" states. It represents the "Go" signal of a terminal.
*   **Tertiary (`tertiary_fixed_dim` #b2c5ff):** The Cobalt Blue. Use this for structural elements that represent ".NET Robustness"—backend architecture, logic gates, and infrastructure visualizations.
*   **The "No-Line" Rule:** Standard 1px solid dividers are strictly prohibited. Sectioning must be achieved through:
    *   **Tonal Shifts:** Placing a `surface_container_low` block against a `surface` background.
    *   **Negative Space:** Using a minimum of 80px vertical gaps to define new content modules.
    *   **Dot Grids:** Utilizing a subtle 12px dot grid to imply a container without drawing a physical line.
*   **Surface Hierarchy:** Use `surface_container_lowest` (#0a0e14) for the "Terminal Bed" (background) and `surface_container_high` (#262a31) for interactive modules.
*   **Glass & Gradient Rule:** For floating "AI Architect" insights or code overlays, use `surface_variant` at 60% opacity with a `20px` backdrop-blur. Apply a subtle linear gradient (from `primary` to `primary_container` at 5% opacity) to provide a "digital soul" to large surfaces.

## 3. Typography: Technical Editorial
We pair the clinical readability of **Inter** with the mechanical precision of **JetBrains Mono**.

*   **Display & Headlines:** Use **JetBrains Mono**. These should be set in `headline-lg` or `display-md` with tight letter-spacing (-2%). These aren't just titles; they are "System Headers."
*   **Body Text:** Use **Inter**. This provides the "Clinical/CeraVe" vibe—approachable, professional, and legible. Use `body-lg` for project descriptions to ensure an editorial, high-end feel.
*   **Labels & Metadata:** Use **JetBrains Mono** in `label-sm`. These should be used for technical specs (e.g., `STACK: .NET 8.0 // K8S`).
*   **Visual Hierarchy:** Establish authority by over-scaling numbers. If highlighting "15+ Years of Experience," the "15" should be `display-lg` in JetBrains Mono, while the description is `body-md` Inter.

## 4. Elevation & Depth: Tonal Layering
In a Cyber-Brutalist system, "shadows" are rare but intentional. We replace standard elevation with **Tonal Stacking**.

*   **The Layering Principle:** Instead of a drop shadow, a "selected" project card should transition from `surface_container_low` to `surface_container_highest`.
*   **Ambient Shadows:** If a module must "float" (e.g., a modal code snippet), use an extra-diffused shadow: `box-shadow: 0 20px 50px rgba(0, 255, 65, 0.05)`. This uses the `primary` color as a light source, mimicking the glow of a high-end monitor.
*   **The "Ghost Border" Fallback:** For buttons or input fields that require definition against complex backgrounds, use the `outline_variant` token at 15% opacity.
*   **Hexagonal Architecture Patterns:** Use CSS masks or SVG backgrounds to introduce hexagonal dot patterns in the `surface_container_lowest` layer. This subtly nods to software architecture without cluttering the UI.

## 5. Components

*   **Buttons (The "Execute" Action):**
    *   **Primary:** `0px` radius. `primary_container` background with `on_primary_container` text. High-contrast, no border.
    *   **Tertiary (The "Robust" Action):** Cobalt Blue `tertiary_container` background. Use for secondary technical documentation.
*   **Chips (The "Tag" System):** Small-caps JetBrains Mono. Use `surface_container_high` backgrounds. No borders. They should look like terminal arguments (e.g., `--version: 2.0`).
*   **Input Fields:** Ghost Borders only. Background should be `surface_container_lowest`. On focus, the bottom border "activates" with a `primary_container` 2px line.
*   **Cards & Lists:** **Strictly no dividers.** Use 32px of `surface_container_low` padding to separate content. Group related data using a `surface_container_highest` header bar (resembling a tab in an IDE).
*   **The "Terminal Breadcrumb":** A custom component at the top of every section showing the "pathway" (e.g., `root / projects / ai-orchestrator`).

## 6. Do’s and Don’ts

### Do:
*   **Embrace Asymmetry:** Align text to the left but place metadata (dates, tags) floating in the far right of the grid.
*   **Use Mono for Data:** If it’s a number, a code snippet, or a technical spec, it **must** be JetBrains Mono.
*   **Optimize for "The Scan":** Engineers scan for keywords. Use `primary` color sparingly to highlight technical keywords within Inter body text.

### Don’t:
*   **Don't use Rounded Corners:** Every `border-radius` must be `0px`. Roundness contradicts the "Brutalist Engineering" requirement.
*   **Don't use Centered Text:** All layouts should be left-aligned (standard terminal behavior) or justified to a strict grid. Centering feels like a "template," not a "system."
*   **Don't use Standard Icons:** Avoid "bubbly" or rounded icon sets. Use thin-stroke, geometric icons (e.g., Phosphor or Lucide) or, ideally, ASCII-inspired symbols.