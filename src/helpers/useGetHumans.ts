import { useLazyQuery, gql } from '@apollo/client';
import { useState } from 'react';

const GET_SPECIE = gql`
  query getSpecie($specie: String!) {
    characters(filter: { species: $specie }) {
      results {
        name
      }
    }
  }
`;

const useGetHumans = () => {
  const [specie, setSpecie] = useState('');
  const [getSpecie, { loading, error, data }] = useLazyQuery(GET_SPECIE);

  const searchSpecie = (specie: string) => {
    setSpecie(specie);
    getSpecie({ variables: { specie } });
  };

  return { searchSpecie, loading, error, data };
};

export default useGetHumans;
