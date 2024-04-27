import React,{ useState } from "react"
function Form(props){
    const [text,setText] =useState("")
    const capBtn =()=>{
        const txt= text
        setText(txt.toUpperCase())
    }
    const smallBtn =()=>{
        const txt=text
        setText(txt.toLowerCase())
    }
    const onChange =(e)=>{
        setText(e.target.value)
    }
    const clearBtn =()=>{
        setText("")
    }
    const copyBtn =()=>{
        navigator.clipboard.writeText(text)
    }
    const xtraspaceBtn =()=>{
        const txt = text.replace(/\s+/g," ")
        setText(txt)
    }
    return(
        <>
        <h1 className={`text-${props.mode==="light"?"dark":"light"}`}>{props.heading}</h1>
            <div className="mb-3">
            <textarea className={`form-control mb-3 area bg-${props.mode==="light"?"light":"dark"} text-${props.mode==="light"?"dark":"light"}`} id="Textarea" value={text} onChange={onChange} rows="8" placeholder="Enter text Here"></textarea>
            </div>
            <div className="grid">
            <button type="button"className="btn btn-primary g-col-1 mx-2 my-1" onClick={capBtn}>Capitalize</button>
            <button type="button"className="btn btn-warning g-col-1 mx-2 my-1" onClick={smallBtn}>Smallalize</button>
            <button type="button"className="btn btn-secondary g-col-1 mx-2 my-1" onClick={clearBtn}>Clear Text</button>
            <button type="button"className="btn btn-secondary g-col-1 mx-2 my-1" onClick={copyBtn}>Copy Text</button>
            <button type="button"className="btn btn-info g-col-2 mx-2 my-1" onClick={xtraspaceBtn}>Remove Extra Spaces</button>

            </div>
            <div className={`container my-3 text-${props.mode==="light"?"dark":"light"}`}>
            <h2>Your Text Summary</h2>
            <p>{text.length>0?text.split(" ").length:"0"} words & {text.length} characters</p>
            </div>
            <div className={`container my-3 text-${props.mode==="light"?"dark":"light"}`}>
            <h2>Preview</h2>
            <p>{text}</p>
            </div>
        </>
    )
}
// Form.propTypes={
//     heading:PropTypes.string.isRequired
//   }
export default Form