import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';
let savedPastes = [];

try{
const data = localStorage.getItem("pastes");
savedPastes = data? JSON.parse(data):[]
}
catch{
console.error("Invalid json in local storge")
localStorage.removeItem("pastes")
}
const initialState = {
  pastes: savedPastes,

}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes) )
      toast.success("Paste created successfully!")
      
    },
    updateToPastes: (state, action) => {
      const paste = action.payload;
      const idx= state.pastes.findIndex((item)=>
        item._id === paste._id
      )
      if(idx>=0){
        state.pastes[idx] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes) )
        toast.success("Paste updated successfully")
      }
    },
    resetAllPastes: (state, action) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
    },
    removeFromPastes: (state, action) =>{
      const pasteID = action.payload;

      //console.log(pasteID);
      //console.log(state.pastes)
      const idx= state.pastes.findIndex((item)=>
        item._id === pasteID
      )

      if(idx>=0){
        state.pastes.splice(idx, 1)
        localStorage.setItem("pastes", JSON.stringify(state.pastes) )
        toast.success("Deleted successfully")
      }

    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer