import {useState} from 'react'

function Question({question}) {
    const [isOpen, setOpen] = useState(false); // State variable to show/hide the answer in the question box
    const [showImage, setShowImage] = useState(false); // State variable to show/hide image in the question box 
    const toggleImage = () => {  // Function to toggle the image in the question box 
        setShowImage(!showImage);
    }
    return (
        <section>
            <div className={isOpen?"open":"closed"}>
                <h4>{question.title}</h4>
                <button onClick={() => {setOpen(!isOpen); toggleImage()}}>{isOpen ? "-" : "+"}</button>
                {showImage && (
          <div>
            <br /> {/* Line break to move the image to a new line */}
            <img src={question.image} alt="" className="question-img" />
          </div>
        )}
            </div>
            {isOpen && <p>{question.info}</p>}
        </section>
      
    
  )
}
export default Question