import React from "react";


const Card = ({ id, title, text }) => {
    return (
      <div
        className="col-lg-4 mb-3 d-flex align-items-stretch h-100"
        key={id}
      >
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
          </div>
        </div>
      </div>
    );
  };

export default Card;
