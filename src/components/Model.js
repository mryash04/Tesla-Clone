import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./Model.css";

const Model = (props) => {
    return (
        <div className="model" style={{
            backgroundImage: `url(${props.backgroundImage})`,
            height: "100vh",
            width: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
            <div className="model-container">
                <div className="model-title">
                    <p>{props.title}</p>
                    <div className="model-text">
                        <p>{props.text}</p>
                    </div>
                </div>
                <div className="model-buttons">
                    <div className="model-button">
                        <button className="left-button">{props.leftButton}</button>
                        <button className="right-button">{props.rightButton}</button>
                    </div>
                    <div className="model-arrow">
                        <ExpandMoreIcon className="expand-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model;