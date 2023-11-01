import Card from './Card'
import { initializeApp } from 'firebase/app'
import React, { useState, useEffect } from 'react';
import {
  getFirestore, collection, getDocs, query, where
} from 'firebase/firestore'

function Firestore({ selection }) {
// console.log(selection)

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
let q = selection ? query(colRef, where('type', '==', selection)) : colRef;

// console.log(q)
// const q = query(colRef, where('type', '==', selection))

// let restaurants = []
// getDocs(colRef)
//   .then((snapshot) => {
//     snapshot.docs.forEach((doc) => {
//       // console.log(doc.data())
//       restaurants.push({ ...doc.data(), id: doc.id})
//       // console.log(restaurants[0].name)
//     })
//   })
// console.log(restaurants)

const [restaurants, setRestaurants] = useState([]);
  
  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log('rendered')
        const snapshot = await getDocs(q);
        const restaurantData = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setRestaurants(restaurantData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
  
    fetchData();
  }, [selection]);

  // console.log(restaurants)

return (

    <div className='list-container'>
        {/* {console.log('in return: ' + restaurants)} */}
        { 
          restaurants.map((place) => (
            <Card 
              key={place.id}
              name={place.name}
              rating={place.rating}
              hours={place.hours}
              address={place.address}
              description={place.description}
              price={place.price}
              pic={place.pic}
            />
          ))
        }
    </div>

  );
}

export default Firestore;

