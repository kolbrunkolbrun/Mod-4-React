import React from "react";

function Joke (Props) {
    return(
        <div className="joke">
            <h1>{Props.question}</h1>
            <h2>{Props.punchline}</h2>
        </div>
    )
}

export default Joke