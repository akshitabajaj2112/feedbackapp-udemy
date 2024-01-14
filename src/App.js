import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';

function App (){
   
  return (
      <FeedbackProvider>
        
        <Header />
        <div className='container'>
          
              
          <FeedbackForm  />
          <FeedbackStats  />
          <FeedbackList  />
          <AboutPage/>  
         </div>
     
     </FeedbackProvider>
    );
  };


export default App;