import card from "../../assets/Mononoke-Irontown.jpeg";
import "./LocationCards.scss";
import { Link } from "react-router-dom";
import image from "../../assets/sosuke-house.jpeg";

const LocationCards = ({ locationData }) => {
  console.log(locationData);
  const filteredArr = locationData.filter(
    (location) =>
      location.name === "Shizuku's Apartment" ||
      location.name === "Bathhouse" ||
      location.name === "Fujimoto's Underwater Harbor"
  );
  console.log(filteredArr);
  return (
    <main className="cards">
      {filteredArr.map((location) => {
        return (
          <>
            <Link
              to={`/listing/${location.id}`}
              className="cards__link"
              key={locationData.id}
            >
              <div className="card__container">
                <image className="card__image" src={image} />
              </div>
            </Link>
          </>
        );
      })}
    </main>
  );
};
export default LocationCards;
