import React, { Component } from 'react'


import Modal from '/Users/pawan/Desktop/CSE316/HW2/gologolo_hw2-master/src/Modal.js';

class TextEditSidebar extends Component {
              isShowing: false

 

    constructor(props) {
        super(props);

        // WE'LL MANAGE THE UI CONTROL
        // VALUES HERE
         this.state = {
             
            textColor : this.props.logo.textColor,
            fontSize : this.props.logo.fontSize,
            backgroundColor: this.props.logo.backgroundColor,
            borderColor:this.props.logo.borderColor,
            borderRadius:this.props.logo.borderRadius,
            borderWidth:this.props.logo.borderWidth,
            padding:this.props.logo.padding,
            margin:this.props.logo.margin,
            isShowing: false


       

        } 
    }
    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }


    handleUndo = () => {
        this.props.undoCallback();
    }

    handleTextColorChange = (event) => {
        console.log("handleTextColorChange to " + event.target.value);
        this.setState({ textColor: event.target.value }, this.completeUserEditing);
    }

    handleFontSizeChange = (event) => {
        console.log("handleTextColorChangeComplete to " + event.target.value);
        this.setState({ fontSize: event.target.value }, this.completeUserEditing);
    }
    handleBackgroundColorChange = (event) => {//mine
        this.setState({ backgroundColor: event.target.value }, this.completeUserEditing);
    }
    handleBorderColorChange = (event) => {//mine
        this.setState({ borderColor: event.target.value }, this.completeUserEditing);
    }
    handleBorderRadiusChange = (event) => {//mine
        this.setState({ borderRadius: event.target.value }, this.completeUserEditing);
    }
    handleBorderWidthChange = (event) => {//mine
        console.debug("width");
        this.setState({ borderWidth: event.target.value }, this.completeUserEditing);
    }
    handlePaddingChange = (event) => {//mine
        this.setState({ padding: event.target.value }, this.completeUserEditing);
    }
    handleMarginChange = (event) => {//mine
        this.setState({ margin: event.target.value }, this.completeUserEditing);
    }

    completeUserEditing = () => {
        console.log("completeUserEditing");
        console.log("this.state.textColor: " + this.state.textColor);
        this.props.changeLogoCallback(this.props.logo, this.props.logo.key, this.props.logo.text, this.state.textColor,this.state.backgroundColor,this.state.borderColor ,this.state.fontSize,this.state.borderRadius,this.state.borderWidth,this.state.padding,this.state.margin);
    }
     updateTextInput=(val)=> {
        document.getElementById('textInput').value=val; 
      }
    render() {

        let undoDisabled = !this.props.canUndo();
        let undoClass = "waves-effect waves-light btn-small";
        if (undoDisabled)
            undoClass += " disabled";
        return (
            
            <div className="card-panel col s4">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <button className="waves-effect waves-light btn-small" onClick={this.openModalHandler}
                        >&#9998;</button> 
                                      

                        
                        <button className={undoClass} onClick={this.handleUndo}>Undo</button>
                    </div>
                </div>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Text</span>
                        <div className="row">
                            <div className="col s4">Text Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleTextColorChange}
                                        value={this.props.logo.textColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Background Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleBackgroundColorChange}
                                        value={this.props.logo.backgroundColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleBorderColorChange}
                                        value={this.props.logo.borderColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Font Size:</div>
                            <div className="col s8">
                                <input type="range" min="4" max="80" 
                                    onChange={this.handleFontSizeChange}
                                    value={this.props.logo.fontSize} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Radius:</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleBorderRadiusChange}
                                    value={this.props.logo.borderRadius} />
                            </div>
                        </div><div className="row">
                            <div className="col s4">Border Thickness:</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleBorderWidthChange}
                                    value={this.props.logo.borderWidth} />
                            </div>
                        </div><div className="row">
                            <div className="col s4">Padding:</div>
                            <div className="col s8">
                                <input type="range" min="4" max="75" 
                                    onChange={this.handlePaddingChange}
                                    value={this.props.logo.padding} />
                            </div>
                        </div><div className="row">
                            <div className="col s4">Margin:</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleMarginChange}
                                    value={this.props.logo.margin} />
                            </div>
                        </div>
                    </div>
                </div>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

<Modal
className="modal"
show={this.state.isShowing}
close={this.closeModalHandler}>
</Modal>
            </div>
        )
    }
}

export default TextEditSidebar