import React from "react";
import HolidayList from "./HolidayList";
const RequestBox = ({ request }) => {
  const { id, completed } = request;
  return (
    <>
      <div
        className={!completed ? "received_request_box" : "completed_request_box"} >
        {/* <h1>{id} this a requst box</h1> */}
        <div className="request_head">
          <div className="head-container">
            <h2 className="heading_style">St judes Hospital</h2>
            <p>Sarasota,FL 33178</p>
          </div>

          <div className="head-container">
            <h2 className="heading_style" id="heading_style_date"><span>10</span> <span>-</span> <span style={{marginRight:"10px"}}>17</span></h2>
            <p style={{display:"flex",justifyContent:"space-between" }}><span style={{marginLeft:"10px"}}>October</span>  <span style={{marginLeft:"20px"}}>December</span></p>
          </div>

          <div className="head-container">
            <h2 className="heading_style">20 Rooms</h2>
            <p>10 Singles, 10 doubles</p>
          </div>
        </div>

        {!completed ? (
          <>
            <div className="status-bar">
              <div className="status_item">
                <span>RECEIVED</span>
              </div>
              <div className="status_item">
                <span>NEGOTIATING</span>
              </div>
              <div className="status_item">
                <span>COMPLETED</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="completed_status-bar"> 
                <span>COMPLETED</span>
            </div>
          </>
        )}

      <HolidayList request={request}/>
      </div>
    </>
  );
};

export default RequestBox;
