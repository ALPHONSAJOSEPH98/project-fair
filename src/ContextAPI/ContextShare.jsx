import React, {  createContext,  useState } from 'react'

export const addProjectContextResponse= createContext()
function ContextShare({children}) {
    // create ccontext 
    const [addProjectRes ,setAddProjectRes]=useState('')

  return (
    <div>
        <addProjectContextResponse.Provider value={{addProjectRes ,setAddProjectRes}} >
         {children}
        </addProjectContextResponse.Provider>
    </div>
  )
}

export default ContextShare