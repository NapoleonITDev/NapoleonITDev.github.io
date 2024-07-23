import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { TiTick, TiTimes } from 'react-icons/ti'
import './snackbar.css'


const Snackbar = forwardRef((props, ref) => {
    const [showSnackbar, setShowSnackbar] = useState(false);

    useImperativeHandle(ref, () => ({
        show() {
            setShowSnackbar(true);
            setTimeout(() => {
                setShowSnackbar(false);
            }, 3000);
        }
    }));
    return (
        <div
            className={props.type === "success" ? "snackbar success" : "snackbar failed"}
            id={showSnackbar ? "show" : "hide"}
        >
            <div className="symbol">
                {props.type === "success" ? <TiTick/> :  <TiTimes/> }
            </div>
            <div className="message">{props.message}</div>
        </div>
    )
});

export default Snackbar;
