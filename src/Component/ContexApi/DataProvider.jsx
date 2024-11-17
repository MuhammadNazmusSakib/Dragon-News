import React, { useState } from 'react'
import { Contex } from './Contex'

const DataProvider = ({children}) => {

    const [Categories, setCategories] = useState([])

    const contexApiData = {
        Categories, setCategories
    }

  return (
    <Contex.Provider value={{contexApiData}}>
        {children}
    </Contex.Provider>
  )
}

export default DataProvider