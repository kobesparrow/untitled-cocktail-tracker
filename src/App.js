import './base.scss';
import Cocktails from './components/Cocktails/Cocktails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Untitled Cocktail Project</h1>
      </header>
      <section>
        <Cocktails />
      </section>
    </div>
  );
}

export default App;
