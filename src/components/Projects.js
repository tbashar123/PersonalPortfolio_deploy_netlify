import React from 'react';

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="project-card">
        <h3>Anime Slide Show</h3>
        <p>Link: https://github.com/tbashar123/AnimeSlideShow</p>
        <p>Duration: November 2022</p>
        <p>Created a simple slide show to show an Anime slide show using Html, CSS, Bootstrap. The different anime was One piece,
          Naruto, and Bleach
        </p>
      </div>
      <div className="project-card">
        <h3>Anime SearchBox</h3>
        <p>Link: https://github.com/tbashar123/Anime-SearchBox/tree/master</p>
        <p>Duration: November 2021</p>
        <p>Built an anime search database using React.js and the Jikan
Anime API by using React Hooks, fetching data and looping
through arrays
</p>
      </div>
      <div className="project-card">
        <h3>Tanvir-Coffee-Shop</h3>
        <p>Link: https://tbashar123.github.io/TCoffeeShop/</p>
        <p>Duration: May 2021</p>
        <p>Developed a Coffee shop animation app using React.js by
using hooks to store different data
</p>
      </div>
    </div>
  );
}

export default Projects;