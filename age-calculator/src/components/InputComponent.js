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


        // CURRENT BIRTHDAY CALCULATIONS
        let flatYear = miliseconds/year
        let years = Math.round(flatYear)
        let months = years*12
        let days = Math.floor(flatYear*365)
        let weeks = Math.floor(days/7)
        let hours = Math.floor(miliseconds/hour)
        let minutes = Math.floor(miliseconds/minute)
        
        // NEXT BIRTHDAY CALCULATIONS
        let birthDate = value.getDate()
        let birthMonth = value.getMonth()
        let rN = new Date()
        let nextYear = rN.getFullYear()+1
        
        let nextBirthDay = new Date(nextYear, birthMonth, birthDate)
        let chosenDay = nextBirthDay.getDay()
        let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday']
        console.log(weekDays[chosenDay])

        // BINDING AND APPENDING VALUES
        document.querySelector(".age").innerHTML = years
        document.querySelector(".day_value").innerHTML = Math.round(days/365)
        document.querySelector(".hours").innerHTML = hours
        document.querySelector(".days").innerHTML = days
        document.querySelector(".weeks").innerHTML =weeks
        document.querySelector(".months").innerHTML = months
        document.querySelector(".years").innerHTML = years
        document.querySelector(".minutes").innerHTML = minutes
        document.querySelector(".day").innerHTML = weekDays[chosenDay]


        
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