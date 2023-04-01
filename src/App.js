import './App.css';
import Video from './pages/Video';

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
        <Video 
          likes={300}
          messages={67}
          shares={192}
        />

      </div>
    </div>
  );
}

export default App;
