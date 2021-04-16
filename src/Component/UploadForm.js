import React, { useState } from 'react'
import ProgressBar from './ProgressBar';

function UploadForm() {
const [file , setFile] = useState(null)
const [error, setError] = useState(null)

const changeHandler = (event) =>{
    let selected  = event.target.files[0];

    const types = ['image/png' , 'image/jpeg']

    if(selected && types.includes(selected.type)){
        setFile(selected);
        setError('')
    }
    else{
        setFile(null);
        setError("Please select an image file (png or jpeg)")
    }
}

    return (
        <form>
            <label>
            <input className="label" type="file" onChange={changeHandler} placeholder="+"/>
            <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    )
}

export default UploadForm
