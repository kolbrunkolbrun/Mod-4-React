
//==============COMPONENTS + PROPS + STATES==============//
//Components are functions
//Props modify the way the component acts

//TO CHANGE STATE - USE setState method
class App extends React.Component {
    constructor() {
      super()
      this.state = {
        count: 0
      }
      this.handleClick = this.handleClick.bind(this)
  }
  
//   another method, handleClick sem kemur frá React Components, og setState sem breytir state-inu
//   if you use setState with a method, you have to bind it. You do that inside the constructor
  handleClick() {
    this.setState(prevState => {
      return {
        //this gets the previous state through prevState, and adds 1
        count: prevState.count + 1
      }
    })
  }
  
  //to render the component
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
      </div>
    )
    }
  }
//==============COMPONENTS + PROPS + STATES==============//












//==============COMPONENT FUNCTION==============//
function App() {
    //Array
    //Maps takes an array and returns a new array with modifications
    //Maps takes functions as its parameters
    //Arrow function has an implicit return, so you can skip it
    const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchline={joke.punchLine} />)
    const productComponent = productsData.map(item => <Product key={item.id} product={item} />)

    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)



    return (
      <div>          
          <div>
            {productComponent}
          </div>

          <div>
            {jokeComponents}
          </div>

        <div className="contacts">
            <ContactCard 
              contact={{name: "Fluga Löve", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}}
            />
            <ContactCard 
                contact={{name: "Fluffykins", imgUrl: "http://placekitten.com/400/200", phone: "(212) 555-2345", email: "fluff@me.com"}}
            />
            <ContactCard 
              contact={{name: "Destroyer", imgUrl: "http://placekitten.com/400/300", phone: "(212) 555-3456", email: "ofworlds@yahoo.com"}}
            />
            <ContactCard
              contact={{name: "Felix", imgUrl: "http://placekitten.com/200/100", phone: "(212) 555-4567", email: "thecat@hotmail.com"}}
            />
        </div> 

          <div className="todo-list">
            {todoItems}
          </div>
      </div>
    )
}
//==============COMPONENT FUNCTION==============//











//==============STATES==============//
//STATES - the data a component maintains. it's the way a component can change its data, unlike props that are unchangeable
class App extends React.Component {
    // a constructor method - a place where you initialize some values
    constructor () {
      //super grabs goodies from React.Component and adds it to App
      super()
      this.state = {
        answer: "Yes"
      }
    }
  
  
    render () {
      return (
        <div>
          <h1>Is state important to know? {this.state.answer}</h1>
        </div>
      )
    }
  }
  //==============STATES==============//
  





//==============CLASS COMPONENTS==============//
// Class components
// to use Props with classes, you do {this.props.whatever}
// instead of function, you say class App extends React Component {}
// like this:
class App extends React.Component {

    render() {
      return (
          <div>
              <h1>{this.props.whatever}</h1>
          </div>
      )
    }
  }
  //==============CLASS COMPONENTS==============//








//==============LIFECYCLE METHODS==============//
//RENDER METHOD
//Like getting dressed for the day. Its job is to determine what gets rendered to the screen
render() {
  return (
      <div>
          Code goes here
      </div>
  )
}

//componentDidMount
//Means: this component just showed up
componentDidMount() {
        //Get the data I need to correctly display, fx from an API
}

shouldComponentUpdate(nextProps, nextState) {
    //return true if want it to update
    //return false if not
}

componentWillUnmount() {
    // teardown or cleanup your code before your component disappears
    // (E.g. remove event listeners)
}
//==============LIFECYCLE METHODS==============//







//==============Conditional Rendering==============//

function Conditional(props) {
    return (
        <div>
            <h1>Navbar</h1>

            {/* //if props.isLoading is TRUE, do this, if not ":" then do that */}
            {props.isLoading === true ? <h1>Loading...</h1> : <h1>Done Loading.</h1> }

            <h1>Footer</h1>
        </div>
    )
}
//==============Conditional Rendering==============//








//============== The check list code ==============//

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
  
  
    // use map to loop over the prevState.todos and look for the todo that is given in the method
     handleChange(id) { 
      this.setState(prevState => {
          //a variable that looks through the prevState array
          const updatedTodos = prevState.todos.map(todo => {
            //if the current todo we're looking at has an id that is equal to the id we 
            //received from the parameter up here, then this is the todo that we want to flip the completed propertly of
            if (todo.id === id) {
              return {
                //Means that I'm going to return a brand new object that will replace that todo in the new array
                // "..." object spread notation, means: give me all of the properties from this todo, but then I'm going to manually overwrite the completed property to be the !opposite of the previous
                ...todo,
                completed: !todo.completed
              }
            }
            //this puts this todo item our new array 
            return todo
          })
          return {
            //the todos are now the updated version of todos
            //the array that we just completed
            todos: updatedTodos
          }
      })
    }
  
  
    render() {
      const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
      
      return (
          <div className="todo-list">
              {todoItems}
          </div>
      )    
  }
  }
//============== The check list code ==============//









//============== API fetch code ==============//
  class App extends React.Component {
    constructor() {
      super()
      //we need to save the data from the fetch call (from the API), so we do it here by its state
      this.state = {
        //a loading message that appears before the api is fetched
        loading: false,
        character: {}
      }
    }
  

  componentDidMount() {
    //changing the state to true
    this.setState({loading:true})
    //fetching the data from the API
    fetch("https://swapi.dev/api/people/1/")
        //resolving the promise
        .then(response => response.json())
        //receiving the data
        .then(data => {
          //setting the state according to the data
          this.setState({
            //setting the state of loading back to false, because the data is coming in and it's not loading anymore
            loading: false,
            character: data
          })
        })
  }


  render() {
      //if the this.state.loading is true, display "loading", otherwise, show character name
      const text = this.state.loading ? "loading" : this.state.character.name
      return (
        <div>
          <p>{text}</p>
        </div>
      )
  }
}

//============== API fetch code ==============//









//============ FORMS CODE HERE ============//
class App extends React.Component {
    constructor() {
      super()
      this.state = {
        firstName: "",
        lastName: ""
      }
      this.handleChange = this.handleChange.bind(this)
    }

    //handle change function - every time input changes, state changes
    handleChange(event) {
      this.setState({
          //target represents the element in which the event was fired
          //every time my character is typed into the input box, run the handleChange function which changes the state
          [event.target.name]: event.target.value
      })
    }

    render() {
      return (
        <form>
          <input type="text" name="firstName" placeholder="First name" onChange={this.handleChange} />
          <br />
          <input type="text" name="lastName" placeholder="Last name" onChange={this.handleChange} />
        </form>
      )
    }
}
//============ FORMS CODE HERE ============//








//============ HOOKS ============//
import React, { useState } from "react"

function App() {
    //value is in brackets because it's an array
    const [value] = useState("yes")
    return (
        <div>
            <h1>Is state important to know {value}</h1>
        </div>
    )
}

function App() {
    //count is the state - setCount is a function i can use when i need to change state
    //so down below, when i click the button, it calls the function that changes the state to whatever is specified.
    //onClick refers to a function called increment, in there is setCount (a hook that will change the state) ....
    // .... and within setCount is a function that says, prevCount is not prevCount + 1, which is the new state
    const [count, setCount] = useState(0)

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrament() {
        setCount(prevCount => prevCount - 1)
    }

        return (
            <div>
                <h1>{count}</h1>
                <button onClick={increment}>Increment</button>
                <button onClick={decrament}>Decrament</button>
            </div>
        )
}

//============ HOOKS ============//



