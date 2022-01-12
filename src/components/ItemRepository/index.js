import React from 'react';
import * as S from './styled';

const ItemRepository = ({ name, linkToRepo, fullName }) => {
    return (
        <div>
            <h2>{name}</h2>
            <h4>Full Name: </h4>
            <a href={linkToRepo}
                target="_blank"
                rel="noreferrer">
                    {fullName}
            </a>
        </div>

    )
}

export default ItemRepository;