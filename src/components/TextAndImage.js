import React from "react";
import kotikuva from "../images/kotikuva.jpg"; // Make sure to replace this with the correct image path
import './TextAndImage.css';

const TextAndImage = () => {
  return (
    <div className="text-and-image">
      <div className="text-content">
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
      <div className="image-content">
        <img src={kotikuva} alt="Hero" />
      </div>
    </div>
  );
};

export default TextAndImage;
