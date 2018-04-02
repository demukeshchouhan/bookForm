import React, { Component } from "react";
import validator from "validator";
import InlineError from "../messages/InlineError";
import PropTypes from "prop-types";

export default class LoginForm extends Component {
  state = { data: { email: "", password: "" }, errors: {}, lading: false };

  validate(data) {
    const errors = {};
    if (!validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "can't be blank";
    return errors;
  }

  handleChange(e) {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({
      errors
    });
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  }

  render() {
    const { data, errors } = this.state;
    return (
      <form action="" onSubmit={e => this.handleSubmit(e)}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            style={errors.email ? { border: "1px solid red" } : {}}
            type="text"
            name="email"
            value={data.email}
            placeholder="email"
            onChange={e => this.handleChange(e)}
          />
          {errors.email && <InlineError msg={errors.email} />}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            style={errors.password ? { border: "1px solid red" } : {}}
            type="password"
            name="password"
            value={data.password}
            placeholder="password"
            onChange={e => this.handleChange(e)}
          />
          {errors.password && <InlineError msg={errors.password} />}
        </div>
        <div>
          <input type="submit" name="submit" />
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};
