import React from 'react'
import { FaBookmark } from "react-icons/fa";

export default function Tab({ id, tabName }) {
    return (
        <div id={id} className='tab'>
            <FaBookmark />
            <div>{tabName}</div>
        </div>
    )
}
