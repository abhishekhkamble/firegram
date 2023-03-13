import React, { useState } from "react";
import axios from "axios";

function UploadForm({ onImageUpload }) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const changeHandler = (event) => {
    let selected = event.target.files[0];
    console.log(selected.name);

    const types = ["image/png", "image/jpeg"];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
      setUploadProgress(0);

      // upload api
      const formdata = new FormData();
      formdata.append("", selected, selected.name);

      axios
        .post("http://localhost:9090/api/v1/upload", formdata, {
          onUploadProgress: (progressEvent) => {
            setUploadProgress(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            );
          },
        })
        .then((response) => {
          console.log(response);
          onImageUpload(response.data.result);
          setTimeout(() => {
            setUploadProgress(0);
          }, 2000);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  };

  return (
    <form>
      <label>
        <input
          className="label"
          type="file"
          onChange={changeHandler}
          placeholder="+"
        />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {uploadProgress > 0 && (
          <progress value={uploadProgress} max="100">
            {uploadProgress}%
          </progress>
        )}
      </div>
    </form>
  );
}

export default UploadForm;
