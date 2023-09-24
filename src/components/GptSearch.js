import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptmoviesSuggestion from "./GptmoviesSuggestion";
import { BACKGROUND_IMG } from "../utils/constants";

const GptSearch = () => {
  return <div>
        <div className="fixed -z-10">
        <img
          src={BACKGROUND_IMG}
          alt="logo"
        />
      </div>
   
    <GptSearchBar/>
    <GptmoviesSuggestion/>
  </div>;
};

export default GptSearch;
