import React, { Component } from 'react'
import { AutoInit } from 'materialize-css'

// THIS IS HOW WE DISPLAY THE LOGO, IN THIS COMPONENT
class TextEditWorkspace extends Component {
    render() {
        const styles = {
            
            container: {
                color: this.props.logo.textColor,
                backgroundColor: this.props.logo.backgroundColor,
                border:'solid',

                borderColor: this.props.logo.borderColor,
                fontSize: this.props.logo.fontSize + "pt",
                borderRadius:this.props.logo.borderRadius+"pt",
                borderWidth:this.props.logo.borderWidth+"pt",
                padding: this.props.logo.padding+"pt",  
                margin:this.props.logo.margin+"pt"   ,     
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

