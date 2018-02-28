import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: ''};

    // Whenever there's a callback in a JSX element, and that callback makes use of 'this' keyword,
    // we need to bind the context.
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    // Fetch whether data
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''}); // this.setState causes the component to re-render.
  }

  render() {
    return (
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Get a five day forecast"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange} />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
      )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
  // 'fetchWeather' becomes available to 'props' of this container.
}

export default connect(null, mapDispatchToProps)(SearchBar);
