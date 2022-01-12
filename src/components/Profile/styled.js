import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;

    div {
        margin: 0.5rem;
        text-align: center;
    }
`;

export const WrapperUsername = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
    
    h3 {
        margin-right: 0.5rem;
    }

    a {
        color: blue;
        font-size: 1.125rem;
        font-height: bold;
    }
`;

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: 0.5rem;
    height: 12.5rem;

    h1 {
        font-size: 2rem;
        font-weight: bold;
    }

    h3 {
        font-size: 1.125rem;
        font-weight: bold;
    }

    h4 {
        font-size: 1rem;
        font-weight: bold;
    }
`;

export const WrapperImage = styled.img`
    border-radius: 50%;
    width: 12.5rem;
    margin: 0.5rem;
`;