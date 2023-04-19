import React, { Component } from "react";

const StatusBar = (props) => {
  //({totalCount})
  return (
    <div className="container-fluid">
      <span className="navbar-brand">Status</span>
      <span className="badge text-bg-secondary">
        {props.totalCount} {/*totalCount*/}
      </span>
    </div>
  );
};

export default StatusBar;
