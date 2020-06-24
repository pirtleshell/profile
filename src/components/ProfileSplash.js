import React from 'react';
import PropTypes from 'prop-types';

class ProfileSplashBox extends React.Component {
  render() {
    const { caption, children, className, key, title, icon } = this.props;

    return (
      <div key={key} title={caption} className={'profileBox ' + className}>
        <i className={'fa fa-3x fa-' + icon} />
        <h3>{title}</h3>
        {children}
      </div>
    );
  }
}
ProfileSplashBox.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

const ProfileSplash = () => {
  const splashInfo = [
    {
      title: 'Programming',
      caption: 'Code! Code! Code!',
      text: (
        <p>
          I love to code all kinds of things. I just finished working on a
          contract building a webapp for a Fortune 25 company. Before that, I
          made Project Management software for hospitals. My personal projects
          usually explore the latest science&nbsp;/&nbsp;computer tech that I'm
          into, or are websites built for my friends and me.
        </p>
      ),
      icon: 'code',
      children: [
        <ul>
          <li className="fab fa-github">
            &nbsp;<a href="https://github.com/pirtleshell">@pirtleshell</a> on
            GitHub
          </li>
          <li className="fab fa-stack-overflow">
            &nbsp;
            <a href="https://stackoverflow.com/users/5852777/pirt">pirt</a> on
            StackOverflow
          </li>
          <li className="fab fa-linkedin">
            &nbsp;Connect with me on{' '}
            <a href="https://www.linkedin.com/in/robert-pirtle-b634a2132/">
              LinkedIn
            </a>
            !
          </li>
        </ul>,
      ],
    },
    {
      title: 'Learning',
      caption: 'Learn! Learn! Learn!',
      text:
        "Learning is fun! I get absorbed in what I'm learning about; be it music, or physics, or history, or anything. The best feeling is to learn something new and connect it, by direct process or metaphor, to another thing you know. Gotta have those fun facts! ",
      icon: 'book-reader',
      children: [
        <ul>
          <li className="fa fa-tree">
            &nbsp;
            <span>
              I've recently been absorbed in mycology, the study of fungi. Did
              you know they're more related to humans than plants?
            </span>
          </li>
          <li className="fa fa-music">
            &nbsp;
            <span className="resetFont">
              I sing with my <i>a&nbsp;cappella</i> group,{' '}
              <a href="https://bsidebookclub.com">B-Side Book&nbsp;Club</a>.
            </span>
          </li>
          <li className="fa fa-shapes">
            &nbsp;
            <span>
              Recently coded: <a href="/graphics-demo/">3D drawing graphics</a>
              <br />
              <small>(linear algebra! woo!)</small>
            </span>
          </li>
        </ul>,
      ],
    },
    {
      title: 'Exploring',
      caption: 'Never stop exploring.',
      text:
        'There is so much to explore and I proceed with wonderment. I long for meeting new people and experiencing new ways to view the world. Travelling is a great way to expand your view, and reading is too! I never stop exploring.',
      icon: 'globe-americas',
      children: [
        <ul>
          <li className="fa fa-map-signs">
            &nbsp;<span>Ask me about my recent trip to the Caucuses!</span>
          </li>
          <li className="fa fa-anchor">
            &nbsp;
            <span>
              My job out of college was as a sailor on a 90-year-old wooden
              schooner.
            </span>
          </li>
          <li className="fa fa-rocket">
            &nbsp;
            <span>
              <a href="https://laniakean.com/">Explore the galaxies</a> in a
              project I made in 2016.
            </span>
          </li>
        </ul>,
      ],
    },
  ];

  return (
    <div className="row profileSplash">
      {splashInfo.map((box, i) => {
        return (
          <ProfileSplashBox
            title={box.title}
            icon={box.icon}
            caption={box.caption}
            className={i % 2 ? 'shaded' : ''}
          >
            <p>{box.text}</p>
            {box.children}
          </ProfileSplashBox>
        );
      })}
    </div>
  );
};

export default ProfileSplash;
