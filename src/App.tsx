import useGetCharacters from './helpers/useGetCharacters';
import { gql, useQuery } from '@apollo/client';
import useGetHumans from './helpers/useGetHumans';

function App() {
  const { loading, error, data } = useGetHumans();
  if (loading) return <h1>Loading...</h1>;

  const {
    characters: { results },
  } = data;
  console.log(results);

  return <div className="App"></div>;
}

export default App;
