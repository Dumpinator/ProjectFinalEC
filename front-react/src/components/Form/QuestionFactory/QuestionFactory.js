import React from 'react'
import './QuestionFactory.css'

function QuestionFactory({question}) {

    const questiontype = question.type;

    if (questiontype === 'b')
        return (
            <div className="form-group">
                <label className="float-right">{ question.id } sur 20</label>
                <label className="questions-text" htmlFor="exampleFormControlInput1">{ question.text }</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder=""/>
            </div>
        )
    else if (questiontype === 'a')
        return (
            <div className="form-group">
                <label className="float-right">{ question.id } sur 20</label>
                <label className="questions-text" htmlFor="exampleFormControlSelect1">{ question.text }</label>
                <select className="form-control" id="exampleFormControlSelect1">
                    { question.multipleChoice?.map( (item, i) =>  <option key={i}>{ item }</option> ) }
                </select>
            </div>
        )
    else if (questiontype === 'c')
        return (
            <div className="form-group">
                <label className="float-right">{ question.id } sur 20</label>
                <label className="questions-text" htmlFor="exampleFormControlSelect2">{ question.text }</label>
                <select size={5} className="form-control" id="exampleFormControlSelect2">
                    { question.multipleChoice?.map( (item, i) => <option key={i}>{ item }</option> ) }
                </select>
            </div>
        )
    else
        return null
}

export default QuestionFactory