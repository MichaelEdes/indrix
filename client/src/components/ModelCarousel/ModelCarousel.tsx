import React, { useState } from "react";
import "./ModelCarousel.css";

const robotModels = [
  {
    name: "Sobie XF Pro",
    imageUrl:
      "https://media.discordapp.net/attachments/1020333985324351598/1103961063055175740/starshadowx2_iseneld__abstract_biomechanic_humanoid_portrait_ma_c9290046-99d7-4c02-af46-e801896de4de.png?width=688&height=1228",
    collection: "Spectrum Noir",
  },
  {
    name: "Singrid M4",
    imageUrl:
      "https://media.discordapp.net/attachments/1020333985324351598/1103961063810150400/starshadowx2_iseneld_abstract_biomechanic_humanoid_portrait_mad_2e0886f4-c13a-407a-8905-620778c5df02.png?width=688&height=1228",
    collection: "Spectrum Noir",
  },
  {
    name: "Entrix IS3",
    imageUrl:
      "https://media.discordapp.net/attachments/1020333985324351598/1103961064317648906/starshadowx2_Chris_Cunningham_style_iseneld_abstract_biomechani_6db7af24-5d3f-478b-be89-a9038c072524.png?width=688&height=1228",
    collection: "Spectrum Noir",
  },
  {
    name: "Pheonix S2",
    imageUrl:
      "https://media.discordapp.net/attachments/1020333985324351598/1103961064862920714/starshadowx2_Chris_Cunningham_style_iseneld_abstract_biomechani_17cb79c1-4593-4ed8-9987-fc9e9cfbc5ad.png?width=688&height=1228",
    collection: "Spectrum Noir",
  },
  {
    name: "Ike 92",
    imageUrl:
      "https://media.discordapp.net/attachments/1020333985324351598/1103961065726935160/starshadowx2_Chris_Cunningham_style_iseneld_abstract_biomechani_a3410022-a9eb-4796-b3a0-68f12e050e0a.png?width=688&height=1228",
    collection: "Spectrum Noir",
  },
  {
    name: "Mark 10",
    imageUrl:
      "https://media.discordapp.net/attachments/1020333985324351598/1103961066200907856/starshadowx2_Chris_Cunningham_style_iseneld_abstract_biomechani_e4de2821-3c52-4d15-94a0-438581077b90.png?width=688&height=1228",
    collection: "Spectrum Noir",
  },
  {
    name: "Sophia 32D",
    imageUrl:
      "https://media.discordapp.net/attachments/1038329663187062804/1104107464028323920/starshadowx2_Chris_Cunningham_style_transparent_blue_techwear_i_4223a935-18fe-4e12-8ddd-a377599a7d83.png?width=688&height=1228",
    collection: "Colourex",
  },
  {
    name: "El 9XV2",
    imageUrl:
      "https://media.discordapp.net/attachments/1038329663187062804/1104107464401621084/starshadowx2_Chris_Cunningham_style_transparent_blue_plastic_te_75235f78-5e26-40f2-a86e-c6edfb62c6af.png?width=688&height=1228",
    collection: "Colourex",
  },
  {
    name: "Ingrid MS38",
    imageUrl:
      "https://media.discordapp.net/attachments/1038329663187062804/1104107465156591728/starshadowx2_Chris_Cunningham_style_translucent_coloured_plasti_ab709893-c818-4129-9495-284caec482ff.png?width=688&height=1228",
    collection: "Colourex",
  },
  {
    name: "Odin ITT3",
    imageUrl:
      "https://media.discordapp.net/attachments/1038329663187062804/1104107464724590652/starshadowx2_Chris_Cunningham_style_translucent_coloured_plasti_e10ac91d-1502-4469-8321-cffabd019ac6.png?width=688&height=1228",
    collection: "Colourex",
  },
  {
    name: "Xing IX",
    imageUrl:
      "https://media.discordapp.net/attachments/1038329663187062804/1104107466159042651/starshadowx2_Chris_Cunningham_style_translucent_brightly_colour_72818d07-3755-4d88-abdc-b0bdc64266cf.png?width=688&height=1228",
    collection: "Colourex",
  },
  {
    name: "Clarik 890B",
    imageUrl:
      "https://media.discordapp.net/attachments/1038329663187062804/1104107466914005225/starshadowx2_Chris_Cunningham_style_translucent_brightly_colour_77aa5549-1e3d-4dba-9116-91d180ae1bbf.png?width=688&height=1228",
    collection: "Colourex",
  },
];

function ModelCarousel() {
  const collections = ["Colourex", "Spectrum Noir"];

  const [collection, setCollection] = useState(collections[1]);

  return (
    <div className="model-carousel-container">
      <h1>Showcase</h1>
      <h5>
        <p
          className={`${collection === collections[1] && "selected"}`}
          onClick={() => setCollection(collections[1])}
        >
          Spectrum <i>Noir</i>
        </p>{" "}
        <p>|</p>{" "}
        <p
          className={`${collection === collections[0] && "selected"}`}
          onClick={() => setCollection(collections[0])}
        >
          Colour <i>Spentrix</i>
        </p>
      </h5>
      <div className="model-carousel">
        {robotModels
          .filter((model) => model.collection === collection)
          .map((model, index) => (
            <div className="model-card" key={model.name}>
              <div
                className={`image-container ${
                  collection === collections[1] && "greyscale"
                }`}
              >
                <img src={model.imageUrl} alt="robot" />
              </div>
              <div className="card-content">
                <h3>{model.name}</h3>
              </div>
            </div>
          ))}
      </div>
      <h5>
        <a href="/">View Collection</a>
      </h5>
    </div>
  );
}

export default ModelCarousel;
