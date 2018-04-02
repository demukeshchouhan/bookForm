import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "../../actions";
import HomeSub from "./HomeSub";
import LoginForm from "../forms/LoginForm";

class Home extends Component {
  change() {
    this.props.welcomeMessage("We welcome you!");
  }
  componentDidMount() {
    fetch("/name")
      .then(res => res.json())
      .then(data => console.log(data));
  }
  render() {
    console.log(this.props);
    return (
      <div>
        Home,
        <HomeSub msg={this.props.home.message} />
        <button onClick={() => this.change()}>Change</button>
        <LoginForm>
          <h1>Hello from form child Component</h1>
        </LoginForm>
      </div>
    );
  }
}

const mapState = state => ({
  home: state.HomeReducer
});

export default connect(mapState, actions)(Home);
