import useGetCharacters from './helpers/useGetCharacters';

type character = {
  id: number;
  image: string;
  name: string;
  species: string;
};

function Home() {
  const { loading, data } = useGetCharacters();

  if (loading) return <h1>Loading...</h1>;

  const {
    characters: { results },
  } = data ?? {};

  console.log(results);

  return (
    <div className="home__container">
      {results.map((item: character) => {
        const { id, name, image, species } = item;
        return (
          <article key={id} className="article__home">
            <header className="article__home--header">
              <img src={image} className="article__home--image" />
            </header>
            <div className="article__home--text-box">
              <p className="article__home--char-name">{name}</p>
              <p className="article__home--char-species">({species})</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Home;
