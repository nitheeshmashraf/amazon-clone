import React from "react";
import "./Home.css";
import Product from "./Product";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fav_arr: [
        {
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nobis, deserunt facilis explicabo ipsum molestiae dignissimos quis suscipit, voluptatem odio dolorem asperiores sapiente optio ex velit esse mollitia numquam neque.",
          price: 29,
          image: "http://via.placeholder.com/100",
          rating: 3,
        },
        {
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid delectus officiis mollitia blanditiis earum laboriosam nihil tempora amet quae ipsam. Quod repudiandae laborum voluptatum, fugiat explicabo quasi dicta nobis cupiditate.",
          price: 10,
          image: "http://via.placeholder.com/100",
          rating: 4,
        },
      ],
      bestselling_arr: [
        {
          title: "stat3",
          price: 12,
          image: "http://via.placeholder.com/100",
          rating: 2,
        },
        {
          title: "stat4",
          price: 10,
          image: "http://via.placeholder.com/100",
          rating: 1,
        },
        {
          title: "stat5",
          price: 9,
          image: "http://via.placeholder.com/100",
          rating: 2,
        },
      ],
      Featured_arr: [
        {
          title: "stat4",
          price: 11,
          image: "http://via.placeholder.com/100",
          rating: 5,
        },
      ],
    };
  }
  render() {
    return (
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="bg image"
          />
          <div className="home__row">
            {this.state.fav_arr.map((i) => (
              <Product
                title={i.title}
                image={i.image}
                rating={i.rating}
                price={i.price}
              />
            ))}
          </div>
          <div className="home__row">
            {this.state.bestselling_arr.map((i) => (
              <Product
                title={i.title}
                image={i.image}
                rating={i.rating}
                price={i.price}
              />
            ))}
          </div>
          <div className="home__row">
            {this.state.Featured_arr.map((i) => (
              <Product
                title={i.title}
                image={i.image}
                rating={i.rating}
                price={i.price}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
