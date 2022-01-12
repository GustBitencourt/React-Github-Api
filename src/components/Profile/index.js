import React from 'react';
import * as S from './styled';

const Profile = () => {
    return (
        <>
            <S.Wrapper>
                <S.WrapperImage 
                    src="https://avatars.githubusercontent.com/u/79281317?v=4" 
                    alt="User Avatar" 
                    title="User Avatar" />
                <S.WrapperInfoUser>
                    <div>
                        <h1>Gustavo Bitencourt</h1>
                        <S.WrapperUsername>
                            <h3>Username: </h3>
                            <a href="https://github.com/GustBitencourt" 
                                target="_blank" 
                                rel="noreferrer">Gustavo Bitencourt</a>
                        </S.WrapperUsername>
                    </div>
                    <S.WrapperStatusCount>
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
                    </S.WrapperStatusCount>
                </S.WrapperInfoUser>
            </S.Wrapper>
        </>

    );
}

export default Profile;