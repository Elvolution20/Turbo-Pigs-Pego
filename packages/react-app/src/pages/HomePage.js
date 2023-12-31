import React from "react";
import {Header, Mint, Stake, NFTSlider, RoadMap, Team, Faq, Term, Footer} from "../components/home";

function HomePage(props) {
    return (
      <div className="Home">
          <Header {...props} />
          <Mint {...props} />
          <Stake {...props} />
          <NFTSlider />
          <RoadMap />
          <Team />
          <Faq />
          <Footer />
      </div>
    );
  }
  
  export default HomePage;