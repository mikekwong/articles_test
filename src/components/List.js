import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  articles: state.articles
});

const List = ({ articles }) => (
  <ul>
    {articles.map(article => (
      <li key={article.id}>{article.title}</li>
    ))}
  </ul>
);

export default connect(mapStateToProps)(List);
