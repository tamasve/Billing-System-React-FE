import { ReactNode } from 'react';
import styled from 'styled-components';

const Paragraph = styled.p<{$color: string, $bgcolor: string}>`
    color: ${props => props.$color};
    background-color: ${props => props.$bgcolor};
    margin: 0;
    padding: 1em;
`

export const MenuItem = ({
    text,
    color,
    bgcolor
}: {
    text: string,
    color: string,
    bgcolor: string
}) => {

    return (
        <Paragraph $color={color} $bgcolor={bgcolor}>
            {text}
        </Paragraph>
    )
}