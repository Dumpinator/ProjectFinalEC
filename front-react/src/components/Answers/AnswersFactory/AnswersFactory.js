import React from 'react'
import './AnswersFactory.css'

function AnswersFactory({ question, answer }) {
        return (
            <div className="answers-row">
                <div className="row">
                    <div className="col-10 test">{question.label}</div>
                    <div className="col-2">{question.id} sur 20</div>
                </div>
                <div className="row">
                    <div className="col">{ answer[`${question.id}`] }</div>
                </div>
            </div>
        )
}

export default AnswersFactory