import {Fragment} from "react";
import HolidayCard from "./HolidayCard";
import { useSelector } from "react-redux/";
const HolidayList = ({ request }) => {
  const { completed } = request;
  const {holidays}=useSelector((state)=>state.holiday)
  return (
    <>
      <div className={!completed ? "noList" : "holiday_list"}>
        {console.log(holidays)}
        {holidays.map((val)=>{
          return(
            <Fragment key={val.id}>
              <HolidayCard holiday={val}/>
            </Fragment>
          )
        })}
      </div>
    </>
  );
};

export default HolidayList;
