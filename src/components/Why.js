import React from "react"

class Why extends React.Component {

    state = {
        stress: false,
        refreshing: false,
        social: false,
        cantLive: false
    }

    handleChange = (event) => {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({[name]: value})
    }

    

    render() {
        return(
            <div>
                <form>
                    
                    <label htmlFor="why">Why do you drink your coffee?</label> <br/>
                    <input  
                        type="checkbox" 
                        name="stress"
                        checked= {this.state.stress}
                        onChange={this.handleChange}
                    /> Release Stress <br/>
                    <input  
                        type="checkbox" 
                        name="refreshing"
                        checked= {this.state.refreshing}
                        onChange={this.handleChange}
                    /> Refreshing <br/>
                    <input 
                        type="checkbox" 
                        name="social"
                        checked= {this.state.social}
                        onChange={this.handleChange}
                    /> Social Ocasion <br/>
                    <input 
                        type="checkbox" 
                        name="cantLive"
                        checked= {this.state.cantLive}
                        onChange={this.handleChange}
                    /> I can't live without coffee! Give me more! <br/><br/>
                 </form>
        
            </div>
            
        )
    }
}

export default Why