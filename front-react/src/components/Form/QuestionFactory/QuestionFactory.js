import React from 'react'
import './QuestionFactory.css'

function QuestionFactory({question, handleChangeValue}) {
  
    const questiontype = question.type;
   
    if (questiontype === 'b')
        return (
            <div className="form-group">
                <label className="float-right">{ question.id } sur 20</label>
                <label className="questions-text" htmlFor="exampleFormControlInput1">{ question.text }</label>
                <input onChange={(e) => handleChangeValue(e)} type="text" className="form-control" id={ question.id } name={ question.id } placeholder=""/>
            </div>
        )
    else if (questiontype === 'a') {
        return (
            <div className="form-group">
                <label className="float-right">{ question.id } sur 20</label>
                <label className="questions-text" htmlFor="exampleFormControlSelect1">{ question.text }</label>
                <select size={3} onChange={(e) => handleChangeValue(e)} className="form-control" id={ question.id }>
                    { question.multipleChoice?.map( (item, i) => 
                        <option key={i} value={i+1}>{ item }</option> 
                    ) }
                </select>
            </div>
        )
    }
    else if (questiontype === 'c')
        return (
            <div className="form-group">
                <label className="float-right">{ question.id } sur 20</label>
                <label className="questions-text" htmlFor="exampleFormControlSelect2">{ question.text }</label>
                <select size={5} onChange={(e) => handleChangeValue(e)} className="form-control" id={ question.id }
                >
                    { question.multipleChoice?.map( (item, i) => <option key={i} value={i+1}>{ item }</option> ) }
                </select>
            </div>
        )
    else
        return null
}

export default QuestionFactory