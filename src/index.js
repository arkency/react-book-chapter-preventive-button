import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import PreventiveButton from "./components/PreventiveButton";

function action(component) {
  setTimeout(function() {
    actionFinished(component);
  }, 2000);
}

function actionFinished(component) {
  console.log("Done");
  component.reset();
}

ReactDOM.render(
  <PreventiveButton label="Submit" action={action} />,
  document.getElementById("root")
);
