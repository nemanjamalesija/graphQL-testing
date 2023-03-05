import { gql, useQuery } from '@apollo/client';
import useGetHumans from './helpers/useGetHumans';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('human');
  const { searchSpecie, loading, error, data } = useGetHumans();
  if (loading) return <h1>Loading...</h1>;

  const handleSearch = () => {
    searchSpecie(search);
    console.log(data);
  };

  return (
    <div className="App">
      <button onClick={handleSearch}>Search humans</button>
    </div>
  );
}

export default App;
