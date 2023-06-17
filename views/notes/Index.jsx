const React = require('react')

const outerDiv = {
    height:'600px',
    width:'600px',
    maxWidth:'600px',
    borderRadius:'15px',
    display:'flex',
    flexDirection:'column',
    position:'relative',
    margin:'auto'

}

const divStyle = {
    fontFamily:'Bruno Ace, cursive',
    backgroundColor:'#f03a47',
    display:'flex',
    flexDirection:'column',
    textAlign:'center',
    alignItems: 'center',
    justifyContent:'center',
    height:'600px',
    width:'600px',
    maxWidth:'600px',
    borderRadius:'15px',
    position:'absolute',
  
}

const headerStyle = {
    color:'white',
    fontSize:'55px'
}

const ulStyle = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-start',
    color:'#12355b',
    backgroundColor:'#c9f0ff',
    borderRadius:'15px',
    listStyleType:'none',
    padding:'10px'
    
}
const liStyle = {
    fontFamily:'Bruno Ace, cursive',
    color:'#edddd4',
    display:'flex',
    
}
const aStyle = {
    color:'#a7c2cc'
}

const pStyle ={
    color:'white'
}

function Index(props){
    return (
    <div style={outerDiv}>

        <div style={divStyle}>
             <h1 style={headerStyle}>Welcome to Notes</h1>
            <ul style={ulStyle}>
                {
                    props.notes.map((note)=>{
                        return(
                            <li style={liStyle} key={note._id}>
                                <a href={`/notes/${note._id}`}>{note.title}:{note.completed?` is completed`:` is not completed`}</a>
                            </li>
                        )
                    })
                }
            </ul>
             <h2>
                <a style={aStyle} href={`/notes/new`}>Create A New Note </a>
             </h2>
             <p style={pStyle}>Gunish Sharma</p>
             <p style={pStyle}>June 2023</p>
        </div>
                </div>
    )
}

module.exports = Index