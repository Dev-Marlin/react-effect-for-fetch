import React from 'react'
import FavouriteSlipsListItem from './FavouriteSlipsListItem';

function FavouriteSlipsList({favouriteAdvice}) {
    let index = 0;
  return (
    <>
        <h3>Favourite Advice Slips</h3>
        <ul>
            {
                favouriteAdvice.map((a) =>(
                    <FavouriteSlipsListItem key={index++} advice={a} ></FavouriteSlipsListItem>
    
                ))
            }
        </ul>
    </>
  )
}

export default FavouriteSlipsList