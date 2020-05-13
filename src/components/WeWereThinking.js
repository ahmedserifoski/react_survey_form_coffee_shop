import React from "react"

class WeWereThinking extends React.Component {
    constructor() {
        super()
        this.state = {
            ideas: "blue"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    render() {
        return(
            <form>
                <label htmlFor="ideas">We were thinking something like...</label><br/>
                <select 
                    name="ideas"
                    value={this.state.ideas}
                    onChange={this.handleChange}
                    className="dropdown"
                >
                    <option value="More pillows"> More pillows</option>
                    <option value="Better wifi"> Better Wi-Fi</option>
                    <option value="Don't change"> Don't change anything. You are the BEST!</option>
                    
                </select><br/><br/>    
                
            </form>
        )
    }
}

export default WeWereThinking