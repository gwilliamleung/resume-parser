import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import {arrayUnion, doc, updateDoc } from 'firebase/firestore';

const Home = () => {
  const [fileContent, setFileContent] = useState([]);
  const [name, setName] = useState('');
  const [status,setStatus] = useState("");
  const {user} = UserAuth()
  const userData = doc(db,'users',`${user?.email}`)

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      console.log(fileContent)
      setFileContent(event.target.result.split(/\s+/));
    };
    reader.readAsText(file);
  };

  const handleSubmit = async () => {
    if(fileContent.length > 0 && name){
      try{
          await updateDoc(userData, {
            name,
            resume: fileContent,
            user: user.uid
          });
          setStatus("Submission valid");
      }catch(error){
          setStatus("Something went wrong");
      }
    }else{
      setStatus("File or name is empty, please enter")
    }
  };

  useEffect(() => {
    console.log(user)
    console.log(fileContent)
    console.log(user.email)
}, [fileContent])

  return (
    <div className="bg-blue-100 flex flex-wrap justify-center items-center h-screen ">
        <div className="flex flex-col px-28 py-36 bg-white border h-2/3 rounded-lg w-1/2">
        <input onChange={(e)=> setName(e.target.value)}
        className="border px-2" type="text" placeholder="Name"></input>        
        <input className="border px-2" type="file" onChange={handleFileChange} />
        <button className="border px-2" onClick={handleSubmit}>Submit name and Resume</button>
        <p>{status}</p>
        </div>
    </div>
  )
}

export default Home