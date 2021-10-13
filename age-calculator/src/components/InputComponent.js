function InputComponent(){

    function handleChange(e) {
        let options = {year: 'numeric', month: 'long', day: 'numeric'};
        let value = new Date(e.target.value);
        let DOB = value.toLocaleDateString('en-US', options)

        document.getElementById('choice').innerHTML = DOB

        let milisecondsDOB = Date.parse(DOB)
        let milisecondsNow = Date.now()

        const ageInMiliseconds = (milisecondsNow - milisecondsDOB);
        let miliseconds = ageInMiliseconds
        const second = 1000,
            minute = second*60,
            hour = minute*60,
            day = hour*24,
            month = day*30,
            year = day*365;


        // CALCULATIONS
        let flatYear = miliseconds/year
        let years = Math.round(flatYear)
        let months = years*12
        let days = Math.floor(flatYear*365)
        let weeks = Math.floor(days/7)
        let hours = value.getHours()

        // BINDING AND APPENDING VALUES
        document.querySelector(".age").innerHTML = years
        document.querySelector(".day_value").innerHTML = Math.round(days/355)
        document.querySelector(".days").innerHTML = days
        document.querySelector(".weeks").innerHTML = weeks
        document.querySelector(".years").innerHTML = years
        document.querySelector(".months").innerHTML = months

        console.log(hours)
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