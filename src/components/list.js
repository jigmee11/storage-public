import React, { useState } from 'react'
import ItemList from './itemList'

const List = () => {
    const [files, setFiles] = useState([
        { name: 'File.png' },
        { name: 'File1.png' },
        { name: 'File2.png' }
    ])

    return (
        <div style={{ width: '100%', alignItems: 'flex-start' }}>
            {
                files.map(item => (<ItemList {...item} />))
            }
        </div>
    )
}

export default List