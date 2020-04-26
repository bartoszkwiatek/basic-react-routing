import React from 'react';

const Footer = () => {
    const styles = {
        marginTop: '2rem',
        backgroundColor: '#56876d',
        padding: '0rem 1rem'
    }
    return (
      <footer className="footer" style={styles}>
          <p>It's a footer</p>
      </footer>
    );
  }
  
  export { Footer }