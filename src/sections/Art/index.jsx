import ArtList from "./components/ArtList"

function ArtsSection({art, url}) {
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList art={art} url={url}></ArtList>
      </div>
    </section>
  )
}

export default ArtsSection
