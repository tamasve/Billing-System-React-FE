import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div<{$direction: string}>`
    display: flex;
    flex-direction: ${props => props.$direction};
    margin: 0;
    padding: 0;
    width: 100%;
`

const Pane = styled.div<{$weight: number}>`
    flex: ${props => props.$weight};
    margin: 0;
    padding: 0;
    display: block;
    width: auto;
`

export const Flex = ({
    children,
    weights,
    direction,
    ...props
}: {
    children: ReactNode[],
    weights?: number[],
    direction: string,
    props?: object
}) => {

    
    return (
        <Container $direction={direction} {...props}>
            {children.map((comp, key) => 
            (
                <Pane key={key} $weight={weights ? weights[key] : 1}>
                    {comp}
                </Pane>
            ))}
        </Container>
    )
}

export const ColumnFlex = ({
    children,
    weights,
    ...props
}: {
    children: ReactNode[],
    weights?: number[],
    props?: object
}) => {

    
    return (
        <Container $direction="column" {...props}>
            {children.map((comp, key) => 
            (
                <Pane key={key} $weight={weights ? weights[key] : 1}>
                    {comp}
                </Pane>
            ))}
        </Container>
    )
}


export const RowFlex = ({
    children,
    weights,
    ...props
}: {
    children: ReactNode[],
    weights?: number[],
    props?: object
}) => {

    
    return (
        <Container $direction="row" {...props}>
            {children.map((comp, key) => 
            (
                <Pane key={key} $weight={weights ? weights[key] : 1}>
                    {comp}
                </Pane>
            ))}
        </Container>
    )
}


// To avoid code repetition I've tried 2 version, none of them worked well well due to additional div items put in by s.c....:


// Using HOC:

// export const withFlex = (Component: ({children, props}: {children: ReactNode[], props: object}) => ReactNode, direction: string) => {
//     return ({children, props}: {children: ReactNode[], props: object}) => {
    
//         return <Component {...props} direction={direction}> {children} </Component>
//     }
// }

// export const RowFlex = withFlex(Flex, "row");


// Parametric versions:

// export const ColumnFlex = ({
//     children,
//     weights,
//     ...props
// }: {
//     children: ReactNode[],
//     weights?: number[],
//     props?: object
// }) => {
//     return (
//         <Flex weights={weights} direction='column' {...props}> {children} </Flex>
//     )
// }

// export const RowFlex = ({
//     children,
//     weights,
//     ...props
// }: {
//     children: ReactNode[],
//     weights?: number[],
//     props?: object
// }) => {
//     return (
//         <Flex weights={weights} direction='row' {...props}> {children} </Flex>
//     )
// }