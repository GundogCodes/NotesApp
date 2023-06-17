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

const headerStyle ={
    fontFamily: 'Lobster, cursive',
    color:'#edddd4'

}
const formStyle ={
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    margin:'0',
    height:'400px',
    width:'400px',
    borderRadius:'15px',
    backgroundColor:'#197278',
    color:'white'
}


const titleStyle = {
    padding:'10px'
}
const descriptionStyle ={
    padding:'10px'
}

const completedStyle ={
    color:'white'
}
const buttonStyle = {
    margin:'10px',
    height:'50px',
    width:'200px',
    borderRadius:'10px',
    backgroundColor:'rgba(151,204,246)',
    color:'white'
}

const notesStyle = {
    height:'20px',
    width:'100px',
    backgroundColor:'#edddd4',
    borderRadius:'15px',
    marginTop:'5px'
}
function New(props){
    return(
        <div style={outerDiv}>
        <div style={innerDiv}>
                <h1 style={headerStyle}>
                    Create a New Note
                </h1>
            <form style={formStyle} action='/notes' method="POST">
                Title:     <input style={titleStyle} type ='text' name='title'/><br/>
                Description: <input style={descriptionStyle} type ='text' name='description'/><br/>
                Completed: <input style={completedStyle} type = "checkbox" name ="completed"/> <br/>
               <input style={buttonStyle} type="submit" value = "Create Note"/><br/>
            </form>
                <a style={notesStyle} href='/notes'>All Notes</a>
        </div>
        </div>
    )
}

module.exports = New