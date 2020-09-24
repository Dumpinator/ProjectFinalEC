import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Form.css'
import { Grid } from 'gridjs-react';
import "gridjs/dist/theme/mermaid.css";


function Form() {

    const row = () => ['', '', ''];
    const [data, setData] = useState([row()])
    
    useEffect(() => {
        const data = async () => {
            axios.get(`http://localhost:8000/api/form`)
                .then(res => {
                    setData(res.data.slice(0).concat([row()]));
                })
                .catch(err => console.log(err.response))
        }
        data()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <section className="page-content">
                    <Grid
                        data={data}
                        columns={['ID', 'Label', 'Type']}
                    />
            </section>
        </>
    )
}

export default Form