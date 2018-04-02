import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../actions/";
import { findDOMNode } from "react-dom";

class HomeSub extends Component {
  state = {
    changed: false
  };
  //   componentWillReceiveProps(nextProps, prevState) {
  //     console.log("componentWillReceiveProps", nextProps, prevState);
  //     if (nextProps.msg !== this.props.msg) {
  //       this.setState({
  //         changed: true
  //       });
  //     }
  //   }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("shouldComponentUpdate", nextProps, nextState, nextContext);
    return true;
  }
  componentWillUpdate(nextProps, prevState) {
    console.log("componentWillUpdate", nextProps, prevState);
    if (nextProps.msg !== this.props.msg) {
      this.setState({ changed: "sss" });
    }
    findDOMNode(this).remove();
  }
  componentWillUnmount() {
    findDOMNode(this).remove();
  }
  render() {
    return (
      <div>
        HomeSub, {this.props.msg}
        <span>{this.state.changed ? "yo" : "nope"}</span>
        {this.state.unMountMsg ? <span>{this.props.unMountMsg}</span> : ""}
      </div>
    );
  }
}

const mapState = state => ({
  unMountMsg: state.UnMountReducer
});

export default connect(mapState, actions)(HomeSub);
