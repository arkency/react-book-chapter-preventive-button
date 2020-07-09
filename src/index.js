import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import PreventiveButton from "./components/PreventiveButton";

function action(actionCallback) {
  setTimeout(function() {
    actionFinished(actionCallback);
  }, 2000);
}

function actionFinished(actionCallback) {
  console.log("Done");
  actionCallback();
}

ReactDOM.render(
  <PreventiveButton label="Submit" action={action} />,
  document.getElementById("root")
);
