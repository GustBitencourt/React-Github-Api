import React, { useState } from 'react';
import useGithub from '../../hooks/github-hooks';
import * as S from './styled';

const Header = () => {
    const { getUser } = useGithub();
    const [ userNameSearch, serUserNameSearch ] = useState()

    const submitGetUser = () => {
        if (!userNameSearch) return;
        return getUser(userNameSearch)
    }

    return (
        <header>
            <S.Wrapper>
                <input type="text" placeholder='Digite o nome para pesquisa' onChange={submitGetUser} />
                <button type="submit"><span>Buscar</span></button>
            </S.Wrapper>

        </header>
    )
}

export default Header;
