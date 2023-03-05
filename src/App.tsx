import { useQuery, gql } from '@apollo/client';

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        name
        species
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <h1>Loading...</h1>;

  const {
    characters: { results },
  } = data;

  console.log(results);

  return <div className="App"></div>;
}

export default App;
