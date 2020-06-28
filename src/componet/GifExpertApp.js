import React,{ useState} from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['one punch'])

    // const handleAdd =() =>{
    //     setCategories([...categories, 'hunter x hunter'])
        
    // }

  

    return ( 
        <>
        <h1>GifExpertApp</h1>

        <AddCategory 
         
          setCategories = {setCategories}
        />
        
        <hr/>

          <ol>
              {categories.map( category =>(
                  <GifGrid  key={category} category={category} />))
              
           
              }
             
      </ol>
        </>
     );
}
 
export default GifExpertApp;