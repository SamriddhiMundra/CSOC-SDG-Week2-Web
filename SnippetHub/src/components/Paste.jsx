import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';

export const Paste = () => {
  const pastes = useSelector((state)=>
    state.paste.pastes || []
  )
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = pastes.filter(
    (paste)=>paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  function handleDelete(pasteID){
    dispatch(removeFromPastes(pasteID))
  }

  return (
    <div className="p-6 animate-fadeIn">
      <input
        type="search"
        placeholder="Search here"
        className="mb-4 p-3 rounded-xl border w-full md:w-1/2 shadow-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex flex-col gap-6">
        {filteredData.map((paste) => (
          <div key={paste._id} className="border rounded-xl p-4 shadow-md transition-transform hover:scale-105">
            <h2 className="text-xl font-semibold">{paste.title}</h2>
            <p className="mt-2 text-gray-700 whitespace-pre-wrap">{paste.content}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href={`/?pasteID=${paste._id}`}>
                <button className="bg-yellow-400 px-4 py-1 rounded-full hover:bg-yellow-500">Edit</button>
              </a>
              <a href={`/pastes/${paste._id}`}>
                <button className="bg-blue-500 px-4 py-1 rounded-full hover:bg-blue-600 text-white">View</button>
              </a>
              <button onClick={() => handleDelete(paste._id)} className="bg-red-500 px-4 py-1 rounded-full hover:bg-red-600 text-white">Delete</button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(paste.content);
                  toast.success("Copied to clipboard");
                }}
                className="bg-green-500 px-4 py-1 rounded-full hover:bg-green-600 text-white"
              >
                Copy
              </button>
              <button
  onClick={() => {
    const shareURL = `${window.location.origin}/?pasteID=${paste._id}`;
    navigator.clipboard.writeText(shareURL);
    toast.success("Share link copied!");
  }}
  className="bg-purple-500 px-4 py-1 rounded-full hover:bg-purple-600 text-white"
>
  Share
</button>

            </div>
            <p className="text-xs text-gray-500 mt-2">Created at: {new Date(paste.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

   