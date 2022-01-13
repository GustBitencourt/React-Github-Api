import React, { createContext, useState, useCallback } from 'react';
import api from '../services/api';

export const GithubContext = createContext({
    loading: false,
    user: {},
    repositories: [],
    starred: [],
});

/* Onde vai ficar todos os recursos e chamadas de api */
const GithubProvider = ({ children }) => {
    /* Default das informações */
    const [githubState, setGithubState] = useState({
        hasUser: false,
        loading: false,
        user: {
            id: undefined,
            avatar: undefined,
            login: undefined,
            name: undefined,
            html_url: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0,
        },
        repositories: [],
        starred: [],
    })

    /* Pega usuario da api */
    const getUser = (username) => {
        setGithubState((prevState) => ({
            ...prevState,
            /* Ao iniciar a requisição altera o loading o inverso de prevState.loading */
            loading: !prevState.loading,
        }))

        api.get(`users/${username}`)
            .then(({ data }) => {
                setGithubState((prevState) => ({
                    ...prevState,
                    hasUser: true,
                    user: {
                        id: data.id,
                        avatar: data.avatar_url,
                        login: data.login,
                        name: data.name,
                        html_url: data.html_url,
                        blog: data.blog,
                        company: data.company,
                        location: data.location,
                        followers: data.followers,
                        following: data.following,
                        public_gists: data.public_gists,
                        public_repos: data.public_repos,
                    },
                }));

                /* Ao finalizar volta pra falso novamente */
            }).finally(() => {
                setGithubState((prevState) => ({
                    ...prevState,
                    loading: !prevState.loading,
                }))
            })

    }

    /* Pega repositorios */
    const getUserRepos = (username) => {
        api.get(`users/${username}/repos`)
            .then(({ data }) => {
                setGithubState((prevState) => ({
                    ...prevState,
                    repositories: data,
                }));
            })
    }

    /* Pega starreds */
    const getUserStarredRepos = (username) => {
        api.get(`users/${username}/starred`)
            .then(({ data }) => {
                setGithubState((prevState) => ({
                    ...prevState,
                    starred: data,
                }));
            })
    }

    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
        getUserRepos: useCallback((username) => getUserRepos(username), []),
        getUserStarredRepos: useCallback((username) => getUserStarredRepos(username), []),
    }

    return (
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubProvider;