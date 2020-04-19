import React, { useContext } from 'react';
import { AppContext } from '../state'

const Nav = () => {
  const { isMenuOpen, toggleMenu } = useContext(AppContext);

  if (!isMenuOpen) return null;

  return (
    <nav
      style={{
        background: 'var(--black)',
        color: 'white',
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        left: 0,
        right: 0,
      }}
    >
      <h1>Menu</h1>
      <button onClick={toggleMenu}>Close~</button>
    </nav>
  );
};

export default Nav;
