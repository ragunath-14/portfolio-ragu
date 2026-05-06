import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: '#000000'
      }}>
        <Navbar />
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
