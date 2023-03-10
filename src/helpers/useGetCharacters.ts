import { useQuery, gql } from '@apollo/client';

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
        species
      }
    }
  }
`;

const useGetCharacters = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  return { loading, error, data };
};

export default useGetCharacters;
