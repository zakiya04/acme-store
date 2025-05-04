import React from "react";
import Header from "../components/header";
import Cart from "../pages/cart";
import Carousal from "../components/ImageCarousal";
import ThreeGrid from "../components/ThreeGrid";
import Footer from "@/components/footer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Cart />
      <ThreeGrid />
      <Carousal />
      <Footer/>
    </>
  );
};

export default Home;
