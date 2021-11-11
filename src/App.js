import React from "react"
//import MainContent from "./components/MainContent"
import TodoItem from "./components/TodoItem"
// import ContactCard from "./components/ContactCard"
// import Joke from "./components/Joke"
// import jokesData from "./jokesData"
// import productsData from "./vschoolProducts"
// import Product from "./components/Product"
import todosData from "./todosData"
// import { render } from "@testing-library/react"
import Header from "./components/Header"
import MemeGenerator from "./components/MemeGenerator"
import Counter from "./components/Counter"


//============ MEME GENERATOR CODE HERE ============//
//this is a function component because it's just importing the other component files
function App() {
    return(
      <div>
          <Header />
          <MemeGenerator />
          <Counter />
      </div>
    )
}
//============ MEME GENERATOR CODE HERE ============//

//============ CHECK LIST CODE HERE ============//
//============ CHECK LIST CODE HERE ============//

//============ API FETCH CODE HERE ============//
//============ API FETCH CODE HERE ============//

//============ FORMS CODE HERE ============//
//============ FORMS CODE HERE ============//

export default App



