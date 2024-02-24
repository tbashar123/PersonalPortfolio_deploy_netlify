import React from 'react';

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="project-card">
        <h3>
          <a href="https://github.com/tbashar123/Chessgame_deploy_netlify" target="_blank" rel="noopener noreferrer">
            Two Player Chess Game
          </a>
        </h3>
        <p>Link: <a href="https://github.com/tbashar123/Chessgame_deploy_netlify" target="_blank" rel="noopener noreferrer">https://github.com/tbashar123/TwoPlayerChessGame</a></p>
        <p>Duration: June 2023 - July 2023, December 2023 - Present(continued)</p>
        <p>
          Utilized Python's object-oriented programming principles to design and implement the game logic.
          Integrated Django to create a user-friendly web interface, allowing players to interact with the game through a modern and intuitive user interface.
          Designed and implemented a database schema to store game states and player moves ensuring persistence. Still continuing to work on it but the link up there is what
          I have so far.
        </p>
      </div>
      <div className="project-card">
        <h3>
          <a href="https://github.com/tbashar123/Anime-MangaRankingApp/tree/master" target="_blank" rel="noopener noreferrer">
            Anime/Manga Ranking App
          </a>
        </h3>
        <p>Link: <a href="https://github.com/tbashar123/Anime-MangaRankingApp/tree/master" target="_blank" rel="noopener noreferrer">https://github.com/tbashar123/Anime-MangaRankingApp/tree/master</a></p>
        <p>Link: <a href="https://animeandmangaranking.netlify.app/" target="_blank" rel="noopener noreferrer">https://animeandmangaranking.netlify.app/</a></p>
        <p>Duration: July 2023, December 2023 - Present(continued)</p>
        <p>
          Created an anime/manga ranking app, which makes the user rank his favorite arcs from 5 different series and favorite fights as well.
          I also have a list of my favorite anime series and links to each of them to the IMDb link. Furthermore, the technologies I used
          for this Project was React.js, Express.js, MongoDB. I used MongoDB to submit my favorite arcs and favorite fights list. Furthermore, I've used
          Netlify to deploy my frontend and Render to deploy my backend server. When you click the submit arc rankings button, sometimes
          it can take time for you to see the your arc rankings being submitted successfully. I still have to domore for this project because it's not finished yet 
          but the link for what I have so far, you can check above.
        </p>
      </div>
      <div className="project-card">
        <h3>
          <a href="https://github.com/tbashar123/TCoffeeShop" target="_blank" rel="noopener noreferrer">
            Tanvir-Coffee-Shop
          </a>
        </h3>
        <p>Link: <a href="https://github.com/tbashar123/TCoffeeShop" target="_blank" rel="noopener noreferrer">https://github.com/tbashar123/TCoffeeShop</a></p>
        <p>Link: <a href="https://tbashar123.github.io/TCoffeeShop/" target="_blank" rel="noopener noreferrer">https://tbashar123.github.io/TCoffeeShop/</a></p>
        <p>Duration: May 2021, July 2023(continued)</p>
        <p>
          Developed a Coffee shop animation app using React.js by
          using hooks to store different data, and I will continue this project by adding backend and other things as well.
        </p>
      </div>
    </div>
  );
}

export default Projects;
