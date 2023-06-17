const React = require('react')

function Show(props){
    return(
        <div>
          <h1>{props.note.title}</h1><br/>
          <h2>{props.note.description}</h2> <br/>
          <h3>{props.note.completed?'Completed':' Not Completed'}</h3><br/>
         <a href = {`/notes/edit/${props.note._id}`}> Edit Note</a>

         <form action={`/notes/${props.note._id}?_method=DELETE`} method="POST">
                <input type="submit" value={`Delete this ${props.note.title} Note `}/>
            </form>
        </div>
    )
}

module.exports = Show