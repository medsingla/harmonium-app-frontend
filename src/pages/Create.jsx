import React from 'react';

const Card = ({ title }) => {
  return (
    <div className="flex-shrink-0 bg-[#272726] text-white p-4 rounded-lg shadow-lg flex flex-col items-left justify-top"
      style={{
        width: '15vw',
        height: '25vh',
      }}>
      <span className="text-white font-bold text-xl">
        Hare Krishna Tune #1
      </span>
      <div className="text-left pt-3 pb-3">
        <span className="text-white">Difficulty: </span>
        <span className="text-green-500"> Easy</span>
      </div>
      <span className="text-white">Parts: 2</span>
    </div>
  );
};

const Create = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#1B1B1B] p-4">
      <div className="text-white text-5xl font-bold p-10">
        Choose a Song
      </div>
      <div className="flex overflow-x-auto space-x-4 p-4">
        <Card title="Card 1" />
        <Card title="Card 2" />
        <Card title="Card 3" />
        {/* Add more <Card /> components as needed */}
      </div>
    </div>
  );
};

export default Create;
