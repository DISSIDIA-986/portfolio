Scan my projects directory at /Users/niuyp/Documents/github.com/ and update my portfolio website.

Follow the update-portfolio skill workflow:

1. **Discovery**: Read current portfolio data, scan project directories for new/updated projects. Use Agent tools to parallelize scanning. Check README.md, CLAUDE.md, AGENT.md, and package files for each candidate project.

2. **Evaluation**: Score each candidate on complexity, uniqueness, completeness, diversity, and career relevance. Apply auto-skip rules for forks, tutorials, empty projects.

3. **Data Update**: Add qualifying projects to src/data/projects.js. Update categories in Projects.jsx if needed.

4. **SVG Generation**: Create architecture diagrams for new projects in public/images/projects/.

5. **Supplementary**: Update skills.js and experiences.js if new projects introduce new skills or milestones.

6. **Verify**: Run build to confirm no errors. Present summary table.

$ARGUMENTS
