import React, {useState} from "react";

function InputComponent(){
    return (
        <form method="POST" className="form">
            <h1 className="form_title">Age Calculator</h1>
            <div className="form_group">
                <label htmlFor="dob">Date Of Birth:</label>
                <input type="date" id="dob" />
            </div>

            <div className="form_group">
                <label htmlFor="today">Today:</label>
                <input type="date" id="today" />
            </div>
        </form>
    )
}

export default InputComponent