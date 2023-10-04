import OpenAI from 'openai';
// import dotenv from 'dotenv'
import {  OPEN_AI_KEY } from './constants';



const openai = new OpenAI({
  apiKey: OPEN_AI_KEY, 
  dangerouslyAllowBrowser: true 
});


export default openai;