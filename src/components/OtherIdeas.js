import React, {useState} from "react"

function OtherIdeas(props) {

    const [ideas, setIdeas] = useState("")

    return(
        <div>
            <form>
                    <label htmlFor="text">Some other ideas we didn't think of ?</label> <br/>
                    <textarea 
                        
                        className="name"
                        value={ideas}
                        onChange={event => setIdeas(event.target.value)}
                        cols="30" 
                        rows="10"/>
            </form>
    
        </div>
    )
}

export default OtherIdeas