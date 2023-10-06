import React from 'react';
import { productApi } from '../context/UseContextCall';
import { useContext } from 'react';

const SomeData = () => {

  const { listing } = useContext(productApi)
  console.log(listing, "??/")
  return (
    <div>SomeData</div>
  )
}

export default SomeData