import { useQuery, gql } from '@apollo/client';

const GET_HUMANS = gql`
  query {
    characters(filter: { species: "human" }) {
      results {
        name
      }
    }
  }
`;

const useGetHumans = () => {
  const { loading, error, data } = useQuery(GET_HUMANS);

  return { loading, error, data };
};

export default useGetHumans;
