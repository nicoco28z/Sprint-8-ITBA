import React from "react";
import MyCarousel from "../components/Carousell/Carousell";

export default function HomePage() {
  const estiloPagina = {
    backgroundColor: "#d6f2e6", 
  };

  return (
    <div style={estiloPagina}>
      <MyCarousel />
    </div>
  );
}
