# Contributing to Kawerify Tech Passwords

Thank you for your interest in contributing to the Kawerify Tech Passwords project! We welcome community modifications, UI enhancements, and educational improvements.

---

## 1. Non-Commercial Agreement

By contributing to this repository, you agree that:
- Your contributions will be released under the Custom Kawerify Tech Public License.
- You will not receive financial compensation for your contributions.
- The project will remain strictly **free of charge and non-commercial**.

## 2. Getting Started

1. Fork this repository on GitHub.
2. Clone your fork locally.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a feature branch:
   ```bash
   git checkout -b feature/my-amazing-improvement
   ```

## 3. Code Standards & Formatting

- **TypeScript**: Ensure all new files and components are fully typed. Do not use `any` unless absolutely necessary.
- **Material UI**: Follow the dark theme presets configured in `src/theme.ts`. Do not write inline styles that conflict with glassmorphic designs.
- **Linting & Verification**: Run linting checks and ensure a successful build:
   ```bash
   npm run lint
   npm run build
   ```

## 4. Submitting a Pull Request

- Keep pull requests focused on a single feature or bug fix.
- Ensure your commit messages are descriptive and short.
- Open a Pull Request on the main repository, explaining what changes were made and how they were tested.
