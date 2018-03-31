import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "../../actions";

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
        Home, {this.props.home.message}
        <button onClick={() => this.change()}>Change</button>
      </div>
    );
  }
}

const mapState = state => ({
  home: state.HomeReducer
});

export default connect(mapState, actions)(Home);
