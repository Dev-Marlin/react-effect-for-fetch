import React from 'react'

function PublicationHistoryList({publicationHistory}) {
    let index = 0;
  return (
    <>
        <h4>Publication History:</h4>

        <ul>
            {
                publicationHistory.map((p) =>
                (
                    <li key={index++}>{p}</li>
                )
            )}
        </ul>
    </>
  )
}

export default PublicationHistoryList
