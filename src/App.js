import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import { ItemsProvider } from './components/items';

function App() {
  return (
    <ItemsProvider>
        <div className="App">
          <header className="App-header">
            <Home />
          </header>
        </div>
    </ItemsProvider>
  );
}

export default App;
