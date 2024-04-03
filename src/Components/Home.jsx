import React from "react";

const Home = () => {
  const imagesWithQuotes = [
    {
      imageUrl: "https://img.freepik.com/free-photo/environmental-conservation-garden-children_1150-15276.jpg",
      quote: "A society grows great when old men plant trees whose shade they know they shall never sit in.",
    },
    {
      imageUrl: "https://qph.cf2.quoracdn.net/main-qimg-fd453ab4b68f0ce6387a5f6cc1080e59",
      quote: "Plant a tree, so that the next generation can get air for free.",
    },
    {
      imageUrl: "https://wbmfoundation.files.wordpress.com/2016/03/plants-and-tress.jpg?w=768&h=432",
      quote: "He who plants a tree plants hope.",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2>Championing Conservation: Protecting Our Forests, Saving Our Future</h2>
      {imagesWithQuotes.map((item, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
          <img src={item.imageUrl} alt={`Tree ${index}`} style={{ width: "200px", height: "auto", marginRight: "20px" }} />
          <p>{item.quote}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
