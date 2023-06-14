const React = require('react')

function Index(props){
    return (
        <div>
             <h1>All Your Notes Page</h1>
            <ul>
                {
                    props.notes.map((note)=>{
                        return(
                            <li key={note._id}>
                                <a href={`/notes/${note._id}`}>{note.
                                title}: {note.description} 
                                {note.completed?` is completed`:` is not completed`}</a>
                            </li>
                        )
                    })
                }
            </ul>
             <h2>
                <a href={`/notes/new`}>Create A New Note </a>
             </h2>
        </div>
    )
}

module.exports = Index