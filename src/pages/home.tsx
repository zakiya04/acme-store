import React from "react";
import Header from "../components/header";
import Cart from "../pages/cart";
import Carousal from "../components/ImageCarousal";
import ThreeGrid from "../components/ThreeGrid";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Cart />
      <ThreeGrid />
      <Carousal />
    </>
  );
};

export default Home;
