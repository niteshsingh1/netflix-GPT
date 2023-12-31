// import dotenv from 'dotenv'
// dotenv.config()
export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://occ-0-4345-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWtYstzFdHB5VDwg1wo0AtmxHp1wtiHQt6kfVzqrLag-FyrhJSX1Suc-w_56yVQPsLfndT57n9KLPVZ-PMVtsUAKpA3TZ6M.png?r=72f";

export const API_OPTIONS={
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzM4NjhhMmUxNjM3ZTIzMjQzMjhiMWE2OGI2MjVmYiIsInN1YiI6IjY1MDQ1YzI2ZWEzN2UwMDExZDA5MjVhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BdNt00yQLWzRIj9_WrOUKs_JpwD3xfK4NG-NbN9bSJs',
  },
};


export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BACKGROUND_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGE = [
  { identifiers: "en", name: "English" },
  { identifiers: "Hindi", name: "Hindi" },
  { identifiers: "Spanish", name: "Spanish" },
];


export const OPEN_AI_KEY =process.env.REACT_APP_OPEN_AI_KEY;