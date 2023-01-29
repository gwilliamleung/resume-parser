import React, { useEffect, useState } from 'react'
import { db } from "../firebase";
import { UserAuth } from '../context/AuthContext'
import {updateDoc, doc, onSnapshot} from 'firebase/firestore'

const Search = () => {
  // const {user, firestore} = UserAuth()
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = firestore.collection('collectionName').doc('documentId')
  //     .onSnapshot(doc => {
  //       setData(doc.data());
  //       console.log(doc.data());
  //     });
  //   return unsubscribe;
  // }, []);

  return (
    <div className="bg-blue-100 flex flex-wrap justify-center  items-center w-full h-screen ">
    <div className="flex flex-col px-28 py-36 bg-white border h-2/3 rounded-lg w-1/2">
    {/* {data && <p>{data.fieldName}</p>} */}

    </div>
  </div>
  )
}

export default Search