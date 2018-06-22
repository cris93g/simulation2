import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addHouses } from "../../redux/ducks/housesReducer";

class Wizard extends Component {
  state = {
    property_name: "",
    adress: "",
    price: "",

    state: "",
    zip: ""
  };
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmitHandler = e => {
    e.preventDefault();
    const { property_name, adress, price, state, zip } = this.state;
    if ((property_name && adress && price && state, zip)) {
      this.props.addHouses({ property_name, adress, price, state, zip });
      this.props.history.replace("/");
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <input
            value={this.state.property_name}
            onChange={this.onChangeHandler}
            name="property_name"
            placeholder="property_name"
            type=""
          />
          <input
            value={this.state.adress}
            onChange={this.onChangeHandler}
            name="adress"
            placeholder="adress"
            type="text"
          />
          <input
            value={this.state.price}
            onChange={this.onChangeHandler}
            name="price"
            placeholder="price"
            type="text"
          />
          <input
            value={this.state.state}
            onChange={this.onChangeHandler}
            name="state"
            placeholder="state"
            type="text"
          />
          <input
            value={this.state.zip}
            onChange={this.onChangeHandler}
            name="zip"
            placeholder="zip"
            type="text"
          />
          <button>Add House</button>
        </form>

        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { addHouses }
)(Wizard);
