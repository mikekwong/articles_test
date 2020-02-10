import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions";

class Form extends Component {
  state = { title: "" };

  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title } = this.state;
    this.props.addArticle({ title });
    this.setState({ title: "" });
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={this.handleChange} />
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addArticle: article => dispatch(addArticle(article))
});

export default connect(null, mapDispatchToProps)(Form);
