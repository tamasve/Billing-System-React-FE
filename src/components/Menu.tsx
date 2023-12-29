import { ColumnFlex } from "./Flexes"
import { MenuItem } from "./MenuItem"


const MenuItems: string[] = 
    [
        "Start sell",
        "Order report",
        "Product report",
        "Add product",
        "Company report",
        "Add company",
        "Category report",
        "Add category",
        "Logout"
    ]

export const Menu = () => {

    return (
        <div>
            <h2>Billing System</h2>
            <ColumnFlex>
                {MenuItems.map((item, key) => 
                    <MenuItem text={item} color="#aaaaaa" bgcolor="#333333" key={key} />
                )}
            </ColumnFlex>
        </div>
    )
}