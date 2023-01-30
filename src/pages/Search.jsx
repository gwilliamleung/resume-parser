import React, { useEffect, useState } from 'react'
import { db } from "../firebase";
import { UserAuth } from '../context/AuthContext'
import {onSnapshot, query, collection} from 'firebase/firestore'
import { AiFillEye } from 'react-icons/ai'

const Search = () => {
  const [allResume,setallResume] = useState([])
  const [searchTerm, setSearchterm] = useState('')
  const [viewTextContent, setViewTextContent] = useState(false);

  const { user } = UserAuth();

  // const fetchData = () => {
  //   onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
  //     setallResume(doc.data()?.individualResume)
  //     console.log(allResume)
  //   });
  // }
  
  const fetchData = () => {
    const q = query(collection(db, 'users'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let allResume = [];
      querySnapshot.forEach((doc) => {
        allResume.push({ ...doc.data(), id: doc.id });
      });
      setallResume(allResume);
      console.log(allResume)
    });
    return () => unsubscribe();
  }

  useEffect(() => {
    fetchData()
  }, [user?.email]);

  function test() {
    Object.values(allResume).map(resume => {
      console.log(resume.individualResume.resume);
      console.log(resume.individualResume.username);
    });
  }

  const viewText = () => {
    setViewTextContent(!viewTextContent);
  }

  return (
    <div className="bg-blue-100 flex flex-wrap justify-center  items-center w-full h-screen ">
    <div className="flex flex-col px-28 py-12 bg-white border h-2/3 rounded-lg w-1/2">
    <div className="flex justify-between">
      {/* <button onClick={test}>Test</button> */}
      <h1>Search for Keywords and if the person has said keyword, their names will show up</h1>
      <button onClick={viewText}><AiFillEye/></button>
    </div>
    <input className="border"type="text" placeholder="search" onChange={event => {setSearchterm(event.target.value)}}/>
    {Object.values(allResume).filter((val)=>{
      if (searchTerm == ""){
        return val
      } else if (val.individualResume.resume.includes(searchTerm.toLowerCase())){
        return val
      }
    }).map(val => {
      return(
        <div key={val.id}>
        <div className="flex justify-between">
          <p className="bg-slate-100">{val.individualResume.username}</p>
        </div>
          { viewTextContent ? <div className="bg-slate-200 py-1">{val.individualResume.resume}</div> : <div></div>}
        </div>

      );
    })}
    </div>
  </div>
  )
}

export default Search