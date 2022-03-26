import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { authActions } from '../store/authSlice';
const UserProfileStyled = styled.main`
  margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 40rem;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #f4f0fa;
  color: black;
  position: absolute;
  top: 1px;
  left: 360px;
  & header{
    display: flex;
    justify-content: space-between;
    cursor:pointer;
  }
  & header img{
    width: 20px;
  }
  .option{
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: start;
  }

`

const UserProfile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const profileData = useSelector((state)=>state.auth.userProfile)
  const logoutHandler =()=>{
    dispatch(authActions.registerTrello(false))
    navigate('/login-page',{replace: true, state: {location}})

  }
  return (
    <UserProfileStyled>
      <header>
        <div className='option'>
          <img src='https://icons.veryicon.com/png/o/business/financial-linear-icon/option-3.png'/>
          <h1>User Profile</h1>
        </div>

        <div onClick={()=>dispatch(authActions.showProfile(false)) }>x</div>
      </header>

       <div>
         <p>Here must be name</p>
        <p>your email: {profileData.email}</p>
       </div>
      <img src='https://cdn.dribbble.com/users/175710/screenshots/2719567/attachments/550443/taco-3-body.png?compress=1&resize=400x300&vertical=top'/>
     <div>
       <button onClick={logoutHandler}>log out</button>
       </div>

    </UserProfileStyled>
  );
};

export default UserProfile;
