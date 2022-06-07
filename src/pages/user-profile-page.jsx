import { useSelector } from 'react-redux'
import {BiArrowBack} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

export const UserProfile = () => {
    const navigate = useNavigate()

    const { currUser } = useSelector((storeState) => storeState.boardModule)

    return <div className="flex user-profile-main-container">
        <div className="flex user-profile-upper">
        {currUser.imgUrl ? <div className="flex user-profile-upper">
            <img src={currUser.imgUrl} />
            <span>{currUser.fullName}</span></div>
        : <div className="flex user-profile-upper">
            <img src="https://cdn-icons.flaticon.com/png/512/3177/premium/3177440.png?token=exp=1654462637~hmac=b8a85bf90deef91047c600ebb827ee97" alt="imgs/user.png"/>
            <span>Guest mode</span>
        </div>}
        </div>
        {currUser.fullName && <main className="flex user-profile-bottom-container-conected">
            <h2>Overview:</h2>
            <span>Name: {currUser.fullName}</span>
            <span>User id: {currUser._id}</span>
            <a href="">Log out</a>
        </main>}
           <a href="" onClick={() => navigate('/')}>Back to home <BiArrowBack/></a>
    </div>
}