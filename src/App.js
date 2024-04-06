import './App.css';
import Question from './Question';

const questions = [ // Array of objects
  {
    id: 1,
    title: 'What is Your Name?',
    info: 'Your name is Hrishikesh Bade',
    image: 'https://images.pexels.com/photos/3839694/pexels-photo-3839694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

  },
  {
    id: 2,
    title: 'When is your birthday?',
    info: 'Your birthday is on 20 July 2002 ',
    image: 'https://images.pexels.com/photos/20723439/pexels-photo-20723439/free-photo-of-a-group-of-rams-laying-in-the-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'What is your Dream?',
    info: 'Your dream is to be a successful software engineer',
    image:'https://images.pexels.com/photos/5221588/pexels-photo-5221588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
]

function App() { // App component is the parent component of Question component
  return (
    <div className="App">
      <h1>Project 2: FAQ/Accordion</h1> 
      <div className="container"> 
        <h2>React Questions and Answers</h2> 
        <div className="questions"> 
          {questions.map((question) => (
            <Question key={question.id} question={question} image={question.image}></Question> // Passing the question object to the Question component
          )) }
        </div>
      </div>
    </div>
  );
}

export default App;
