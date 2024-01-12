import React from 'react';
import {v4 as uuidv4} from 'uuid'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useState} from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/feedbackData'
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';

function App (){
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) =>{
        if(window.confirm('are you sure to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback =( newFeedback) =>{
        newFeedback.id =uuidv4()
        setFeedback([newFeedback,...feedback])
    }


    return (
        <>
        <Header />
        <div className='container'>
          
              
          <FeedbackForm  handleAdd={addFeedback}/>
          <FeedbackStats feedback={feedback} />
          <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
          <AboutPage/>  
         </div>
     </>
    );
  };


export default App;