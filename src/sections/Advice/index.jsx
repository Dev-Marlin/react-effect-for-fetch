import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

function AdviceSection({advice, setGetAdvice, getAdvice, favouriteAdvice, addFavourite}) {
  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <AdviceSlip advice={advice} setGetAdvice={setGetAdvice} getAdvice={getAdvice} addFavourite={addFavourite}></AdviceSlip>
      </section>

      <section className="favourtite-slips-list">
        <div className="scroll-container">
          <FavouriteSlipsList favouriteAdvice={favouriteAdvice}></FavouriteSlipsList>
        </div>
      </section>
    </section>
  )
}

export default AdviceSection
