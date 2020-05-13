import React,{useState} from "react"

function useInput(initialValue){
    const [value,setValue] = useState(initialValue);
  
     function handleChange(e){
         setValue(e.target.value);
     }
  
    return [value,handleChange];
  }


function When(props) {

    const [data] = useState({morning:"morning",noon:"noon",afternoon:"afternoon",evening:"evening",midnight:"midnight"})
    const [when, setWhen] = useInput("")

    return(
        <form>
                        <label htmlFor="when">When do you drink your coffee? </label><br/>
                            <label>
                                <input 
                                    type="radio" 
                                    id={data.morning}
                                    value={data.morning}
                                    checked={data.morning === when}
                                    onChange={setWhen}
                                /> Morning <br/>
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    id={data.noon}
                                    value={data.noon}
                                    checked={data.noon === when}
                                    onChange={setWhen}
                                /> Noon <br/>
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    id={data.afternoon}
                                    value={data.afternoon}
                                    checked={data.afternoon === when}
                                    onChange={setWhen}
                                /> Afternoon <br/>
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    id={data.evening}
                                    value={data.evening}
                                    checked={data.evening === when}
                                    onChange={setWhen}
                                /> Evening <br/>
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    id={data.midnight}
                                    value={data.midnight}
                                    checked={data.midnight === when}
                                    onChange={setWhen}
                                /> Midnight
                            </label>
                            <br/><br/>
                            
                </form>
    )
}

export default When