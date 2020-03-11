import React, { Component } from 'react'
import { AutoInit } from 'materialize-css'

// THIS IS HOW WE DISPLAY THE LOGO, IN THIS COMPONENT
class TextEditWorkspace extends Component {
    render() {
        const styles = {
            
            container: {
                color: this.props.logo.textColor,
                backgroundColor: this.props.logo.backgroundColor,
                borderColor: this.props.logo.borderColor,
                fontSize: this.props.logo.fontSize + "pt",
                borderRadius:this.props.logo.borderRadius+"pt",
                borderwidth:this.props.logo.borderwidth+"pts",
                padding: this.props.logo.padding+"pt",  
                margin:this.props.logo.margin+"pt"   ,     
                border:'solid',
                display:'block-inline'

                
                
                                
            }
            
        }
        return (
            <div id="help" className="col s8"
                style={ styles.container }>

                {this.props.logo.text}
            </div>
        )
    }
}

export default TextEditWorkspace

