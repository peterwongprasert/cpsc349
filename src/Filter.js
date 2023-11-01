import Firestore from './Firestore'
import { useState } from 'react';

function Filter(){

  const [selection, setSelection] = useState()

  const handleSelection = (event) =>{
    setSelection(event.target.value);
    // console.log(event.target.value)
    // console.log(selection);
  };

return(
  <div>
    <div className='filter container o-bg'>
      <div>Sort by: </div>
      <input type='radio' name='filter' onChange={handleSelection} id='all' value='' checked={selection === ''}/>
      <label htmlFor='all'>All</label>
      <input type='radio' name='filter' onChange={handleSelection} id='american' value='american' checked={selection === 'american'}/>
      <label htmlFor='american'>American</label>
      <input type='radio' name='filter' onChange={handleSelection} id='asian' value='asian' checked={selection === 'asian'}/>
      <label htmlFor='asian'>Asian</label>
      <input type='radio' name='filter' onChange={handleSelection} id='italian' value='italian' checked={selection === 'italian'}/>
      <label htmlFor='italian'>Italian</label>
      <input type='radio' name='filter' onChange={handleSelection} id='mexican' value='mexican' checked={selection === 'mexican'}/>
      <label htmlFor='mexican'>Mexican</label>
      <input type='radio' name='filter' onChange={handleSelection} id='plant' value='plant based' checked={selection === 'plant based'}/>
      <label htmlFor='plant'>Plant Based</label>
    </div>
    <Firestore 
      selection={selection}
    />
  </div>
) 
}

export default Filter