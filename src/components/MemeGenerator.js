import React from "react";

//class component becomes this imports data

class MemeGenerator extends React.Component {
    state = {
        topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            //an empty array
            allMemeImgs: []
    }
    
    //THE OLD VERSION
    // constructor() {
    //     super()
    //     this.state={
    //         topText: "",
    //         bottomText: "",
    //         randomImg: "http://i.imgflip.com/1bij.jpg",
    //         //an empty array
    //         allMemeImgs: []
    //     }
    // }

    componentDidMount() {
        //fetching the data from the API
        fetch("https://api.imgflip.com/get_memes")
        //returns a promise that we need to turn into a JS object, call the JSON method
        .then(response => response.json())
        //The response that we use (the data)
        .then(response => {
            //pulling the memes array from response.data
            const {memes} = response.data
            //setting the state, we don't care what the prevState is
            this.setState({allMemeImgs: memes})
        })
    }

    //the onChange handler method
    //receives an event
    handleChange = (event) => {
        //pulling the name and value properties from event.target, so i can get the name of state that i'm updating (topText + bottomText + what's typed into the box)
        const {name, value} = event.target
        //updating the state - whatever the name is, we give it the value from the input box
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        //get a random number (index in the array) - multiply the random number by the length of the allMemeImg array
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        //get the random meme from that index, according to the random number we just got
        const randMemeImg = this.state.allMemeImgs[randNum].url
        //set `randomImg` to the `.url` of the random item i grabbed - update the state
        this.setState({ randomImg: randMemeImg })

        //basically it's like this:
        //1.get a random number
        //2.assign the random number to the number of a meme from the array
        //3.set the state so that it's the random meme chosen from the array
    }

    //onSubmit refers to the random image that will display when the Gen button is pushed
    render() {
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        //value because this is a controlled form
                        //value needs to be set to equal to what the current value of state is
                        value={this.state.topText}
                        //connects to the handle change method above
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        //value because this is a controlled form
                        //value needs to be set to equal to what the current value of state is
                        value={this.state.bottomText}
                        //connects to the handle change method above
                        onChange={this.handleChange}
                    />
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt=""/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }    
}


export default MemeGenerator