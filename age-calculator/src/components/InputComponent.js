import React from "react";

function InputComponent(){
    const today = new Date()
    // let year = today.getFullYear();
    

    function handleChange(e) {
        let options = {year: 'numeric', month: 'long', day: 'numeric'};
        let value = new Date(e.target.value);
        let DOB = value.toLocaleDateString('en-US', options);

        let chosenDate = document.getElementById('choice');
        chosenDate.innerHTML = DOB;
    }

    return (
        <form method="POST" className="form">
            <h1 className="form_title">Age Calculator</h1>
            <div className="form_group">
                <label htmlFor="dob">Date Of Birth:</label>
                <input type="date" id="dob" 
                    onChange={handleChange}
                />
                <p id="choice"></p>
            </div>
        </form>
    )
}

export default InputComponent