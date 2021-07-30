import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../../util";

class Listing extends Component {
  state = {
    location: null,
  };

  componentDidMount() {
    axios
      .get(`${API_URL}/locations`)
      .then((res) => {
        const foundLoc = res.data.find(
          (location) => location.id === this.props.match.params.id
        );
        this.setState({ location: foundLoc });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.location?.name}</h1>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    );
  }
}

export default Listing;
