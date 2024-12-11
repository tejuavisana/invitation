import React from 'react';
import './commoncss/bootstrap.css';
import './commoncss/font-icon.css';
import './App.css';
import Header from './components/Header';
import WeddingDate from './components/WeddingDate';
import CountDown from './components/CountDown';
import Video from './components/video';
import Invitation from './components/Invitation';

{/*import WeddingDetails from './components/WeddingDetails2';
import Weddinglocation from './components/Weddinglocation'
import Contact from './components/Contact';
import CommentSection from './components/CommentSection';*/}
function App() {
  return (
    <div className="App">
      <Invitation />
      <Video />
      <Header />
     <WeddingDate />
     <CountDown />
     
   {/* <Weddinglocation />
     <WeddingDetails />
     <Contact />
      <CommentSection />*/}
    </div>
    
  );
};

export default App;