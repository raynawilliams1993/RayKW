
import React from "react";

function Col(props) {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");
  console.log(size)
  return <><div className={size} {...props} /></>;
}

export default Col;