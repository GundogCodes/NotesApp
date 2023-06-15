const React = require('react')

function New(props){
    return(
        <div>
                <h1>
                    Make a New Note
                </h1>
            <form action='/notes' method="POST">
                <h2>Title: </h2>      <input type ='text' name='title'/><br/>
                <h2>Description:</h2> <input type ='text' name='description'/><br/>
                <h2>Completed:</h2> <input type = "checkbox" name ="completed"/> <br/>
              <h2> <input type="submit" value = "Create Note"/></h2><br/>
            </form>
                <a href='/notes'>Back To All Notes</a>
        </div>
    )
}

module.exports = New