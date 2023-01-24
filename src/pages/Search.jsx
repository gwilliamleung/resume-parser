import React, { useEffect, useState } from 'react'
import { db } from "../firebase";
import { UserAuth } from '../context/AuthContext'
import {updateDoc, doc, onSnapshot} from 'firebase/firestore'

const Search = () => {
  const {user} = UserAuth()

  useEffect(()=>{
    onSnapshot(doc(db,"users","user"),(doc)=>{
      console.log(doc.data());
    })
  },[user])

  return (
    <div className="bg-blue-100 flex flex-wrap justify-center  items-center w-full h-screen ">
    <div className="flex flex-col px-28 py-36 bg-white border h-2/3 rounded-lg w-1/2">
    </div>
  </div>
  )
}

export default Search