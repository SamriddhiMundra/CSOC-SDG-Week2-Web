import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { updateToPastes, addToPastes } from '../redux/pasteSlice';

export const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams('');
  const pasteID = searchParams.get("pasteID");
  const dispatch = useDispatch();
  const allPastes = useSelector((state)=>state.paste.pastes);
  useEffect(() => {
    if(pasteID){
      const paste = allPastes.find((p)=>p._id === pasteID);
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteID, allPastes])
  

  function createPaste(){  //to create paste and send it to slice
    const paste = {
      title: title,
      content: value,
      _id: pasteID || Date.now().toString(), 
      createdAt: new Date().toISOString()

    }

    if(pasteID){
      //update krna hoga
      dispatch(updateToPastes(paste));
    }
    else{
      //create
      dispatch(addToPastes(paste));
    }
    //clean afte creation and updation
    setTitle('');
    setValue('');
    setSearchParams({});
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl w-full max-w-2xl space-y-6">
        <input
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full h-60 p-3 rounded-xl border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter text here"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition-all font-semibold"
          onClick={createPaste}
        >
          {pasteID ? "Update Paste" : "Create My Paste"}
        </button>
      </div>
    </div>
  )
}

