import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Photos() {
    const [photos, setPhotos] = useState([ ])

    useEffect(() => {
        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': '*/*'
        },
        };
        let request = axios.get('http://127.0.0.1:8000/api/photos', config)
            .then(response => {
                console.log(response.data);
                //setPhotos(response.data);
            });
            /*
        return () => {
            request.then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })
        }
        */
     }, []);

    return (
        <>test photos : { photos } </>
    )
}

export default Photos