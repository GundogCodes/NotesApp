const React = require('react')

function Edit(props){
    return(
        <div>
            <h1>Edit Note
            <a href="/notes">All Notes</a> <br/>
            </h1>
            <form action={`/notes/${props.note._id}?_method=PUT`} method="POST">
                Title:<input type = "text" name ="title" defaultValue={props.note.title}/> <br/>
                Description:<input type = "text" name ="description" defaultValue={props.note.description}/> <br/>
                Completed: {props.note.completed?<input type = "checkbox" name ="completed" defaultChecked/>:<input 
                type='checkbox' name='completed'/>} <br/>
                <input type="submit" value = "Update Note"/>
            </form>
            <form action={`/notes/${props.note._id}`} method="DELETE">
                <button>Delete Note</button>
            </form>
        </div>
    )
}

module.exports = Edit