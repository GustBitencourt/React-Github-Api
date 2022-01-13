import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;

    input {
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        width: 100%;
        height: 2.75rem;
        padding: 0.25rem;
        font-weight: 500;
    }

    button {
        background-color: #225ED8;
        padding: 0.5rem 1rem;
        margin: 0 1rem;
        border-radius: 0.5rem;
        font-size: 1rem;
        
        &:hover {
            box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
            background-color: #2C5282;            
        }
        
        span {
            font-weight: bold;
            color: #fff;
        }
    }

`;