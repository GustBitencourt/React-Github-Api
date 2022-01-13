import React, { useEffect, useState } from 'react';
import useGithub from '../../hooks/github-hooks';
import ItemRepository from '../ItemRepository';
import * as S from './styled';

const Repositories = () => {
    const { githubState, getUserRepos, getUserStarredRepos } = useGithub();
    const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false);

    useEffect(() => {
        if(githubState.user.login) {
            getUserRepos(githubState.user.login);
            getUserStarredRepos(githubState.user.login);
        }
        setHasUserForSearchRepos(githubState.repositories);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [githubState.user.login])


    return (
        <>
        {hasUserForSearchRepos ? (
        <S.WrapperTabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected"
        >
            <S.WrapperTabList>

                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>

            </S.WrapperTabList>

            <S.WrapperTabPanel>
                {githubState.repositories.map((item) => (
                    <ItemRepository
                        key={item.id}
                        name={item.name}
                        linkToRepo={item.full_name}
                        fullName={item.full_name}
                    />
                ))}                
            </S.WrapperTabPanel>

            <S.WrapperTabPanel>
                {githubState.starred.map((item) => (
                    <ItemRepository
                        key={item.id}
                        name={item.name}
                        linkToRepo={item.full_name}
                        fullName={item.full_name}
                    />
                ))}                
            </S.WrapperTabPanel>
        </S.WrapperTabs>) : 

        /* Se hasUserForSearchRepos for falso mostra fragmento vazio */
        ( <></>)
        }
        </>


    );
}

export default Repositories;