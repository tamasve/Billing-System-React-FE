import './App.css'
import { ColumnFlex, RowFlex } from './components/Flexes'
import { Menu } from './components/Menu'
import styled from 'styled-components';
import { Title } from './components/Title';


const Main = styled.div`
    width: 80vw;
    min-heigth: 80vh;
    display: block;
`


function App() {

    return (
        <Main>
            <RowFlex weights={[1, 4]}>
                <Menu />
                <ColumnFlex weights={[1, 3]}>
                    <Title text="Sells Dashboard" />
                    <Main style={{backgroundColor: "#b2e1e2"}}>
                        <p>hello</p>
                    </Main>
                </ColumnFlex>
            </RowFlex>
        </Main>
    )
}

export default App
