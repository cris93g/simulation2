import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getHouses } from "../../redux/ducks/housesReducer";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getHouses();
  }

  render() {
    const { isLoading, houses } = this.props;

    const housesDisplay = isLoading ? (
      <p>Loading...</p>
    ) : (
      houses.map(house => {
        console.log(houses);
        return (
          <div>
            <h4>
              <p>{house.property_name}</p>
              <p>{house.adress}</p>
              <p>{house.price}</p>
              <p>{house.state}</p>
              <br />
            </h4>
          </div>
        );
      })
    );

    return (
      <div>
        {housesDisplay}
        <Link to="/wizard">
          <button>Add New Property</button>
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
  { getHouses }
)(Dashboard);
