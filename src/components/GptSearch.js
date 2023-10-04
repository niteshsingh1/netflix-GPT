import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestion from "./GptMoviesSuggestion";
import { BACKGROUND_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 ">
        <img className="h-screen md:h-full object-cover" src={BACKGROUND_IMG} alt="logo" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMoviesSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
