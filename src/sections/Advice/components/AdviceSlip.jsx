import React from 'react'

function AdviceSlip({advice, setGetAdvice, getAdvice, addFavourite}) {
  return (
    <>
        <h3>Some Advice</h3>

        <p>{advice.slip.advice}</p>

        <button onClick={()=> setGetAdvice(!getAdvice)}>Get More Advice</button>
        <button onClick={()=> addFavourite(advice.slip.advice)}>Save to Favourties</button>
    </>
  )
}

export default AdviceSlip