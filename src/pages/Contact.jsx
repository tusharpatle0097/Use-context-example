import React, { useState } from 'react';
import { productApi } from '../context/UseContextCall';
import { useContext } from 'react';
import SomeData from '../jsx/SomeData';

const Contact = () => {
    const {filtermydata} = useContext(productApi)
   

    return (
        <div>
          {
           filtermydata.map((items,index)=>{
                return(
                    <li key={index}>{items.name}</li>
                )
            })
          }
          <SomeData/>
        </div>
    )
}

export default Contact