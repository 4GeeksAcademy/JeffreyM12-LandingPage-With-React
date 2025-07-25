import React from "react";
import Navbar from "./Navbar"
import Jumbotron from "./Jumbotron";
import IndividualCard from "./IndividualCard";
// import Cards from "./Cards"
import Footer from "./Footer"

const Home = () => {

  const cardData = [
    {
        id: 1,
        title: "Card1", 
        description: "Sed ut perspiciatis unde omnis iste natus error",
    },
    {
        id: 2,
        title: "Card2", 
        description: "Ut enim ad minima veniam",
    },
    {
        id: 3,
        title: "Card3", 
        description: "At vero eos et accusamus et iusto",
    },
    {
        id: 4,
        title: "Card4", 
        description: "Nam libero tempore",
    },
  ];

  return (
    <>
    <Navbar/>
    <Jumbotron/>
    
    {/* <Cards/> */}
    <div className="card-container d-flex gap-3 justify-content-center flex-wrap">
      {cardData.map((card, index) => (
        <IndividualCard key={index} title={card.title} description={card.description} />
      ))}
    </div>

    <Footer/>
    </>
  );
};
export default Home;