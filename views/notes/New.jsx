const React = require('react')

function New(props){
    return(
        <div>
                <h1>
                    Make a New Note
                </h1>
            <form action='/notes'method="POST">
                Title:       <input type ='text' name='title'/><br/>
                Description: <input type ='text' name='description'/><br/>
                Completed: <input type = "checkbox" name ="completed"/> <br/>
                <input type="submit" value = "Create Note"/><br/>
            </form>
                <a href='/notes'>Back To All Notes</a>
        </div>
    )
}

module.exports = New