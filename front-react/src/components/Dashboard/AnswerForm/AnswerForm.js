import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './AnswerForm.css'
import { Grid } from 'gridjs-react';
import "gridjs/dist/theme/mermaid.css";


function AnswerForm() {

    const [allData, setAllData] = useState([])
    //const [errors, setErrors] = useState([])

    useEffect(() => {
        const data = async () => {
            axios.get(`http://localhost:8000/api/answers`)
                .then((res) => setAllData(res.data))
                .catch(err => console.log(err.response))
        }
        data()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>
            <section className="page-content">
                { 
                    allData.map((tab, i) => {
                        let data = Object.entries(tab).slice(0, 20)
                            return <Grid
                                data={data}
                                columns={['ID', 'Response']}
                                key={i}
                            />
                    })
                }
            </section>
        </>
    )
}

export default AnswerForm