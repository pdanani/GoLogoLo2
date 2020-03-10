import React, { Component } from 'react'

// THIS IS HOW WE DISPLAY THE LOGO, IN THIS COMPONENT
class TextEditWorkspace extends Component {
    render() {
        const styles = {
            container: {
                border:'solid',
                color: this.props.logo.textColor,
                backgroundColor: this.props.logo.backgroundColor,
                borderColor: this.props.logo.borderColor,
                fontSize: this.props.logo.fontSize + "pt"

            }
        }
        return (
            <div className="col s8"
                style={ styles.container }>
                {this.props.logo.text}
            </div>
        )
    }
}

export default TextEditWorkspace