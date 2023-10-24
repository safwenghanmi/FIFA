import React from "react";
import Players from "./Players";
import Player from "./Player";
import './App.css';


const Playerlist = () => {
  return (
    <div className="playerlist">
      {Players.map((player, index) => (
        <Player key={index} player={player} /> 
    

     ))
    
      }
      
    </div>
  );
}

export default Playerlist;
