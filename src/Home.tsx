import { gql, useQuery } from '@apollo/client';
import useGetHumans from './helpers/useGetHumans';
import { useState } from 'react';
import useGetCharacters from './helpers/useGetCharacters';

type character = {
  id: number;
  image: string;
  name: string;
  species: string;
};

function Home() {
  const { loading, error, data } = useGetCharacters();

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
          <article key={id}>
            <header className="article__header">
              <img src={image} className="article__image" />
            </header>
            <div className="article__text-box">
              <p className="article__char--name">{name}</p>
              <p className="article__char--species">({species})</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Home;
