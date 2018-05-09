import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

class DailyMindfuls extends Component {
  constructor(props){
    super(props)

    this.state = {
      mindfuls: []
    }
  }

componentDidMount(){
    fetch('/api/daily_mindfuls').then(response => {
      console.log(response.json())
      debugger;
      this.setState({mindfuls: response.data})
    })
    .catch(error => console.log(error))
}

  render() {
    return (
      <div>
        {this.state.mindfuls.map((mindful) => {
          return(
            <div className="title" key="{mindful.id}">
              <h3>{mindful.content}</h3>
            </div>
          )
        })}
      </div>
    )
  }
}

export default DailyMindfuls;
