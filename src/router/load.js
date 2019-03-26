import React from "react";
import Loadable from "react-loadable";
import { Spin } from "antd";

export default callback => {
  return Loadable({
    loader: () => callback(),
    loading: props => {
      if (props.error) {
        console.error(props.error);
      }
      return (
        <div className="load-page-spin-wrapper">
          <Spin size="large" />
        </div>
      );
    }
  });
};