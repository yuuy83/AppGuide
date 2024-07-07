import React from 'react';
import { Redirect } from 'expo-router';

const StartPage = () => {
  return (
   <Redirect href={"/Home"}/>
  )
}
export default StartPage

