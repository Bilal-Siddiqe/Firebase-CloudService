import React, { useState } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../firebase';

const DownloadFile = () => {
    const [downloadUrl, setDownloadUrl] = useState(null);

    const handleDownloadUrl = () => {
        const storageRef = ref(storage, 'Enter File Name of Your Firebase');

        getDownloadURL(storageRef)
            .then((url) => {
                setDownloadUrl(url);
                console.log('File available at:', url);
            })
            .catch((error) => {
                console.error('Error getting download URL:', error);
            });
    };

    return (
        <div>
            <button className='btn btn-secondary m-5' onClick={handleDownloadUrl}>Get Download URL</button>
            {downloadUrl && (
                <>
                    <center>
                        <p>Wait Image is Loading....</p>
                        <img src={downloadUrl} width={200} alt="" />
                        {/* <video controls width="400">
                        <source src={downloadUrl} type="video/mp4" controls />
                        Your browser does not support the video tag.
                    </video> */}
                    </center>
                </>
            )}
        </div>
    );
};

export default DownloadFile;
