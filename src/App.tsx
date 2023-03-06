import { gql, useQuery } from '@apollo/client';
import useGetHumans from './helpers/useGetHumans';
import { useState } from 'react';

function App() {
  const [searchSpecieValue, setSearchSpecieValue] = useState('');
  const { searchSpecie, loading, error, data } = useGetHumans();
  if (loading) return <h1>Loading...</h1>;

  const handleSearch = () => {
    searchSpecie(searchSpecieValue);
  };

  if (loading) return <h1>Loading...</h1>;

  console.log(data?.characters?.results);

  return (
    <div className="App">
      <input
        type="text"
        value={searchSpecieValue}
        onChange={(e) => setSearchSpecieValue(e.target.value)}
      />
      <button onClick={handleSearch}>Search species</button>
    </div>
  );
}

export default App;
