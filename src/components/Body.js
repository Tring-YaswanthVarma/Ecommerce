import React, { useContext} from "react";
import '../styles/Body.css'
import Item from "./Item";
import items from './Data.js'
import Sidebar from "./Sidebar";
import { ArrayLengthContext } from "../App";

let bodyItems = items
function Body()
{
    const arrayLength = useContext(ArrayLengthContext)
    console.log("bodyItems")
    console.log(bodyItems)

    return <div className="body">
        <div className="side-bar">
            <Sidebar />
        </div>
        <div className="content">
            <div className="container">
                {arrayLength.bodyItems.map((item) => <Item key={item.id} item={item} />)}
            </div>
        </div>
    </div>
}

export default Body