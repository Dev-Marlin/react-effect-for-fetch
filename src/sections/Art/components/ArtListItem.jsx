import React from 'react'
import PublicationHistoryList from "./PublicationHistoryList"

function ArtListItem({imageURL, title, artist, publicationHistory}) {
  return (
    <>
        <li>
            <div className="frame">
                <img src={imageURL}/>
            </div>

            <h3>{title}</h3>

            <p>Artist: {artist}</p>

            <PublicationHistoryList publicationHistory={publicationHistory}></PublicationHistoryList>
        </li>
    </>
  )
}

export default ArtListItem