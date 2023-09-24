import OpenAI from 'openai';
import { KEY_FOR_DATA } from './constants';

const openai = new OpenAI({
  apiKey: KEY_FOR_DATA, 
  dangerouslyAllowBrowser: true 
});


export default openai;