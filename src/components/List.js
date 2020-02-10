import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  articles: state.addArticle.articles
});

const List = ({ articles }) => (
  <ul>
    {console.log(articles)}
    {articles.map(({ id, title }) => (
      <li key={title}>{title}</li>
    ))}
  </ul>
);

export default connect(mapStateToProps)(List);
