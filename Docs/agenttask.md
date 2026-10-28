# AgentRules
1. Mandatory Commit Workflow

Every development process must be committed to GitHub. Commit every meaningful change, not just the final version.

During the initial development stage, create a separate commit whenever you:

Create a new page or screen.

Create a new file or component.

Implement a new function or feature.

Fix a bug or issue.

Update or refine existing functionality.

Improve the UI/UX or application performance.

Update the project configuration or documentation.

2. Commit and Push Every Update

After completing each meaningful development task:

Implement the change.

Test and verify the implementation.

Review the modified files.

Create a Git commit with a clear, descriptive message.

Push the commit to the GitHub repository.

Do not accumulate multiple unrelated changes into a single commit. Each commit should represent one logical unit of work.

3. Changes That Require Commits

The following changes must be tracked and pushed to GitHub:

Features: New functionality, pages, components, and integrations.

Issues: Changes made to resolve reported issues.

Bugs: Bug fixes and error corrections.

Updates: Dependency, configuration, and application updates.

Refinements: UI/UX improvements, code refactoring, and performance optimizations.

Documentation: Updates to the README, technical documentation, and project guidelines.

# TeckStack

Recommended production stack
- Mobile: React Native + TypeScript
- Navigation: React Navigation
- State management: Zustand or Redux Toolkit
- Local database: SQLite
- Data validation: Zod
- Testing: Jest + React Native Testing Library
- Build and release: Expo EAS Build, if we use Expo
- Cloud sync: Optional future feature, not required for the MVP