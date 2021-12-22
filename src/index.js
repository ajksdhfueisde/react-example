import App from "./App";
// ReactDOM.render(<App />, document.getElementById("root"));
import React from 'react';
import ReactDOM from 'react-dom';
// 注意 Singlespacontext 是一个为react@16.3(如果可用的话)提供的上下文，包含了 singleSpa props
import singleSpaReact, {SingleSpaContext} from 'single-spa-react';
const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    // https://reactjs.org/docs/error-boundaries.html
    return (
      <div>This renders when a catastrophic error occurs</div>
    );
  },
  parcelCanUpdate: true,
});
export const name = '@elcp/asset-detail';
export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;
