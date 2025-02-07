import React from 'react'
import ArtListItem from './ArtListItem'

function ArtList({art, url}) {
    const artList = Array.from(art);
  return (
    <>
        <ul className="art-list">
            {
                artList.map((a) => (
                    <ArtListItem key={a.id} 
                                 title={a.title} 
                                 artist={a.artist} 
                                 imageURL={url.slice(0, url.length-4)+a.imageURL} 
                                 publicationHistory={a.publicationHistory}></ArtListItem>
                ))
            }
        </ul>
    </>
  )
}

export default ArtList