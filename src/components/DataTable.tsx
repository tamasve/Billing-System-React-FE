import { ReactNode, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';


const Header = styled.div`
    text-align: left;
    line-height: 2.5em;
    padding-left: 1em;
    color: whitesmoke;
    background-color: black;
    display: grid;
    grid-template-columns: 1fr 3fr 3fr 1fr 1fr;
    gap: 0.3rem;
`

const DataRow = styled.div<{$odd: boolean}>`
    text-align: left;
    line-height: 2em;
    padding-left: 1em;
    color: black;
    background-color: ${props => props.$odd ? 'whitesmoke' : '#dddddd'};
    display: grid;
    grid-template-columns: 1fr 3fr 3fr 1fr 1fr;
    gap: 0.3rem;
`

export const DataTable = () => {

    const [data, setData] = useState<object[]>([]);

    useEffect( () => {
        
        (async () => {
            const response = await axios.get("http://localhost:8080/products");
            setData(response.data);
        })();

    }, [] );


    return (
        <>
        { data.length !== 0 ? 
        <>
            <Header>
                {Object.keys(data[0]).map((key) => <div key={key}> {key} </div>)}
            </Header>

            {data.map((obj, key) =>
            <DataRow $odd={key % 2 === 0} key={key}>
                {Object.entries(obj).map(([key, value]) => <div key={key}> {value} </div>)}
            </DataRow>
            )
            }
        </>
        :
        <div>data loading...</div>
        }
        </>
    )
}