import React from "react";
import "./App.css";
import { addArticle } from "./actions";
import { connect } from "react-redux";

import List from "./components/List";

const App = () => {
  return (
    <div>
      <List />
    </div>
  );
};

export default App;
