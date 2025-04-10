import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className="app">
      <div className="profile-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Rahul_Gandhi.png/330px-Rahul_Gandhi.png"
          alt="Profile"
          className="profile-image"
        />

        <h2>Name: Rahul Raj</h2>
        <p>
          A passionate web developer who enjoys creating responsive websites.
        </p>
        <p>Skilled in React, Node.js, and MongoDB.</p>
        <div className="social-links">
          <a href="https://www.instagram.com/">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="https://www.facebook.com/">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/">
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App
