import RandomQuote from './components/RandomQuote';
import AuthorQuotes from './components/AuthorQuotes';

import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Quote Query </h1>
      <RandomQuote />
      <AuthorQuotes />
    </div>
  );
}

export default App;
