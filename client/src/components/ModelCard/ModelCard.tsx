import React from "react";
import { RobotModel } from "../../types/robotModel";

type Props = {
  model: RobotModel;
};

const ModelCard: React.FC<Props> = ({ model }) => {
  return (
    <div className="model-card" key={model.name}>
      <div className={`image-container`}>
        <img src={model.imageUrl} alt="robot" />
      </div>
      <div className="card-content">
        <h3>{model.name}</h3>
      </div>
    </div>
  );
};

export default ModelCard;
