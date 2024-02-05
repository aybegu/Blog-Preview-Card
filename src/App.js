import logo from './logo.svg';
import './App.css';
import React from 'react';

export default function App() {
  return (
    <div className="app">
         <main className="main">
                <img src="blog-preview-card-main/src/illustration-article.svg"/>
                <div className="main--block">
                    <h4>Learning</h4>
                </div>
                <p className="main--date">Published 21 Dec 2023</p>
                <h1 className="main--title">HTML & CSS foundations</h1>
                <p className="main--text">These languages are the backbone of every website, defining structure, content, and presentation.</p>
                <div className="main--profile">
                    <img src="../blog-preview-card-main/src/image-avatar.webp" />
                    <h4>Greg Hooper</h4>
                </div>
            </main>
            <footer className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="https://github.com/aybegu">Ayca Berfin Gurler</a>.
            </footer>
    </div>
  );
}


