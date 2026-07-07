import React from "react";

function Card({ animal }) {
  return (
    <div className="w-[250px] p-2 shadow-2xl rounded-lg hover:scale-105 transition-all duration-500">
      <div className=" w-full flex justify-center">
        <img src={animal.img} alt="" className="h-30 w-30 rounded-full" />
      </div>
      <p className="text-center font-bold text-gray-700">
        {animal.title}
      </p>
      <p className="text-gray-500">{animal.desc}</p>
      <button className="p-3 w-full bg-purple-500 rounded-xl mt-2 text-white font-bold hover:bg-purple-400 cursor-pointer">
        View Page
      </button>
    </div>
  );
}

export default Card;
