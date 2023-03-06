import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SingleCharacter from './SingleCharacter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<SingleCharacter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
