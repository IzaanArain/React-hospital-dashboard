import {Fragment} from 'react'
import RequestBox from '../components/RequestBox'
import { useSelector,useDispatch } from 'react-redux'
import ChatBox from '../components/ChatBox'

const RequestDashbaord = () => {
  const {requests}=useSelector((state)=>state.request)
  return (
    <>
    <div className="dashboard">
    <div className="request_container">
    <h2 id="request_count">You currently have 3 request</h2>
    {requests.map((val)=>{
      return(
        <Fragment key={val.id}>
        <RequestBox request={val}/>
        </Fragment>
      )
    })}
    </div>
    </div>
    <ChatBox/>
    </>
  )
}

export default RequestDashbaord