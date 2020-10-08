import React from 'react'
import {Text} from 'react-native';
  
const Result = ({ term , secretNum }) => { 
  let result; 
  if(term){ 
    if(secretNum < term){ 
      result ='Demasiado alto'
    } 
    else if(secretNum > term){ 
      result = 'Demasiado bajo'
    } 
    else{ 
      result ='Lo adivinaste, FELICIDADES!'
    } 
  } 
  return <Text>{result}</Text> 
} 
  
export default Result