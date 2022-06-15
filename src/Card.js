import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className='tc bg-light-yellow dib br3 pa3 ma2 b--green ba grow shadow-5'>
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robot img" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
