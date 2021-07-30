import card from "../../assets/Mononoke-Irontown.jpeg";
import "./LocationCards.scss";
import { Link } from "react-router-dom";

const LocationCards = ({ locationData }) => {
  console.log(locationData);
  return (
    <main className="cards">
      {locationData.map((location) => {
        return (
          <Link
            to={`/listing/${location.id}`}
            className="cards__link"
            key={locationData.id}
          >
            <div class="card__container">
              <image src={card}></image>
            </div>
          </Link>
        );
      })}
    </main>
  );
};
export default LocationCards;
