import './App.css';
import Joke from './components/Joke'
import ravel from './images/ravel1.png'


function App() {

  return (
    <div className="App">
      <img src={ravel} width="25%" alt="" />
      <Joke 
      setup="Ravel (y los demás)" 
      punchline="Página tributo al mejor compositor que 
      jamás haya existido">
      </Joke>
      </div>
  );
}

export default App;
