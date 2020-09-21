import React from 'react'
import './Chart.css'

function Chart() {

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
                    <article />
                    <article />
                    <article />
                    <article />
                </section>
                <footer className="page-footer">
                    <small>Made with <span>❤</span></small>
                </footer>
            </section>
        </>
    )
}

export default Chart