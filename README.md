# Will’s Learning Lab

A fictional, noncommercial static website. No dependencies, build step, database, API or data submission.

## Preview locally
Extract the ZIP into a folder. Open index.html in your browser. Keep all six files together. Edit with any plain-text editor and refresh the browser to see changes.

Optional: if Python is already installed, open a terminal in the project folder and run `python -m http.server 8000` (or `python3 -m http.server 8000`). Visit http://localhost:8000 and stop the server with Ctrl+C.

## Deploy using GitHub and Vercel
1. Create a GitHub repository named wills-learning-lab.
2. Upload the six individual files to the repository root (not the ZIP or enclosing folder), then commit.
3. Sign in to Vercel and choose Add New > Project. Connect GitHub and import the repository.
4. Select Other as the framework preset. Leave the root at the repository root, use no install or build command, and set output directory to `.` if an override is needed. No environment variables are required.
5. Deploy. Open the assigned URL and test all three pages. The Hobby plan is intended for personal noncommercial use; check current limits. Dashboard labels may vary.
6. Commit changes to the production branch on GitHub to trigger a new deployment if automatic Git deployments are enabled.

## Practice checklist
- Navigate among all three pages and verify the active page indicator.
- On Resources, select each topic (two cards each), then All topics (six cards).
- Use Tab and Shift+Tab to check focus and the skip link; use arrow keys on the select control.
- Resize to a narrow mobile viewport. Check for horizontal overflow.
- Disable JavaScript: all resources should remain visible.
- Change a color in styles.css, edit a heading, or add a resource card with a matching data-category value.

The resource cards are fictional exercise descriptions, not links to real courses. Filtering happens entirely in the browser.
