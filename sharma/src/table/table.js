import React    from "react";
import template from "./table.jsx";

class table extends React.Component {
  render() {
    return template.call(this);
  }
}

export default table;
