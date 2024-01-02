import './App.css'
import { ColumnFlex, RowFlex } from './components/Flexes'
import { Menu } from './components/Menu'
import styled from 'styled-components';
import { Title } from './components/Title';
import { DataTable } from './components/DataTable';


const Main = styled.div`
    width: 80vw;
    min-heigth: 80vh;
    // display: block;
`


function App() {

    return (
        <Main>
            {/* <RowFlex weights={[1, 4]}>
                <Menu />
                <ColumnFlex weights={[1, 3]}>
                    <Title text="Sells Dashboard" />
                    <Main style={{backgroundColor: "#b2e1e2"}}>
                        <p>hello</p>
                    </Main>
                </ColumnFlex>
            </RowFlex> */}
            <DataTable />
        </Main>
    )
}

export default App
