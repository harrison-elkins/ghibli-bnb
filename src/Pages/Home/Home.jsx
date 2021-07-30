import React, { Component } from "react";
import Hero from "../../components/Hero/Hero";
import LocationCards from "../../components/LocationCards/LocationCards";
import "./home.scss";
import Listing from "../Listing/Listing";
import { API_URL } from "../../util";
import axios from "axios";
import irontown from "../../assets/Mononoke-Irontown.jpeg";
import gondoa from "../../assets/gondoa.png";
import bamboo from "../../assets/bamboo.png";
import laputa from "../../assets/laputa.png";
import koriko from "../../assets/koriko.png";
import ingary from "../../assets/ingary.png";
import karikiyo from "../../assets/karikya.png";
import matsugo from "../../assets/matsugp.png";

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
          <div className="explore__destination-container">
            {/* irontown */}
            <div className="explore__destination">
              <img className="explore__destination-img" src={irontown} />
              <div className="explore__destination-text-wrapper">
                <p className="explore__destination-title">Iron Town</p>
                <p className="explore__destination-dist">5.5-hour drive</p>
              </div>
            </div>
            {/* gondoa */}
            <div className="explore__destination">
              <img className="explore__destination-img" src={gondoa} />
              <div className="explore__destination-text-wrapper">
                <p className="explore__destination-title">Gondoa</p>
                <p className="explore__destination-dist">5.5-hour drive</p>
              </div>
            </div>
            {/* bamboo forest */}
            <div className="explore__destination">
              <img className="explore__destination-img" src={bamboo} />
              <div className="explore__destination-text-wrapper">
                <p className="explore__destination-title">Bamboo Forest</p>
                <p className="explore__destination-dist">5.5-hour drive</p>
              </div>
            </div>
            {/* laputa */}
            <div className="explore__destination">
              <img className="explore__destination-img" src={laputa} />
              <div className="explore__destination-text-wrapper">
                <p className="explore__destination-title">Laputa</p>
                <p className="explore__destination-dist">5.5-hour drive</p>
              </div>
            </div>
            {/* koriko */}
            <div className="explore__destination">
              <img className="explore__destination-img" src={koriko} />
              <div className="explore__destination-text-wrapper">
                <p className="explore__destination-title">Koriko</p>
                <p className="explore__destination-dist">5.5-hour drive</p>
              </div>
            </div>
            {/* ingary */}
            <div className="explore__destination">
              <img className="explore__destination-img" src={ingary} />
              <div className="explore__destination-text-wrapper">
                <p className="explore__destination-title">Ingary</p>
                <p className="explore__destination-dist">5.5-hour drive</p>
              </div>
            </div>
            {/* karikiya */}
            <div className="explore__destination">
              <img className="explore__destination-img" src={karikiyo} />
              <div className="explore__destination-text-wrapper">
                <p className="explore__destination-title">Karikiya</p>
                <p className="explore__destination-dist">5.5-hour drive</p>
              </div>
            </div>
            {/* matsugo */}
            <div className="explore__destination">
              <img className="explore__destination-img" src={matsugo} />
              <div className="explore__destination-text-wrapper">
                <p className="explore__destination-title">Matsugo</p>
                <p className="explore__destination-dist">5.5-hour drive</p>
              </div>
            </div>
            <div className="explore__cta">
              <div className="explore__cta-wrapper">
                <h2 className="explore__cta-text">
                  Not sure where to go? Perfect.
                </h2>
                <div className="explore__btn">
                  <p className="explore__btn-text">Explore Now</p>
                </div>
              </div>
            </div>
          </div>
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
