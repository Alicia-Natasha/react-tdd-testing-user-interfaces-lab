import React from 'react';

function AboutMe() {
    return (
      <div>
        <img
          src="https://i.pinimg.com/736x/69/44/6b/69446bd3a50c1d1a52f9d876e6e5a117.jpg"
          alt="A photo of Alicia Natasha smiling at a park"
        />
        <h2>About Me</h2>
        <p>
          Hi, my name is Alicia Natasha
        </p>
        <ul>
          <li>
            <a href="https://github.com/Alicia-Natasha" target="_blank_" rel="noonpener nonreferrer" >Github</a>
          </li>
          <li>
            <a href="https://api.linkedin.com/feed/?_l=en_US" target="_blank" rel="noopenor nonreferrer">LinkedIn</a>
          </li>
        </ul>
      </div>
    );
  }
  
  export default AboutMe;
  