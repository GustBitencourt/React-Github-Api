import React, { createContext, useState } from 'react';

export const GithubContext = createContext({
    user: {

    },
    repositories: [],
    starred: [],
});

/* Onde vai ficar todos os recursos e chamadas de api */
const GithubProvider = ({ children }) => {
    const [githubState, setGithubState] = useState({
        user: {
            login: undefined,
            name: undefined,
            publicUrl: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            followings: 0,
            public_gists: 0,
            public_repos: 0,
        },
        repositories: [],
        starred: [],
    })

    const contextValue = {
        githubState,
    }

    return (
        <GithubProvider.Provider value={contextValue}>
            {children}
        </GithubProvider.Provider>
    )
}

export default GithubProvider;