import './App.css'
import { RowFlex } from './components/Flexes'
import { Menu } from './components/Menu'



function App() {

    return (
    <>
        <RowFlex weights={[1, 4]}>
            <Menu />
            <div>
                <h2>Sells Dashboard</h2>
            </div>
        </RowFlex>

    </>
    )
}

export default App
