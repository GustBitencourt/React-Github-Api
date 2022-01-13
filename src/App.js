import React from 'react';
import Layout from './components/Layout';
import NoSearch from './components/NoSearch';
import Profile from './components/Profile';
import Repositories from './components/Repositories';
import useGithub from './hooks/github-hooks';

const App = () => {
  const { githubState } = useGithub();
  return (     
    <Layout>
      {/* Primeiro carregamento para aparecer pagina vazia */}
      {githubState.hasUser ? 
      (<>
      {/* Loading para requisição de novo usuario */}
      {githubState.loading ? (
        <h5>Loading</h5>
      ) : (
        <>
        <Profile />
        <Repositories />            
        </>
      )}
      </>) : (
      <NoSearch />)
      }
      


    </Layout>
  );
}

export default App;
