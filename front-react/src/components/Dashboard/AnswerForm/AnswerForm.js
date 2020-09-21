import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './AnswerForm.css'
import { Grid } from 'gridjs-react';
import "gridjs/dist/theme/mermaid.css";


function AnswerForm() {

    const row = () => ['', ''];
    const [data, setData] = useState([row()])
    const [allData, setAllData] = useState([])
    //const [errors, setErrors] = useState([])

    useEffect(() => {
        const data = async () => {
            axios.get(`http://localhost:8000/api/answers`)
                .then((res) => {
                    
                    setAllData(res.data)
                    setData(Object.values(allData).map( item => item.slice(0).concat([row()])))

                    //console.log(Object.entries(res.data[0]));
                    /*
                    for (let [key, value, i] of Object.entries(res.data[0])) {
                        console.log(`${key}: ${value}`);
                    }
                    */
                })
                .catch(err => console.log(err.response))
        }
        data()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        //console.log(allData),
        <>
            <section className="page-content">
                { 
                    allData.map((tab, i) => {
                        return <Grid
                            data={data}
                            columns={['ID', 'Response']}
                            key={i}
                        />
                    }
                    )
                 }
            </section>
        </>
    )
}

export default AnswerForm