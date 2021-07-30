import React, { Component } from "react";
import Hero from "../../components/Hero/Hero";
import LocationCards from "../../components/LocationCards/LocationCards";
import "./home.scss";
import Listing from "../Listing/Listing";
import { API_URL } from "../../util";
import axios from "axios";

class Home extends Component {
  //   TODOstate goes here.
  state = {
    locationData: null,
  };
  // TODO then axios
  componentDidMount() {
    axios
      .get(`${API_URL}/locations`)
      .then((res) => {
        this.setState({ locationData: res.data });
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      axios
        .get(`${API_URL}/locations/${this.props.match.params.id}`)
        .then((res) => {
          this.setState({ locationData: res.data });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }

  render() {
    return (
      <>
        <Hero />
        <section className="explore">
          <h1 className="explore__title">Explore nearby</h1>
        </section>
        {this.state.locationData && (
          <LocationCards locationData={this.state.locationData} />
        )}
        {/* {this.state.locationData && (
          <Listing
            className="listing-page"
            locationData={this.state.location}
          />
        )} */}
      </>
    );
  }
}
export default Home;
