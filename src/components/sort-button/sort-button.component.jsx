import React from "react";

import "./sort-button.styles.css";
import { Button } from "@material-ui/core";

export const SortButton = () => {
  return (
    <div className="sort">
      <Button variant="outlined">Sort by..</Button>
    </div>
  );
};
