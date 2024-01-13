import FeedbackItem from './FeedbackItem'
import { useContext } from 'react';
// import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {

  const {feedback} = useContext(FeedbackContext)

    // console.log(feedback);
  if(!feedback || feedback.length === 0){
    return <p>No feedback yet</p>
  }


  return (
    <div className='feedback-list'>
    {feedback.map((item) => (
       <FeedbackItem 
       key={item.id} 
       item={item} 
       />
    ))}
    </div>
  )
}

// FeedbackList.propTypes ={
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id : PropTypes.number.isRequired,
//             text : PropTypes.string.isRequired,
//             rating : PropTypes.number.isRequired
//             })
//     )
// }

export default FeedbackList