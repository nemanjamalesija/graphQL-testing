import useGetCharacters from './helpers/useGetCharacters';
import { gql, useQuery } from '@apollo/client';

const GET_HUMANS = gql`
  query {
    characters(filter: { species: "human" }) {
      results {
        name
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_HUMANS);

  if (loading) return <h1>Loading...</h1>;

  const {
    characters: { results },
  } = data;
  console.log(results);

  return <div className="App"></div>;
}

export default App;
