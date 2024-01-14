import { createContext, useState , useEffect} from "react";


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const[isLoading, setIsLoading] =useState(true)
  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(()=> {
    fetchFeedback()
  } ,[])


  //fetch feedback
  const fetchFeedback = async () => {
    try {
      const response = await fetch(`/feedback`); //?_sort=id&_order=desc
     
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setFeedback(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  


//Add feedback
  const addFeedback = async(newFeedback) => {
  const response = await fetch ('/feedback', {
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(newFeedback)
  })
  const data = await response.json()
    
    setFeedback([data, ...feedback]);
  };
  
  


//delete feedback
  const deleteFeedback = async(id) => {
    if (window.confirm("are you sure to delete?")) {
      await fetch (`/feedback/${id}`,{
        method : 'DELETE'
      })
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const updateFeedback = async(id, updItem) => {
    const response = await fetch (`/feedback/${id}`, {
      method : 'PUT',
      headers : {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(updItem)
    })
    const data = await response.json()

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item,
         ...data } : item))
    );
  };

  //set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        fetchFeedback,
        
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
