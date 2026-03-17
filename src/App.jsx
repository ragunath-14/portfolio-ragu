import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#000000'
    }}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
