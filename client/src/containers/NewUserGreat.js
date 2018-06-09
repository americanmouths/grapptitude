import React, {Component} from 'react';
import { connect } from 'react-redux';
import { newUserGreat } from './../actions/userGreats';
import { FormContainer } from './../theme/style';
import { bindActionCreators } from 'redux';

class NewUserGreatContainer extends Component {
  constructor() {
    super();

    this.state = {
      content: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.newUserGreat(this.state);
  }

  render() {

    return (
      <div className="row">
        <div className="col-md-4">
        </div>

        <div className="col-md-4">
          <FormContainer>
            <form onSubmit={(event) => this.handleSubmit(event)}>
              <textarea
                rows="3"
                cols="40"
                type="text"
                name="content"
                value={this.state.content}
                onChange={(event) => this.handleChange(event)}
                placeholder="I'm thankful for..."
                className="User-Great-Text-Area"
              />
              <br />
              <button className="Button-Control">Submit</button>
            </form>
          </FormContainer>
        </div>

        <div className="col-md-4">
        </div>

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    newUserGreat: newUserGreat
  }, dispatch);
}
export const NewUserGreat = connect(null, mapDispatchToProps)(NewUserGreatContainer)
