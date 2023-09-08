import React, { useState } from 'react';
import { ref, uploadBytes, deleteObject } from 'firebase/storage';
import { storage } from '../firebase';

const UpdateFile = () => {
    const [file, setFile] = useState(null);
    const [updateSuccess, setUpdateSuccess] = useState(false);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleUpdateFile = () => {
        if (file) {
            // existing file path
            const storageRef = ref(storage,'Enter File Name of Your Firebase');

            // Deleting Method
            deleteObject(storageRef)
                .then(() => {
                     // New file path
                    const newStorageRef = ref(storage,`${file.name}`);
                    uploadBytes(newStorageRef, file)
                        .then(() => {
                            setUpdateSuccess(true);
                            console.log('File updated successfully.');
                        })
                        .catch((error) => {
                            console.error('Error uploading file:', error);
                        });
                })
                .catch((error) => {
                    console.error('Error deleting existing file:', error);
                });
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button className='btn btn-success m-5' onClick={handleUpdateFile}>Update File</button>
            {updateSuccess && (
                <p>File updated successfully.</p>
            )}
        </div>
    );
};

export default UpdateFile;
