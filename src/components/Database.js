import React from "react";

import Tile from "./Tile";

const Database = ({ match }) => {
    return (
        <div className="Database">
            <h2>Selected {`${match.params.project}`}!</h2>
                <ul>
                    <Tile
                    onClick={()=>console.log("Print To Console.log")}
                    name="Console.log"
                    />
                    <Tile 
                    name="Back To Database"
                    to="/database"
                    />
                    <Tile
                    image="https://cdn.alphazone4.com/icons/b/e/1/5/be15a70d-6225-43a7-b681-91bd7c8eae39.png"
                    name="Custom Image"
                    to=""
                    />
                    <Tile />
                </ul>
        </div>
    )
}

export default Database