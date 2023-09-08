import React, { useState } from 'react';
import { ref, uploadBytes } from 'firebase/storage'; 
import { storage } from '../firebase';

const UploadFile = () => {

    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleUpload = () => {
        if (file) {
            const storageRef = ref(storage, `images/${file.name}`);
        
            uploadBytes(storageRef, file).then((snapshot) => {
                console.log('Uploaded a file:', snapshot);
                console.log(snapshot.metadata.fullPath);
            }).catch((error) => {
                console.error('Error uploading file:', error);
            });
            
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            
            <button className='btn btn-primary m-5' onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default UploadFile;
