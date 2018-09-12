import React from "react";
import { Link } from "gatsby";

export default () => (
  <div>
    <p>Hi, I'm Harkanwal.</p>
    <p>I develop, design and teach data visualisation.</p>
    <p>This is my personal website.</p>
    <p>
      You can find more about my <Link to="/work/">work</Link> and what{" "}
      <Link to="/about/">I've done so far.</Link>
    </p>
  </div>
);
