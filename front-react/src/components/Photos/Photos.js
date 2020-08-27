import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Photos() {
    const [state, setState] = useState([])
    const [hasError, setHasError] = useState (false)



    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/photos')
            .then(res => setState(res.data))
            .catch(err => {
                console.log(err)
                setHasError (true)
            })
    }, [])

     /*
     useEffect( () => {
        const fetchData = async () => {
            const result = await axios.get('http://127.0.0.1:8000/api/photos')
            console.log(result.data);
            setState(result.data)
        };   
        fetchData()
     }, [])
     */
    console.log(state);
    return (
        <ul>
            { hasError ? <div>Error occured.</div> : state.map(item => (
                <li key={item.id}>
                    <a href={item.url}>{item.title} : {item.description}</a>
                </li>
              ))
            }
        </ul>
    )
}

export default Photos