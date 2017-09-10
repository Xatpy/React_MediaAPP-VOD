# Introduction
Media App VOD (Video On-Demand). Three main features:
- Show catalog of movies/films in a carousel.
- Play videos
- Check history of played movies (using local storage)

# Technology description
Using React.js:
- create-react as base project template.
- react-router for SPA.
- [react-slick](https://github.com/akiran/react-slick) for carousel
- [react-player](https://www.npmjs.com/package/react-player) for Play videos.

# Instructions
 - Clear local storage:
 `localStorage.clear();`

# Install
`npm install`

# Execute
`npm start`

# Build application
`npm run build`

- To deploy in gh-pages branch in Github: `git subtree push --prefix build origin gh-pages`

# TO-DOs
  - Click on `enter` to select video.
  - Log in / users system (with Firebase).
  - Tests