import React from 'react'
import './QuestionFactory.css'

function QuestionFactory({question, handleChangeValue}) {

    const type = question.type;
    const option = question.option?.split(',')

    if (type === 'B')
        return (
            <>
                <div className="form-group">
                    <label className="float-right">{ question.id } sur 20</label>
                    <label className="questions-label" htmlFor="exampleFormControlInput1">{ question.label }</label>
                    <input onChange={(e) => handleChangeValue(e)} type={question.id === 2 ? 'number' : 'text'} className="form-control" id={question.id} name={question.id} required/>
                </div>
                <hr className="my-4" style={{ backgroundColor: '#0093E9' }}/>
            </>
        )
    else if (type === 'A') {
        return (
            <>
                <div className="form-group">
                    <label className="float-right">{ question.id } sur 20</label>
                    <label className="questions-label" htmlFor="exampleFormControlSelect1">{ question.label }</label>
                    <select size={3} onChange={(e) => handleChangeValue(e)} className="form-control" id={question.id} required>
                        { option?.map( (item, i) => <option key={i} value={ item }>{ item }</option> ) }
                    </select>
                </div>
                <hr className="my-4" style={{ backgroundColor: '#0093E9' }} />
            </>
        )
    }
    else if (type === 'C')
        return (
            <>
                <div className="form-group">
                    <label className="float-right">{ question.id } sur 20</label>
                    <label className="questions-label" htmlFor="exampleFormControlSelect2">{ question.label }</label>
                    <select size={5} onChange={(e) => handleChangeValue(e)} className="form-control" id={question.id} required>
                        { option?.map( (item, i) => <option key={i} value={i+1}>{ item }</option> ) }
                    </select>
                </div>
                <hr className="my-4" style={{ backgroundColor: '#0093E9' }} />
            </>
        )
    else
        return null
}

export default QuestionFactory