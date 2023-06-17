const React = require('react')

const outerDiv ={
    height:'600px',
    width:'600px',
    display:'flex',
    flexDirection:'column',
    position:'relative',
    margin:'auto'

}

const innerDiv = {
    height:'600px',
    width:'600px',
    backgroundColor:'#f03a47',
    display:'flex',
    flexDirection:'column',
    textAlign:'center',
    alignItems: 'center',
    justifyContent:'flex-start',
    borderRadius:'15px'

}

const headerStyle ={
    fontFamily: 'Lobster, cursive',
    color:'#edddd4'

}

const formStyle={
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    margin:'0',
    height:'400px',
    width:'400px',
    borderRadius:'15px',
    backgroundColor:'#c9f0ff',
    color:'green'
}
const buttonStyle ={
    margin:'10px',
    height:'50px',
    width:'200px',
    borderRadius:'10px',
    backgroundColor:'rgba(151,204,246)',
    color:'white'
}

const notesLinkStyle ={
    height:'20px',
    width:'100px',
    backgroundColor:'#edddd4',
    borderRadius:'15px',
    marginTop:'5px'
}

const titleStyle = {
    padding:'10px',
    fontSize:'25px',
    borderRadius:'15px'
}
const descriptionStyle ={
    padding:'10px',
    fontSize:'25px',
    borderRadius:'15px'
}

function Edit(props){
    return(
        <div style={outerDiv}>
        <div style={innerDiv}>
            <h1 style={headerStyle}>Edit Note
             <br/>
            </h1>
            <form style={formStyle} action={`/notes/${props.note._id}?_method=PUT`} method="POST">
                Title:<input style={titleStyle} type = "text" name ="title" defaultValue={props.note.title}/> <br/>
                Description:<input style={descriptionStyle} type = "text" name ="description" defaultValue={props.note.description}/> <br/>
                Completed: {props.note.completed?<input type = "checkbox" name ="completed" defaultChecked/>:<input 
                type='checkbox' name='completed'/>} <br/>
                <input style={buttonStyle} type="submit" value = "Update Note"/>
            </form>
            <a style={notesLinkStyle} href="/notes">All Notes</a>
        </div>
        </div>
    )
}

module.exports = Edit