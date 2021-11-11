import React, { useState, useEffect } from "react"

//useEffect - a hook function that allows us to use Side effects in our components
//f.ex. Network request, Manual Dom manipulation, event listeners, timeouts and intervals

function Counter() {
    // the variables that set the state of the component function
    const [count, setCount] = useState(0)
    //the variable i'm going to use with useEffect
    const [color, setColor] = useState("#14AAF5")

    //A useEffect hook to increase the count after a certain interval - it changes the count state
    useEffect(() => {
         //setInterval is a built in JS function. you call it and set a function, and then a time to specify how often it should be called
        const intervalID = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)

        //returning a cleanup function
        return () => clearInterval(intervalID)
    }, [])

    //A useEffect hook to change the color after a certain interval - it changes the color state
    useEffect(() => {
        //setInterval is a built in JS function. you call it and set a function, and then a time to specify how often it should be called
       const intervalID = setInterval(() => {
           setColor("#EB96EB")
       }, 1000)

       //returning a cleanup function
       return () => clearInterval(intervalID)
   }, [])

        //the inline style refers to the color state, and then the {count} brings in the count from the component State, which then changes using useEffects
        return (
            <div>
                <h1 style={{color: color}}>{count}</h1>
            </div>
        )
}

export default Counter