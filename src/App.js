import React from 'react';
import Layout from './components/Layout';

function App() {
  return (
    <main>
      <Layout>
        <div>
          <img src="https://avatars.githubusercontent.com/u/79281317?v=4" alt="User Avatar" title="User Avatar" />
          <h1>Gustavo Bitencourt</h1>
          <h3>Username: </h3>
          <span>GustBitencourt</span>
        </div>
        <div>
          <h4>Followers</h4>
          <span>0</span>
        </div>
        <div>
          <h4>Starreds</h4>
          <span>0</span>
        </div>
        <div>
          <h4>Followings</h4>
          <span>0</span>
        </div>
      </Layout>          
    </main>
  );
}

export default App;
