import React from 'react'
import ReactDOM from 'react-dom'
import data from "./data"
import Nav from "./components/Nav"
import "./index.css"
import Card from "./components/cards"

const cards = data.map(value => {
    return(
        <Card {... value}/>
    )
})

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <div className="root-root">
        <Nav />
        <div className="Div-Principal">
            {cards}
        </div>
    </div>
)