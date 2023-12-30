import styled from 'styled-components';

const TitleBlock = styled.div`
    background-color: white;
    border-top: 1px solid green;
    border-bottom: 2px solid green;
    margin: 0;
    padding-left: 2em;
`

export const Title = ({text}: {text: string}) => {

    return (
        <TitleBlock>
            <h2>{text}</h2>
        </TitleBlock>
    )
}
