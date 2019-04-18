import React from "react";

const Rank = ({ nome, entries }) => {
  return (
    <div>
      <div className="white f3">{`${nome} , você já enviou essa quantidade de fotoss...`}</div>
      <div className="white f1">{entries}</div>
    </div>
  );
};

export default Rank;
