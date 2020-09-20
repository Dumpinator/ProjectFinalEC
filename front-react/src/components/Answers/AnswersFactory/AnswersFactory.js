import React from 'react'
import './AnswersFactory.css'

function AnswersFactory({ question, answer }) {

    const type = question.type;

    if (type === 'B')
        return (
            <div className="form-group">
                <label className="float-right">{question.id} sur 20</label>
                <label className="questions-label" htmlFor="exampleFormControlInput1">{question.label}</label>
                <p>{ answer[`${question.id}`] }</p>
            </div>
        )
    else if (type === 'A') {
        return (
            <div className="form-group">
                <label className="float-right">{question.id} sur 20</label>
                <label className="questions-label" htmlFor="exampleFormControlSelect1">{question.label}</label>
                <p>{answer[`${question.id}`]}</p>
            </div>
        )
    }
    else if (type === 'C')
        return (
            <div className="form-group">
                <label className="float-right">{question.id} sur 20</label>
                <label className="questions-label" htmlFor="exampleFormControlSelect2">{question.label}</label>
                <p>{answer[`${question.id}`]}</p>
            </div>
        )
    else
        return null
}

export default AnswersFactory