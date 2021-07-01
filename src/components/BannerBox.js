import React from 'react';

const BannerBox = () => {
  console.log(`Hi there! Look at you inspecting! Your reward is the best ASCII art I ever made:
            /\\--/\\
          {((@)(@))}
           \\..< ../
          / UWUW|;;\\
          | WUWU|;;;|
          | UWUWU\\;;|
           \\ UWUWU\\;/
-~-~-~-~-~-(((-~-)))~-~
-~-~_,-~-~-~-~-~-~-~-~-
`);
  console.log(
    "Let's code sometime! Find me on GitHub: https://github.com/pirtleshell/"
  );
  return (
    <div className="banner">
      <img
        className="bannerImage"
        src="/imgs/sweeden-biking-cropped.jpg"
        alt="Robert Pirtle loves adventure."
        title="Biking in Sweden! August 2019"
      />
      <div className="bannerDetails">
        <h1>Robert Pirtle</h1>
        <ul>
          <li className="fa fa-home">
            &nbsp;<span>Portland, Oregon</span>
          </li>
          <li className="fa fa-envelope">
            &nbsp;
            <span>
              <a href="mailto:astropirtle@gmail.com">astropirtle@gmail.com</a>
            </span>
          </li>
          <li className="fa fa-user-astronaut">
            &nbsp;
            <span>
              <a href="/resume.pdf">Resume</a>
            </span>
          </li>
        </ul>
      </div>
      <div className="bannerDesc">
        <p>
          Software Developer excited by problems involving complex,
          interconnected systems in an ethical & interdisciplinary domain.
        </p>
        <p>
          <i>Currently programming, learning, and exploring.</i>
        </p>
      </div>
    </div>
  );
};

export default BannerBox;
