import React from 'react'
import './AnswersFactory.css'

function AnswersFactory({ answers }) {
  
    const answerstype = answers.type;
   
    if (answerstype === 'b')
        return (
            <div className="form-group">
                <label className="float-right">{ answers.id } sur 20</label>
                <label className="questions-text" htmlFor="exampleFormControlInput1">{ answers.text }</label>
                
            </div>
        )
    else if (answerstype === 'a') {
        return (
            <div className="form-group">
                <label className="float-right">{ answers.id } sur 20</label>
                <label className="questions-text" htmlFor="exampleFormControlSelect1">{ answers.text }</label>
                
            </div>
        )
    }
    else if (answerstype === 'c')
        return (
            <div className="form-group">
                <label className="float-right">{ answers.id } sur 20</label>
                <label className="questions-text" htmlFor="exampleFormControlSelect2">{ answers.text }</label>
                
            </div>
        )
    else
        return null
}

export default AnswersFactory