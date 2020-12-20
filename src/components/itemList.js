import { Items } from './items'
import React, { useContext, useEffect, useState } from 'react'

import fileIcon from './../file.png'

const ItemList = ({ name, date, url}) => {
    const {Delete} = useContext(Items);
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '50px', padding: '10px', margin: '30px', backgroundColor: 'white', borderRadius: '5px' }}>
            <a href={url} target="blank" style={{textDecoration: "none"}}>
                <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'white', borderRadius: '5px'}}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={fileIcon} height={'30px'} width={'30px'} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginLeft: '10px' }}>
                        <div style={{ color: 'rgba(0,0,0,.72)', fontSize: '16px' }}> {name} </div>
                        <div style={{ color: 'rgba(0,0,0,.54)', fontSize: '14px' }}> {date} </div>
                    </div>
                </div>
            </a>
            <div style={{justifySelf: "flex-end"}} onClick={()=>Delete(name)}><button>X</button></div>
        </div>
    )
}

export default ItemList