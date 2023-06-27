import React from 'react';
import ParkPic from '../ParkPic.png';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Home() {
  return (
    <div>
      <section>
        <h1>Welcome to My Portfolio!</h1>
        <p>Hi, I'm Tanvir Bashar. I am a graduate at Lehman College who attained a B.S. in Computer Science.
          I love solving problems, creating side projects and networking. I value details, think strategically
and love to learn. I am a great team player, by making myself
available, helping the best way I can and asking for help
whenever it's needed. I thrive in the face of challenges.
          In addition, I also love playing Soccer, working out, watching/listening to podcasts, hanging out with family/friends, playing video games a little bit and traveling. I adore culture, religion, and history. On the left and right, you will
          see images of some of my favorite video games. The left image is an image of Ghost of Tsushima and the right image is an image of Legend of Zelda Twilight Princess. You can check out my github and linkedin links down below. My github link will have the
          different projects I've worked on.</p>
        
      </section>
      <section>
      <img src={ParkPic} alt="ParkPic" />
     
      </section>
      
      <ul className="social-media">
        <li><a href="https://www.linkedin.com/in/tanvir-bashar/" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
        <li><a href="https://github.com/tbashar123" target="_blank"><i className="fab fa-github"></i></a></li>
      </ul>
      

        </div>
      
   
  );
}

export default Home;