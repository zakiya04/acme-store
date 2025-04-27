import React from "react";
import Header from "../components/header";
import Cart from "../pages/cart";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Carousal from "../components/ImageCarousal";
import ThreeGrid from "../components/ThreeGrid";

const Home: React.FC = () => {
  const showCart = useSelector((state: RootState) => state.cart.isOpen);
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
