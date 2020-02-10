import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

class Post extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <ul>
        {this.props.articles.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.dataLoaded.remoteArticles.slice(0, 10)
});

// const mapDispatchToProps = {
//   getData
// }

export default connect(mapStateToProps, { getData })(Post);
