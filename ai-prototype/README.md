# AI Interface Prototype - Frontend Assessment

This project is a high-fidelity prototype of an AI Playground interface, designed and built as part of the Frontend Developer assessment. It replicates core functionalities found in leading LLM platforms like OpenAI and Anthropic.

**Live Demo URL:** [Insert Vercel Link Here]  
_(Please deploy on Vercel and paste the link above)_

---

## 📋 1. Research & Analysis (Requirement 1)

Before development, I analyzed three leading AI platforms to understand best UX practices:

1.  **OpenAI Playground:**
    - _Observation:_ Focuses on granular control. The UI is utilitarian, placing parameters (Temperature, Top P) on the right sidebar and the chat in the center.
    - _Key Takeaway:_ Sidebar navigation is essential for configuration.
2.  **Anthropic (Claude):**
    - _Observation:_ minimal, document-centric interface. Very clean typography and high contrast.
    - _Key Takeaway:_ Readability and whitespace are crucial for chat interfaces.
3.  **Hugging Face Spaces:**
    - _Observation:_ Community-driven with diverse model selectors.
    - _Key Takeaway:_ Users need a clear way to switch between different models.

**Core Features Selected for this Design:**

1.  **Model Selector:** Dropdown to switch between GPT-4, Claude, etc.
2.  **Parameter Tuning:** Sidebar controls for Temperature and Max Tokens.
3.  **Prompt Templates:** Quick-load buttons for common tasks (Summarize, Debug).
4.  **Dark/Light Mode:** Essential for developer comfort, persisted in session.
5.  **Output Actions:** Ability to Copy text and Download session as JSON.
6.  **Responsive Layout:** Sidebar acts as a drawer on mobile devices.

---

## 🎨 2. Design & Styling (Requirement 2)

### Design Approach

Instead of relying on pre-built UI kits, I adopted a **"Code-First Design"** approach based on wireframes. I focused on a clean, professional aesthetic suitable for developer tools.

### Styling Strategy (Custom CSS)

**Note:** While the requirement documentation suggested Tailwind CSS, I deliberately chose to implement this using **Native CSS (CSS Modules approach)**.

- **Reasoning:** This approach demonstrates my foundational understanding of:
  - **CSS Variables:** Used for theming (Light/Dark mode) and consistency.
  - **Flexbox & Box Model:** Used for complex layouts (Sidebar + Chat Area).
  - **Responsive Design:** Media queries implemented from scratch for mobile views.
  - **Maintainability:** Clean separation of concerns without relying on utility classes.

### Color Palette

- **Primary Action:** `#2563eb` (Blue-600) - Used for Buttons and Active states.
- **Background (Light):** `#ffffff` (White) / `#f8f9fa` (Slate-50)
- **Background (Dark):** `#0f172a` (Slate-900) / `#1e293b` (Slate-800)
- **Text:** High contrast Slate grays for accessibility.

---

## 🛠️ 3. Tech Stack & Development

- **Framework:** React.js (v18)
- **Build Tool:** Vite (for fast HMR and optimized build)
- **Language:** TypeScript (Strict Mode enabled)
- **Styling:** Vanilla CSS (Responsive & Themed)
- **Component Library:** Storybook (for component documentation)
- **Deployment:** Vercel

---

## 🚀 4. Features & Implementation Details

### A. Chat Interface

- **State Management:** Uses React `useState` to handle prompt input, loading states, and simulated API responses.
- **Mock API:** A simulated asynchronous delay (`setTimeout`) mimics fetching data from an LLM.

### B. Configuration Sidebar

- **Dual-Mode Layout:**
  - **Desktop:** Fixed sidebar on the left.
  - **Mobile:** Collapsible drawer triggered by a hamburger menu.
- **Parameters:** Sliders for Temperature (0-1) and Max Tokens (100-4000).

### C. Data & Output

- **JSON Export:** Users can download the current session (Prompt + Response + Params) as a `.json` file.
- **Clipboard:** One-click copy functionality for generated responses.

### D. Component Stories (Storybook)

Storybook is set up to document core UI components in isolation.

- **Path:** `.storybook/` & `src/stories/`
- **Components Covered:** Button, Slider, ChatBubble.

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Sidebar.tsx        # Settings & Theme Toggle
│   ├── ChatInterface.tsx  # Main Input & Output Area
│   └── mockData.ts        # Mock Models & Templates
├── stories/               # Storybook Files
│   ├── Button.stories.tsx
│   ├── Slider.stories.tsx
│   └── ChatBubble.stories.tsx
├── App.tsx                # Layout & State Orchestration
├── App.css                # Global & Layout Styles
└── main.tsx               # Entry Point
⚡ How to Run Locally
Clone the repository:
code
Bash
git clone [https://github.com/sonali131/AI_Prototype]
Install Dependencies:
code
Bash
npm install
Run Development Server:
code
Bash
npm run dev
Run Storybook:
code
Bash
npm run storybook
Submitted by: [Sonali Mishra]
Date: [07/12/2025]
```
