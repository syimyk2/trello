import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useCallbackPrompt } from "../helpers/custom-hooks/useCallbackPrompt";
import useInput from "../helpers/custom-hooks/useInput";
import { regEmail, regPassword } from "../helpers/regex";
import { authActions } from "../store/authSlice";
import { usersData } from "../store/usersData";
import {CardModal} from "./UI/Modal";
import Loading from "./UI/Loading";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate =useNavigate()
  const location = useLocation()
  const [loading, setLoading] =useState(false)
  const [showModal, setShowModal]=useState(false)
  const [showPrompt, confirmNavigation, cancelNavigation]=useCallbackPrompt(showModal)
  const {
    enteredValue: emailValue,
    enterdNameTouch: enterEmailTouch,
    enteredNameIsValid,
    nameInputIsValid,
    changeInputHandler: emailChangeHadler,
    inputBlurHandler: emilUnTouched,
    setEnteredValue: setEnteredEmail,
    setEnteredNameTouch: setEnteredEmailTouch,
    nameInputClasses: emailClass,
  } = useInput(regEmail, setShowModal);
  const {
    enteredValue: passwordValue,
    enterdNameTouch: enterPasswordTouch,
    enteredNameIsValid: enteredPasswordIsValid,
    nameInputIsValid: passwordInputIsValid,
    changeInputHandler: passwordChangeHadler,
    inputBlurHandler: passwordUnTouched,
    setEnteredValue: setEnteredPassword,
    setEnteredNameTouch: setEnteredPasswordTouch,
    nameInputClasses: passwordClass,
  } = useInput(regPassword, setShowModal);

  let formIsValid = false;

  if (enteredNameIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }
  const submitHadler = (e) => {
    e.preventDefault();

    if (!enteredNameIsValid || !enteredPasswordIsValid) {
      return;
    }

    setEnteredEmail("");
    setEnteredPassword("");
    setEnteredEmailTouch(false);
    setEnteredPasswordTouch(false);

    const userData = {
      email: emailValue,
      password: passwordValue,
      id: Math.random().toString(),
    };
    async function postUsers(){
      setLoading(true)
      try {
         const response = await fetch('https://trello-users-72538-default-rtdb.firebaseio.com/trelloUsers.json',{
        method: 'POST',
        headers: {'Content-type' : 'aplication/json'},
        body: JSON.stringify(usersData)

      })
       if(!response.ok){
         setLoading(false)
         throw new Error('Can not register .Something went wrong with server :(  !')

       }
       if(response.ok){
         setLoading(false)
          alert('sucsess!')
          dispatch(authActions.authention(userData))
          navigate('/homepage',{replace: true, state: {location}})


       }

      } catch (error) {
       console.log(error.message)
      }

    }
    postUsers()


         dispatch(authActions.registerTrello(true))
    console.log(userData);
  };
  return (
    <AuthStyled>
      {showPrompt&& <CardModal onConfirm={confirmNavigation} onCencel={cancelNavigation}/>}
      {loading? <Loading type={'cylon'} color='green'/>  : <section>

        <form onSubmit={submitHadler}>
          <h1>Регистрация в Trello</h1>
          <div>
            <input
              className={emailClass}
              type="text"
              id="email"
              onChange={emailChangeHadler}
              onBlur={emilUnTouched}
              value={emailValue}
              placeholder="Укажите адрес электронной почты"
            />
            {nameInputIsValid && <p>*email adress isn't correct!</p>}
          </div>
          <div>
            <input
              className={passwordClass}
              type="password"
              onChange={passwordChangeHadler}
              onBlur={passwordUnTouched}
              value={passwordValue}
              id="password"
              placeholder="Придумайте пароль"
            />
            {passwordInputIsValid && <p>*password adress isn't correct!</p>}
          </div>
          <button type="type" disabled={!formIsValid}>
            Sign in
          </button>
        </form>
        <p className="or">
          <span>ИЛИ</span>
        </p>
        <AfterLogin>
          <div className="link-cards">
            <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" />
            <strong>Зарегистрироваться через Github</strong>
          </div>
          <div className="">
            <img src="https://w7.pngwing.com/pngs/869/485/png-transparent-google-logo-computer-icons-google-text-logo-google-logo-thumbnail.png" />
            <strong>Зарегистрироваться через Google</strong>
          </div>
          <div className="apple">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" />
            <strong>Зарегистрироваться через Apple</strong>
          </div>



        </AfterLogin>
      </section>}
    </AuthStyled>
  );
};

export default Auth;

const AfterLogin = styled.div`
  display: flex;
  flex-direction: column;
  & div {
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    padding: 5px;
    box-shadow: 0px 0px 3px 3px rgba(99, 128, 150, 0.09);
    height: 40px;
    cursor: pointer;
  }
  & img {
    width: 27px;
    margin-right: 10px;
  }
  & strong {
    color: #21446b;
    font-size: 14px;
  }
`;

const AuthStyled = styled.main`
  margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 25rem;
  border-radius: 3px;
  padding: 2rem;
  text-align: center;
  background-color: #f4f0fa;



  & div {
    margin-bottom: 0.5rem;
  }
 & .or{
   margin-top: 30px;
   margin-bottom: 30px;
 }
  & label {
    display: block;
    color: #616161;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 21rem;
    margin: auto;
    border-radius: 4px;
    padding: 0.25rem;
    border: 1.5px solid #ccc;
    outline: none;
    height: 2.3rem;
    /* margin-bottom: 20px; */
  }
  & input:focus {
    border-color: #00bfff;
  }
  & .invalid {
    background-color: #ff6347;
    border-color: #026aa7;
  }
  & button {
    background: green;
    border-radius: 5px;
    border: none;
    width: 337px;
    font-weight: bold;
  }
  & h1 {
    color: #026aa7;
  }
  & button:disabled {
    color: rgb(150, 150, 150);
    background-color: #ccc;
  }
  & button:disabled:hover {
    cursor: not-allowed;
    background-color: #ccc;
  }
  & button:disabled:active {
    color: #3f3f3f;
    border-color: #ccc;
    cursor: not-allowed;
  }
  & p {
    box-sizing: border-box;
    color: #dc0864b8;
    font-size: 11px;
    margin: 0;
    padding: 0;
  }

  & span {
    color: black;
    font-size: 13px;
  }
`;
