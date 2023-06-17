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
    fontFamily:'Bruno Ace SC, cursive',
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

const titleStyle = {
    fontFamily: 'Lobster, cursive',
    color:'white'
}

const descriptionStyle ={
    height:'200px',
    width:'200px',
    color:'#12355b',
    backgroundColor:'#c9f0ff',
    borderRadius:'15px'

}

const completedStyle ={
    color:'white'
}

const aStyle = {
    width:'100px',
    backgroundColor:'#edddd4',
    borderRadius:'10px'
}

const formStyle ={

}

const buttonStyle ={
    margin:'10px',
    height:'50px',
    width:'200px',
    borderRadius:'10px'
}

function Show(props){
    return(
        <div style={outerDiv}>
        <div style={innerDiv}>
          <h1 style={titleStyle}>{props.note.title}</h1><br/>
          <h2 style={descriptionStyle}>{props.note.description}</h2> <br/>
          <h3 style={completedStyle}>{props.note.completed?'Completed':' Not Completed'}</h3><br/>
         <a style={aStyle} href = {`/notes/edit/${props.note._id}`}> Edit Note</a>

         <form style={formStyle} action={`/notes/${props.note._id}?_method=DELETE`} method="POST">
                <input style={buttonStyle} type="submit" value={`Delete this "${props.note.title}" Note `}/>
            </form>
            <a href="/notes">All Notes</a>
        </div>
        </div>
    )
}

module.exports = Show