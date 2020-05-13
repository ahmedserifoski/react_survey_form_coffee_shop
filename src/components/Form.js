import React, {useState} from "react"

import PersonalData from "./PersonalData"
import WeWereThinking from "./WeWereThinking";
import When from "./When"
import Why from "./Why"
import OtherIdeas from "./OtherIdeas"

function Form(props) {
    function handleSubmit(e) {
        e.preventDefault();
      }

    return(
       <div>
            <PersonalData />

            <WeWereThinking />

            <When />

            <Why />

            <OtherIdeas />
            
            <form className="survey-form" action="#" onSubmit={handleSubmit}>
                <button className="submit">Submit</button>
            </form>
       </div>
    )
}

export default Form