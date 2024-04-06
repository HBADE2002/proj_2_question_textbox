import './App.css';
import Question from './Question';

const questions = [ // Array of objects
  {
    id: 1,
    title: 'What is Your Name?',
    info: 'Your name is Hrishikesh Bade'

  },
  {
    id: 2,
    title: 'When is your birthday?',
    info: 'Your birthday is on 20 July 2002 '
  },
  {
    id: 3,
    title: 'What is your Dream?',
    info: 'Your dream is to be a successful software engineer'
  }
]

function App() {
  return (
    <div className="App">
      <h1>Project 2: FAQ/Accordion</h1> 
      <div className="container"> 
        <h2>React Questions and Answers</h2> 
        <div className="questions"> 
          {questions.map((question) => (
            <Question key={question.id} question={question}></Question> // Passing the question object to the Question component
          )) }
        </div>
      </div>
    </div>
  );
}

export default App;
