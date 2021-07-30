import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../../util";
import "./listing.scss";
import house from "../../assets/sosuke-house.jpeg";

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
      <section className="listing">
        <h1 className="listing__title">{this.state.location?.name}</h1>
        <div className="listing__reviews-container">
          <p className="listing__rating">
            {" "}
            <span className="listing__rating-icon">&#9733;</span> 4.95
          </p>
          <p className="listing__host">
            <span className="listing__rating-icon"> &#10083;</span> Superhost
          </p>
        </div>
        <img className="listing__image" src={house} />
        <div className="listing__info">
          <h2 className="listing__info-title">
            Entire home hosted by {this.state.location?.name} Host
          </h2>
          <p className="listing__info-subtitle">
            8 guests · 3 bedrooms · 3 bathrooms
          </p>
        </div>
        <div className="listing__features">
          <h3 className="listing__features-title">
            Features of {this.state.location?.name}
          </h3>
          <p className="listing__features-subtitle">Terrain:</p>
          <p className="listing__features-text">
            {this.state.location?.terrain}
          </p>
          <p className="listing__features-subtitle">Climate:</p>
          <p className="listing__features-text">
            {this.state.location?.climate}
          </p>
        </div>
      </section>
    );
  }
}

export default Listing;
