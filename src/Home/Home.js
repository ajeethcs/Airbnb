import "./Home.css";
import Card from "./Cards/Card";

import React from "react";
import Banner from "./Banner/Banner";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home_section">
        <Card
          src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep"
        />
        <Card
          src="https://images.pexels.com/photos/10511470/pexels-photo-10511470.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family"
        />
      </div>

      <div className="home_section">
        <Card
          src="https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Penthouse in London"
          description="Enjoy the amazing sights of london with this stunning penthouse"
          price="₹10000/night"
        />
        <Card
          src="https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Bournemouth"
          price="₹9000/night"
        />
        <Card
          src="https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby "
          price="₹5000/night"
        />
      </div>
    </div>
  );
}

export default Home;
