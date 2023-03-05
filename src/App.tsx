import useGetCharacters from './helpers/useGetCharacters';

function App() {
  const { loading, error, data } = useGetCharacters();

  if (loading) return <h1>Loading...</h1>;

  const {
    characters: { results },
  } = data;

  console.log(results);

  return <div className="App"></div>;
}

export default App;
