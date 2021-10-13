import cakeIcon from '../image/cakeIcon.png';

function InfoboxComponent() {
    return(
        <div className="info_box">
            <div className="box details">
                <p className="box_title">Age</p>
                <div className="age_info">
                    <span className="age">0</span>
                    <span className="value">Years</span>
                </div>
                <div className="interval">
                    <span className="month_value">0</span>
                    <span className="month_text">month</span>
                    <span>|</span>
                    <span className="day_value">0</span>
                    <span className="day_text">days</span>
                </div>
            </div>

            <div className="box next">
                <p className="box_subtitle">Next Birthday</p>
                <img src={cakeIcon} alt="cake" />
                <p className="day">Tuesday</p>
                <div className="interval">
                    <span className="month_value_nex">0</span>
                    <span className="month_text_next">months</span>
                    <span>|</span>
                    <span className="day_value_next">0</span>
                    <span className="day_text_next">days</span>
                </div>
            </div>

            <div className="box summary">
                <p className="box_subtitle">Summary</p>
                <div className="description_container">
                    <div className="col">
                        <div>
                            <p className="title">Years</p>
                            <p className="years">0</p>
                        </div>
                        <div>
                            <p className="title">Days</p>
                            <p className="days">0</p>
                        </div>
                    </div>

                    <div className="col">
                        <div>
                            <p className="title">Months</p>
                            <p className="months">0</p>
                        </div>
                        <div>
                            <p className="title">Hours</p>
                            <p className="hours">0</p>
                        </div>
                    </div>

                    <div className="col">
                        <div>
                            <p className="title">Weeks</p>
                            <p className="weeks">0</p>
                        </div>
                        <div>
                            <p className="title">Minutes</p>
                            <p className="minutes">0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoboxComponent