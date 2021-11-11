import React from "react";

//to put javascript into JSX, wrap it in curly braces, or do backtics `${variable}`
function MainContent () {
    //to get the date
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    const styles = {
        color: "#FF8C00", 
        backgroundColor: "#FF2D00",
        fontSize: "100px"

    }

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "#04756F"
        this.fontSize ="100px"
    } else if (hours >= 12 <17) {
        timeOfDay = "afternoon" 
        styles.fontSize ="80px"        
    } else { 
        timeOfDay = "evening"
        styles.fontSize ="10px"
        
    }

    //to style the JSX, put double {{}} around CSS style. but if there is a dash, use camelCase
    //OR, put the styles inside a variable, and the variable in {}, like this:
    // const styles = {
    //     color: "#FF8C00", 
    //     backgroundColor: "#FF2D00",
    //     fontSize: "100px"
    // }
    return (
        <div>
              <h1 style={styles}>Good {timeOfDay}!</h1>
              <p>It is currently about {date.getHours() % 12} o' clock!</p>
        </div>
    )
}



export default MainContent