import React, { Component } from 'react'



// escape button component which is a statefull component
class EscapeButton extends Component {
  constructor(props) {
    super(props)
  }

  // initial state of the top and left
  state = {
    top: '50%',
    left: '50%',
  }

  escape = (event) => {
    let rect = event.target.getBoundingClientRect() // get the dimensions of the event.targe
    let maxHeight = document.documentElement.scrollHeight // get the height of the html page
    let maxWidth = document.documentElement.scrollWidth // get the width of the html page


    // change the sate of the height and the width
    this.setState({ 
      top: Math.floor(Math.random() * (maxHeight - rect.height)),
      left: Math.floor(Math.random() * (maxWidth - rect.width))
    })

  }


  render() {
    const { top, left } = this.state

    return (
      <button className='escape-button' style={{ top: top, left: left }} onMouseEnter={this.escape}>click Me if you can!</button>
    )
  }

}

export default EscapeButton