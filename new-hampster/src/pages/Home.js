import React from 'react';
import jtnp_mountain_wm from "../images/jtnp_mountain_wm.png"

export default function Home() {
  return (
    <div>
        <div className="
min-h-screen w-full h-full flex items-center justify-center bg-cover bg-center
         mx-auto
        -z-10 bg-hero-img bg-no-repeat bg-cover bg-origin-border bg-local
        ">
          <div className="bg-indigo-600 bg-opacity-75 p-3 rounded">
          <h1 className= "font-bold text-center text-6xl text-white">Welcome to My Website</h1>
          </div>
         </div>
      <header>
        <div className="head-nav">
          <div className="logo">Your Logo</div>
          
        </div>
        <div className="hero">
          <a href="#" className="cta-button">
            Learn More
          </a>
        </div>
      </header>
      <p>
        This will be colorful! Nunc pharetra finibus est at efficitur. Praesent
        sed congue diam. Integer gravida dui mauris, ut interdum nunc egestas
        sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam
        quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta
        quam semper imperdiet. Praesent euismod mi justo, faucibus scelerisque
        risus cursus in. Sed rhoncus mollis diam, sit amet facilisis lectus
        blandit at.
      </p>
      <aside className="aside">
        <h2>Want a lovely e-card?</h2>
        <form>
          <input type="text" placeholder="E-mail address" />
          <button>Submit</button>
        </form>
      </aside>
    </div>
  );
}
