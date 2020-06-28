import React from 'react';
import useFetchGif from '../hooks/useFetchGif'
 import GifGridItem from './GifGridItem';
// import {getGifs} from '../helpes/getGifs'



const GifGrid = ({category}) => {

    const {data:images,loading} = useFetchGif(category)

   // const [images, setImages] = useState([])

    // useEffect(() =>{
    //     getGifs(category).then(setImages)
    // },[category])

   
  
     
    return (
        <>   
         
            <h3>{category}</h3>
         
        <div className="card-grid ">
            {loading && <p className ="animate__animated animate__flash">Loading</p>}
          {
              images.map( img => 
                <GifGridItem 
                  key = {img.id}
                  {...img}
                 //img={img}
                />
              )}
          </div>
        </>
    )
}

export default GifGrid
