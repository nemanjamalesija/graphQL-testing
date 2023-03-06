import { gql, useQuery } from '@apollo/client';
import useGetHumans from './helpers/useGetHumans';
import { useState } from 'react';
import useGetCharacters from './helpers/useGetCharacters';

function App() {
  const { loading, error, data } = useGetCharacters();

  if (loading) return <h1>Loading...</h1>;
  console.log(data);

  return <div className="App"></div>;
}

export default App;
