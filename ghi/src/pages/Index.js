import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Main page "}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">home page ***</Link></h2>
        </div>
      </header>
    </article>
  </Main>
);

export default Index;

// 
// <p>
// Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
// or you can check out my {' '}
// <Link to="/resume">resume</Link>, {' '}
// <Link to="/projects">projects</Link>, {' '}
// or <Link to="/contact">contact</Link> me.
// </p>
// 