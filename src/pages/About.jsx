import React from 'react';
import restaurant from '../assets/restaurant.jpg';
import '../App.css';

function About() {
  return (
    <section
      id="about"
      className="w-full h-screen bg-fixed bg-center bg-no-repeat bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${restaurant})` }}
    >
      <div className="bg-black/60 backdrop-blur-sm border border-orange-500/20 shadow-[0_0_40px_#f97316aa] rounded-3xl px-10 py-12 max-w-3xl text-center animate-fadeIn">
        <h2 className="text-5xl font-bold mb-6 tracking-wider text-orange-400 glow-text">
          🔥 Tandoori Tales 🔥
        </h2>
        <p className="text-lg text-gray-200 tracking-wide leading-relaxed">
          <span className="text-orange-500 font-semibold">Welcome to the essence of flavor</span> —
          where ancient recipes meet a modern twist. Every dish is a canvas, painted with spices, stories, and soul.
          <br />
          <span className="italic text-gray-400">Our journey is your taste adventure. 🍛</span>
          <br />
          Dive into a world where tandoor meets tale — and every bite brings warmth, memories, and magic.
        </p>
      </div>
    </section>
  );
}

export default About;
