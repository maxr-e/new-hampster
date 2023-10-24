import React from 'react';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <ul>
        <li><a href="https://jogomez.github.io/MovieDetails/">Movie Geek</a>, a webpage where you can learn more about your favorite movies.</li>
          <p> <img src="./assets/moviegeek.png" alt="Screenshots of Movie Geek"></img></p>
        <li><a href="https://polar-temple-53244.herokuapp.com/">Rate My Cow, Giraffe or Shrimp</a>, a blog dedicated to sharing pictures of and commenting on cute animals.</li>
          <p> <img src="./assets/rate-my-cow-giraffe-shrimp.png" alt="Screenshot of Rate My Cow, Giraffe or Shrimp"></img></p>
        <li><a href="https://ancient-ravine-85592.herokuapp.com/">Star Gazers</a>, a group project that utilizes the full MERN stack to deliver an app that lets users explore the night sky via stars, constellations, moon phase calendars and other celestial events.</li>
          <p> <img src="./assets/main_screen.png" alt="Screenshot the main page of Star Gazers"></img></p>
          <p> <img src="./assets/moon-phase-oakland-screen.png" alt="Screenshot moon phase page of Star Gazers"></img></p>
      </ul>
      <p>
        This will be colorful!
        
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
      <aside class="aside">
      <h2>Want a lovely e-card?</h2>
      <form>
        <input type="text" placeholder="E-mail address" />
        <button>Submit</button>
      </form>
    </aside>
    </div>
  );
}
