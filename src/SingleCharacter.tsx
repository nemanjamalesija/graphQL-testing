import React from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

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
  if (!id) return;

  const { error, loading, data } = useQuery(GET_SPECIFIC_CHARACTER, {
    variables: { id },
  });

  if (loading) return <h1>Loading...</h1>;

  const {
    character: { name, image, episode },
  } = data ?? {};

  return <div>{id}</div>;
};

export default SingleCharacter;
