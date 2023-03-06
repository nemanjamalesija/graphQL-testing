import React from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

type episode = {
  id: string;
  episode: string;
  name: string;
};

const GET_SPECIFIC_CHARACTER = gql`
  query getSpecificCharacter($id: ID!) {
    character(id: $id) {
      name
      image
      episode {
        id
        episode
        name
      }
    }
  }
`;

const SingleCharacter = () => {
  const { id } = useParams();

  const { error, loading, data } = useQuery(GET_SPECIFIC_CHARACTER, {
    variables: { id },
  });

  if (loading) return <h1>Loading...</h1>;

  const {
    character: { name, image, episode },
  } = data ?? {};

  return (
    <article className="article__single">
      <header className="article__single--image-header">
        <img className="article__single--image" src={image} alt={name} />
        <h3 className="article__single--name">{name}</h3>
      </header>

      <div className="article__single--featured-in-container">
        {episode.map((ep: episode) => {
          const { id, episode, name } = ep;

          return (
            <article key={id} className="article__episode">
              <p className="article__episode--name">{name}</p>
              <p className="article__episode--number">({episode})</p>
            </article>
          );
        })}
      </div>
    </article>
  );
};

export default SingleCharacter;
