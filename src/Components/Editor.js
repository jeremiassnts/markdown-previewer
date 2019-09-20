import React from 'react'
import { useGlobal } from 'reactn'
import Tab from './Tab'

export default function Editor() {
    const [text, setText] = useGlobal("text")
    return (
        <div className="area">
            <Tab tabName='Editor' />
            <textarea id='editor' onChange={e => setText(e.target.value)}>{text}</textarea>
        </div>
    )
}
