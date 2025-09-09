import  { Component } from "react";

import "../Styles/LoadingIndicator.css";

class LoadingIndicator extends Component {
  render() {
    return (
      <>
        <div className="loading-indicator">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      </>
    );
  }
}
export default LoadingIndicator;
