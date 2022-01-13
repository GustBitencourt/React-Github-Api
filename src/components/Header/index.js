import React, { useState } from 'react';
import useGithub from '../../hooks/github-hooks';
import * as S from './styled';

const Header = () => {
    const { getUser } = useGithub();
    const [ userNameSearch, setUserNameSearch ] = useState();

    const submitGetUser = () => {
        if (!userNameSearch) return;
        return getUser(userNameSearch)
    }

    return (
        <header>
            <S.Wrapper>
                <input type="text" 
                    placeholder='Digite o nome para pesquisa' 
                    onChange={(event) => setUserNameSearch(event.target.value)} 
                />
                <button type="submit" onClick={submitGetUser}>
                    <span>Buscar</span>
                </button>
            </S.Wrapper>

        </header>
    )
}

export default Header;
