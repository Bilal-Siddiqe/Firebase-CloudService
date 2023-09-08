import React, { useState } from 'react';
import { deleteObject, ref } from 'firebase/storage'; // Import deleteObject and ref from firebase/storage
import { storage } from '../firebase';

const DeleteFile = () => {
    const [deleteSuccess, setDeleteSuccess] = useState(false);

    const handleDeleteFile = () => {
        const storageRef = ref(storage, 'Enter File Name of Your Firebase'); // Adjust the file path accordingly

        deleteObject(storageRef)
            .then(() => {
                setDeleteSuccess(true);
                console.log('File deleted successfully.');
            })
            .catch((error) => {
                console.error('Error deleting file:', error);
            });
    };

    return (
        <div>
            <button className='btn btn-danger m-5' onClick={handleDeleteFile}>Delete File</button>
            {deleteSuccess && (
                <p>File deleted successfully.</p>
            )}
        </div>
    );
};

export default DeleteFile;
