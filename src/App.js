import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import FrequentlyAskedQuestions from './Components/FrequentlyAskedQuestions/FrequentlyAskedQuestions';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
    </div>
  );
}

export default App;
