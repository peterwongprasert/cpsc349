import React, { useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, addDoc} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage';

function Add(){

  const firebaseConfig = {
    apiKey: "AIzaSyAhQinzfK_Y8YTtNP89Q6xiwYTITLy0-78",
    authDomain: "cpsc-349-16ae4.firebaseapp.com",
    projectId: "cpsc-349-16ae4",
    storageBucket: "cpsc-349-16ae4.appspot.com",
    messagingSenderId: "282632731851",
    appId: "1:282632731851:web:5705801943d17189492f4e",
    measurementId: "G-2J89WM117B"
  }
  
  // init firebase app
  initializeApp(firebaseConfig);
  
  //init services
  const db = getFirestore();
  
  //collection ref
  const colRef = collection(db, 'restaurants');

  const storage = getStorage();

  const [image, setImage] = useState(null)
  const [imageURL, setImageURL] = useState(null)

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
  
    if (image) {
      const storageRef = ref(storage, 'images/' + image.name);
      await uploadBytes(storageRef, image);
  
      // Once the image is uploaded, you can do further processing, such as updating the Firestore database.
      let downloadURL = await getDownloadURL(storageRef);
      setImageURL(downloadURL);
    }
  };

  const addForm = document.querySelector('.add-form')
  addForm.addEventListener('submit', (e) => {
    e.preventDefault()

    addDoc(colRef,{
      name: addForm.name.value,
      address: addForm.address.value,
      hours: addForm.hours.value,
      rating: addForm.rating.value,
      price: addForm.price.value,
      description: addForm.description.value,
      type: addForm.type.value,
      pic: imageURL
    })
    .then(() => {
      addForm.reset();
    })
  })

  return(
    <div className='o-bg'>
      <form className='add-form'>
        <label>Add Restaurant</label>
        <div className='fields'>
          Name <input name='name' className='small-input' />
          Address <input name='address' className='small-input' />
          Hours <input name='hours' className='small-input' />
          Rating <input name='rating' className='small-input' />
          Price <input name='price' className='small-input' />
          Description <input name='description' className='textbox'/>
          Type 
          <select name='type' className='small-input'>
            <option value='american'>American</option>
            <option value='asian'>Asian</option>
            <option value='italian'>Italian</option>
            <option value='mexican'>Mexican</option>
            <option value='plant based'>Plant Based</option>
          </select>
          <input type="file" onChange={handleImageChange} />
          <button type='submit'></button>
        </div>
        
      </form>
    </div>
  )
}

export default Add