import React, { Component } from "react";
import Hero from "../../components/Hero/Hero";
import LocationCards from "../../components/LocationCards/LocationCards";
import "./home.scss";

export class Home extends Component {
  //   TODOstate goes here.

  // TODO then axios

  render() {
    return (
      <div>
        <Hero />
        <section className="explore">
          <h1 className="explore__title">Explore nearby</h1>
        </section>
        <LocationCards />
      </div>
    );
  }
}

export default Home;
