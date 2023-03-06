import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import SingleCharacter from './SingleCharacter';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<SingleCharacter />} />
      </Routes>
    </div>
  );
}

export default App;
