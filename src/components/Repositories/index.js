import React from 'react';
import * as S from './styled';
import ItemRepository from '../ItemRepository';

const Repositories = () => {
    

    return (
        <S.WrapperTabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected"
        >
            <S.WrapperTabList>

                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>

            </S.WrapperTabList>
            <S.WrapperTabPanel>
                <ItemRepository
                    name="repo1"
                    linkToRepo="https://github.com/GustBitencourt"
                    fullName="GustBitencourt/Blabla"
                />
            </S.WrapperTabPanel>

            <S.WrapperTabPanel>
                <ItemRepository
                    name="repo2"
                    linkToRepo="https://github.com/GustBitencourt"
                    fullName="GustBitencourt/Blabla"
                />
            </S.WrapperTabPanel>
        </S.WrapperTabs>

    );
}

export default Repositories;