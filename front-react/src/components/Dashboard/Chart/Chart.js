import React, { useState, useEffect } from 'react'
import { Doughnut, Radar } from 'react-chartjs-2'
import axios from 'axios'
import './Chart.css'

function Chart() {
    
    const [chart1Data, setChart1Data] = useState([1, 1, 1, 1, 1])
    const [chart2Data, setChart2Data] = useState([1, 1, 1, 1, 1])
    const [chart3Data, setChart3Data] = useState([1, 1, 1, 1, 1])
    const [chart4Data, setChart4Data] = useState([1, 1, 1, 1, 1])

    const chart1 = {
        labels: ['Occulus Rift', 'HTC Vive', 'Windows Mixed Reality', 'PSVR'],
        datasets: [{
            label: '# of Votes',
            data: chart1Data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderWidth: 0
        }],
        options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
        }
    }

    const chart2 = {
        labels: ['SteamVR', 'Occulus store', 'Viveport', 'Playstation VR', 'Google Play', 'Windows store'],
        datasets: [{
            label: '# of Votes',
            data: chart2Data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 0
        }],
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    }

    const chart3 = {
        labels: ['Regarder des émissions TV en direct', 'Regarder des films', 'Jouer en solo', 'Jouer en team'],
        datasets: [{
            label: '# of Votes',
            data: chart3Data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderWidth: 0
        }],
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    }

    const chart4 = {
        labels: [
            "Qualité Image",
            "Confort Interface",
            "Connection Réseau",
            "Graphismes 3D",
            "Qualité Audio"
        ],
        datasets: [
            {
                label: "1 to 5 Ratings",
                backgroundColor: "rgba(151,187,205,0.2)",
                pointBackgroundColor: "rgba(151,187,205,1)",
                hoverPointBackgroundColor: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: chart4Data
            }
        ]
    }

    useEffect(() => {
        const fetchData = async () => {
            axios.get(`http://localhost:8000/api/charts`)
                .then(res => {
                    //console.log('GET : ', res.data)

                    let q6_1 = 0, q6_2 = 0, q6_3 = 0, q6_4 = 0
                    let q7_1 = 0, q7_2 = 0, q7_3 = 0, q7_4 = 0, q7_5 = 0, q7_6 = 0
                    let q10_1 = 0, q10_2 = 0, q10_3 = 0, q10_4 = 0

                    let q11 = []
                    let q12 = []
                    let q13 = []
                    let q14 = []
                    let q15 = []
                    
                    function average(nums) {
                        return nums.reduce((a, b) => (a + b)) / nums.length;
                    }

                    res.data.forEach((item) => {

                        switch (item['6']) {
                            case 'Occulus Rift/s':
                                q6_1++
                                break;
                            case 'HTC Vive':
                                q6_2++
                                break;
                            case 'Windows Mixed Reality':
                                q6_3++
                                break;
                            case 'PSVR':
                                q6_4++
                                break;
                            default:
                                break;
                        }
                        switch (item['7']) {
                            case 'SteamVR':
                                q7_1++
                                break;
                            case 'Occulus store':
                                q7_2++
                                break;
                            case 'Viveport':
                                q7_3++
                                break;
                            case 'Playstation VR':
                                q7_4++
                                break;
                            case 'Google Play':
                                q7_5++
                                break;
                            case 'Windows store':
                                q7_6++
                                break;
                            default:
                                break;
                        }
                        switch (item['10']) {
                            case 'Regarder des émissions TV en direct':
                                q10_1++
                                break;
                            case 'Regarder des films':
                                q10_2++
                                break;
                            case 'Jouer en solo':
                                q10_3++
                                break;
                            case 'Jouer en team':
                                q10_4++
                                break;
                            default:
                                break;
                        }
                        q11.push(parseInt(item['11']))
                        q12.push(parseInt(item['12']))
                        q13.push(parseInt(item['13']))
                        q14.push(parseInt(item['14']))
                        q15.push(parseInt(item['15']))
                    })
                    let avr11 = average(q11)
                    let avr12 = average(q12)
                    let avr13 = average(q13)
                    let avr14 = average(q14)
                    let avr15 = average(q15)

                    setChart1Data([q6_1, q6_2, q6_3, q6_4 ])
                    setChart2Data([q7_1, q7_2, q7_3, q7_4, q7_5, q7_6])
                    setChart3Data([q10_1, q10_2, q10_3, q10_4])
                    setChart4Data([avr11, avr12, avr13, avr14, avr15])
                })
                .catch(err => console.log(err.response))
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <section className="page-content">
                <section className="search-and-user">
                    <div className="admin-profile">
                        <span className="greeting">Hello admin</span>
                        <div className="notifications">
                        </div>
                    </div>
                </section>
                <section className="grid">
                    <div className="test">
                        <Doughnut data={chart1} width={200} height={300} options={{ maintainAspectRatio: false }} />
                    </div>
                    <div className="test">
                        <Doughnut data={chart2} width={200} height={300} options={{ maintainAspectRatio: false }} />
                    </div>
                    <div className="test">
                        <Doughnut data={chart3} width={200} height={300} options={{ maintainAspectRatio: false }} />
                    </div>
                    <div className="test">
                        <Radar data={chart4} width={200} height={300} options={{ maintainAspectRatio: false }} />
                    </div>
                </section>
                <footer className="page-footer">
                    <small>Made with <span>❤</span></small>
                </footer>
            </section>
        </>
    )
}

export default Chart