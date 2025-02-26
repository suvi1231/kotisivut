import React from "react";
import kotikuva from "../images/kotikuva.jpg"; // Make sure to replace this with the correct image path

const TextAndImage = () => {
  return (
    <section className="text-and-image" style={{ height: "60vh", display: "flex", alignItems: "center" }}>
      <div className="text-content" style={{ width: "50%", padding: "2rem" }}>
        <h1>Hermoratahieronta</h1>
        <h2>Kenelle hoidot sopivat ja mihin niistä on apua?</h2>
        <p>
          Hoidot sopivat jokaiselle. On kuitenkin tilanteita, joissa hoitoja ei voida toteuttaa; jos olet raskaana
          tai olet ollut kahden kuukauden sisällä leikkauksessa.
        </p>
        <p>Hoidoista saa apua moneen vaivaan kuten;</p>
        <h4>Stressi ja sen lukuisat oireet</h4>
        <h4>Lihassärky</h4>
        <h4>Krooniset sairaudet</h4>
        <h4>Sekä lukuisat muut vaivat.</h4>
        <p>Lämpimästi tervetuloa kiireettömään hoitoon kohti kokonaisvaltaista hyvinvointia!</p>
      </div>
      <div className="image-content" style={{ width: "40%" }}>
        <img src={kotikuva} alt="Hero" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
      </div>
    </section>
  );
};

export default TextAndImage;
