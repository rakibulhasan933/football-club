import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faPlusCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Player = props => {
  const { name, price, image } = props.player;
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card">
        <img src={image} alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="text-primary">
            <FontAwesomeIcon icon={faDollarSign} /> {price} GBM
          </p>

          <button
            disabled={isClicked}
            onClick={() => {
              props.addToCartHandler(props.player);
              setIsClicked(true);
            }}
            className="btn btn-success"
          >
            {isClicked ? (
              <>
                <FontAwesomeIcon icon={faCheckCircle} />
                Already Added
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faPlusCircle} />
                Add Player
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
