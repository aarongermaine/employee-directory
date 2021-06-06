import React from "react";

import "../styles/Wrapper.css";

// wrapper for internal components
function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}

export default Wrapper;
