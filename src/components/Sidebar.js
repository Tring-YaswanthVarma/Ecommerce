import React, { useContext } from "react";
import '../styles/Sidebar.css'
import items from "./Data";
import { ArrayLengthContext } from "../App";

function Sidebar(){

    const arrayLength = useContext(ArrayLengthContext)

    let filterItems = (companyName) => {
        if (companyName === ""){
            arrayLength.setBodyItems(items)
        }else{
            let newItems = items.filter( function(item) {
                console.log(item.company)
                console.log(companyName)
                return item.company === companyName
            })
            console.log("new items")
            console.log(newItems)
            arrayLength.setBodyItems(newItems)
        }

    }
    return (
        <div className="filters">
            <button onClick={() => filterItems("")}>All</button>
            <button onClick={() => filterItems("Lenovo")}>Lenovo</button>
            <button onClick={() => filterItems("HP")}>HP</button>
            <button onClick={() => filterItems("Asus")}>Asus</button>
        </div>
    )
}

export default Sidebar