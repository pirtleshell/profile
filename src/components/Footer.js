import React from 'react';

const Footer = () => {
  return (
    <footer>
      <code style={{ alignSelf: 'center' }}>
        <a href="/pirtle-gpg.pub">GPG</a>: B4CF 144D 0A78 452D 2AB7 7471 62A1
        7FA6 6B29 07B6
      </code>
      <p>
        This page (over-engineered with Flexbox, React, and Redux) was last
        updated on July 2021. The icons are part of FontAwesome. Please don't
        spam me :) | Robert Pirtle © 2021
      </p>
    </footer>
  );
};

export default Footer;
