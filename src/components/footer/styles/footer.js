import styled from 'styled-components'

export const Container = styled.div`
    padding: 45px 0;
    background: #333333;
`

export const Wrapper = styled.div`
    max-width: 1305px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));   
    }

`

export const Link = styled.a`
    color: white;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;

    &:hover {
        color: rgb(55, 196, 236);
        transition: 200ms ease-in
    }
`

export const Title = styled.p`
    font-size: 24px;
    color: white;
    margin-bottom: 40px;
    font-weight: bold;
`

