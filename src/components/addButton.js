import React, { useContext, useEffect, useState } from 'react'
import AddFile from './addFile'
import {storage} from './firebase'
import { Items } from './items'

const AddButton = () => {
    const {Add} = useContext(Items);
    return (
        <div onClick={()=>document.getElementById('input').click()} style={{ backgroundColor: 'rgb(77,121,213)', width: '60%', borderRadius: '30px', height: '50px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ fontSize: '24px', color: 'white', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
                Upload File
            </div>
            <input style={{display:"none"}} type="file" id="input" onChange={(e)=>{
                  Add(e);
              }}/>
        </div>

    )
}

export default AddButton