import React from 'react';


const modal=(props) =>{
    return (
        <div>
            <div className="modal-ting"
                style={{
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="mdl-hdr">
                    <p>Edit Text</p>
                </div>
                <div className="mdl-body">
                    <p>
                    <input type="text-input" id="txtbox" onChange={props.textChange}/>
                    </p>
                </div>
                <div className="mdl-ftr">
                    <button className="btn-cancel" onClick={props.close}>Close</button>
                    <button className="btn-enter" onClick={props.enter}
                        >Enter</button>
                </div>
            </div>
        </div>
    )
}

export default modal;
