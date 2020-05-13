import React, {useState} from "react"

function PersonalData(props) {

    const [name, setName] = useState("")
    const [email ,setEmail] = useState("")
    const [number, setNumber] = useState("")
    
    return(
        <div>
            <form>
            <div>
                        <label htmlFor="name" className="name-label">Name: </label><br/>
                        <input  
                            type="text" 
                            className="name"
                            value={name}
                            onChange={event => setName(event.target.value)}
                            placeholder="John Doe" 
                            required
                        /><br/>
                        <label htmlFor="email" className="email-label">Email: </label><br/>
                        <input 
                            type="email" 
                            className="email" 
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            placeholder="e.g. john.doe@gmail.com" 
                            required
                        /><br/>
        
                        <label htmlFor="tel" className="number-label">Number: </label><br/>
                        <input 
                            type="tel" 
                            className="number" 
                            value={number}
                            onChange={event => setNumber(event.target.value)}
                            name="phone" 
                            min="9" 
                            max="10" 
                            placeholder="079 1234 56 78" 
                            required
                        /><br/>
                        
                </div><br/>
                
        </form>
        </div>
        
    )
    
}

export default PersonalData