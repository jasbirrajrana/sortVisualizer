import React, { Fragment } from "react";

import BackDrop from "./BackDrop";

const AppDrawer = ({ open, children, closeDrawer }) => {
  let className = "AppDrawer";
  className += open ? ` AppDrawer_open` : ` AppDrawer_closed`;
  return (
    <Fragment>
      <div className={className}>
        <div className="AppDrawer__Content">{children}</div>
      </div>
      <BackDrop show={open} onClick={closeDrawer} />
    </Fragment>
  );
};

export default AppDrawer;
