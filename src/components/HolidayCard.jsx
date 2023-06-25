import React from "react";
import RareFind from "./RareFind";
import HolidayLogo from "./HolidayLogo";

const HolidayCard = ({ holiday }) => {
  const { id, rare } = holiday;
  return (
    <>
      {rare ? (
        <>
          <div className="rare_card">
         <RareFind/>
          <div className="rare_holiday_card">
            {/* <h1>{id}</h1> */}
            <HolidayLogo/>
            <p style={{fontStyle:"italic",marginBottom:"1rem"}} id="holidayInn">Holiday Inn</p>
            <div className="card_info">
                <p>1.5 miles away from joblocation.</p>
                <div id="card_info_con">
                    <div style={{textAlign:"left"}}>
                        <p>Singles: $120</p>
                        <p>Doubles: $145</p>
                    </div>
                    <button id="bookNow">Book now</button>
                </div>
            </div>
          </div>
          </div>
        </>
      ) : (
        <>
          <div className="holiday_card">
            {/* <h1>{id}</h1> */}
            <HolidayLogo/>
            <p style={{fontStyle:"italic",marginBottom:"1rem"}}>Holiday Inn</p>
            <div className="card_info">
                <p>1.5 miles away from joblocation.</p>
                <div id="card_info_con">
                    <div style={{textAlign:"left"}}>
                        <p>Singles: $120</p>
                        <p>Doubles: $145</p>
                    </div>
                    <button id="bookNow">Book now</button>
                </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HolidayCard;
