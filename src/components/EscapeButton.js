import React, { Component } from 'react'




class EscapeButton extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    top: '50%',
    left: '50%',
  }

  escape = (event) => {
    let rect = event.target.getBoundingClientRect()
    let maxHeight = document.documentElement.scrollHeight
    let maxWidth = document.documentElement.scrollWidth


    this.setState({ 
      top: Math.floor(Math.random() * (maxHeight - rect.height)),
      left: Math.floor(Math.random() * (maxWidth - rect.width))
    })

  }


  render() {
    const { top, left } = this.state

    return <button style={{ position: 'absolute', top: top, left: left }} onMouseEnter={this.escape}>click Me if you can!</button>
  }

}

export default EscapeButton