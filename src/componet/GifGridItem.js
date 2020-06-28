import React from 'react'

const GifGridItem = ({url,title}) => {
    
    
    return (
        <div className= "card animate__animated animate__bounce">
          <img src = {url} alt = {title} />
          <p animate__animated animate__bounce>{title}</p>
            
        </div>
    )
}

export default GifGridItem
