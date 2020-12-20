import { Items } from './items'
import React, { useContext, useEffect, useState } from 'react'

const AddFile = () => {
      const {Add} = useContext(Items);
      return(
            <input type="file" onChange={(e)=>{
                  Add(e);
              }}/>
      );
}
export default AddFile;