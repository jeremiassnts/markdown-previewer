import React from 'react'
import { useGlobal } from 'reactn'
import Tab from './Tab'
import marked from 'marked'

export default function Preview() {
    const [text] = useGlobal("text")
    return (
        <div className='area'>
            <Tab id='previewTab' tabName='Previewer' />
            <div id='preview' dangerouslySetInnerHTML={{ __html: marked(text) }} />
        </div>
    )
}
