import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.find((p) => p._id === id);

  if (!paste) return <div className="p-4 text-red-500">Paste not found.</div>;

  return (
    <div className="p-6 flex flex-col gap-4 items-center animate-fadeIn">
      <input
        className="p-3 rounded-xl shadow-md w-full md:w-1/2 border bg-gray-100"
        type="text"
        value={paste.title}
        disabled
      />
      <textarea
        className="p-4 rounded-xl shadow-md w-full md:w-1/2 border h-60 resize-none bg-gray-100"
        value={paste.content}
        disabled
      />
      <p className="text-gray-500 text-sm">Created at: {new Date(paste.createdAt).toLocaleString()}</p>
    </div>
  );
};
