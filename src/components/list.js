import React, { useEffect, useState, useContext } from 'react'
import ItemList from './itemList'
import {firebase} from './firebase'
import {storage} from './firebase'
import { Items } from './items'

const List = () => {
    const {file} = useContext(Items);
    const {send} = useContext(Items);
    return (
        <div style={{ width: '100%', alignItems: 'flex-start', overflow: 'auto' }}>
            <div style={{display: send.sending, opacity: '0.3'}}>{send.value}</div>
            {
                file.map(item => (<ItemList name={item[2]} date={item[0]} url={item[1]}/>))
            }
        </div>
    )
}

export default List