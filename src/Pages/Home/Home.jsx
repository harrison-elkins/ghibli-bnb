import React, { Component } from "react";
import Hero from "../../components/Hero/Hero";
import LocationCards from "../../components/LocationCards/LocationCards";

export class Home extends Component {
  //   TODOstate goes here.

  // TODO then axios

  render() {
    return (
      <div>
        <Hero />
        <LocationCards />
      </div>
    );
  }
}

export default Home;
