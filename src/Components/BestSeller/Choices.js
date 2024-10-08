import React from "react";

const Choices = ({ filter }) => {
  console.log("props: ", filter);
  const styles = {
    container: {
      backgroundColor: "#000",
      padding: "20px",
      color: "#fff",
      display: "flex",       // Use flexbox
      flexWrap: "wrap",      // Allows wrapping if there are too many items
      gap: "20px",           // Adds space between the cards
    },
    card: {
      backgroundColor: "#1c1c1c",
      borderRadius: "2px",
      padding: "15px",
      textAlign: "left",
      position: "relative",
      flex: "1 1 300px",     // Allows flex items to grow and shrink
      maxWidth: "300px",     // Ensures the cards don't exceed a certain width
    },
    image: {
      width: "100%",
      borderRadius: "8px",
      marginTop: "30px",
      marginBottom: "10px",
      transition: "transform 0.2s ease",
    },
    title: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "10px",
      marginTop: "20px",
      color: "#fff",
    },
    priceTag: {
      display: "inline-block",
      backgroundColor: "#ea002a",
      color: "#fff",
      padding: "5px 20px",
      fontWeight: "bold",
      fontSize: "16px",
      position: "absolute",
      right: "0px",
      clipPath: "polygon(0 0, 90% 0, 100% 0%, 100% 100%, 0 100%, 10% 50%)",
    },
    topBarContainer: {
      display: "flex",
      alignItems: "center",
      padding: "0px 0",
      position: "absolute",
      top: "0",
      left: "50%",
      transform: "translateX(-50%)",
    },
    topBar: {
      height: "25px",
      backgroundColor: "#ea002a",
      width: "15px",
      margin: "0px 3px",
    },
  };

  return (
    <>
      {filter && filter.length > 0 && (
        <div style={styles.container}>
          {filter.map((card, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.topBarContainer}>
                <div style={styles.topBar}></div>
                <div style={styles.topBar}></div>
                <div style={styles.topBar}></div>
              </div>
              <div style={styles.title}>{card.title}</div>
              <div style={styles.priceTag}>{`Rs ${card.price}`}</div>
              <img src={card.imageSrc} alt={card.title} style={styles.image} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Choices;