# html-resume

A [resume](https://phoenix-meadowlark.github.io/html-resume/) created using JSX within react to load it's content from a json file. I decided to take on this project because:

1. I desperately needed a better looking resume,
2. using web technologies to do it seemed like a fun design challenge, and 
3. separating the content (json), structure (jsx), and display (scss) allows me to quickly modify any single aspect while keeping the others consistent.

The content of my resume can be found in `src/json/resume.js` (I like the flexibility of trailing commas, hence the `.js` file as opposed to `.json`).

The index file for styling can be found in `src/scss/resume.scss`, which references several files in `src/scss/resumeComponents/` (for modularity and readability).

The main js file for the structure (which is referenced by `index.js`) is `src/Resume.js`, and supporting component files can be find in `src/resumeComponents`.
