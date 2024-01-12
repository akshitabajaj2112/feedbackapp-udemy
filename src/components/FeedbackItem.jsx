import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import Card from './shared/Card'
import PropTypes from 'prop-types'

function FeedbackItem({ item }) {

  return (
   
      <Card >
      <div className="num-display">{item.rating}</div>
      <button onClick={() => console.log(123)} className="close">
        <FaTimes color ='purple' />
      </button>
      <div className="text-display">{item.text}</div>
     </Card>
    
  )
}

FeedbackItem.propTypes ={
  item: PropTypes.object.isRequired,
}

export default FeedbackItem