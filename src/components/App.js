
import React from 'react';

import BannerBox from './BannerBox';
import CounterContainer from '../containers/CounterContainer';
import Footer from './Footer';
import ProfileSplash from './ProfileSplash';

const App = () => (
  <div className='container'>
    <BannerBox />
    <hr />
    <ProfileSplash />
    <hr />
    <p>Below is a gadget to help you count. It does nothing else.</p>
    <CounterContainer />
    <Footer />
  </div>
);

export default App;
