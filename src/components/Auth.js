import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { authActions } from "../store/authSlice";
import { usersData } from "../store/usersData";

const Auth = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginIsValid, setLoginIsValid] = useState(true);

  const emailChangeHadler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHadler = (e) => {
    setPassword(e.target.value);
  };
  const registerTrelloHandler = (e) => {
    dispatch(authActions.registerTrello(true));
  };

  const submitHadler = (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    async function checkUsers() {
      const response = await fetch(
        "https://trello-users-72538-default-rtdb.firebaseio.com/trelloUsers.json"
      );
      const result = await response.json();
      console.log(result);

      let defarmationUsers = [];
      for (const key in result) {
        defarmationUsers = [...result[key]];
      }

      const checkUser = defarmationUsers.find(
        (el) => el.email === userData.email || el.password === userData.password
      );

      setLoginIsValid(checkUser);
      dispatch(authActions.authention(checkUser));
    }
    checkUsers();
  };

  return (
    <AuthStyled>
      <section>
        <form onSubmit={submitHadler}>
          <h1>Вход в Trello</h1>
          <div>
            <input
              type="text"
              id="email"
              onChange={emailChangeHadler}
              placeholder="Укажите адрес электронной почты"
            />
            {loginIsValid ? "" : <p>*email adress is invalid!</p>}
          </div>
          <div>
            <input
              type="password"
              onChange={passwordChangeHadler}
              id="password"
              placeholder="Введите пароль"
            />
            {loginIsValid ? "" : <p>*password is invalid!</p>}
          </div>
          <button type="type">Войти</button>
        </form>
        <p className="or">
          <span>ИЛИ</span>
        </p>
        <AfterLogin>
          <div className="link-cards">
            <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" />
            <strong>Войти через Github</strong>
          </div>
          <div className="">
            <img src="https://w7.pngwing.com/pngs/869/485/png-transparent-google-logo-computer-icons-google-text-logo-google-logo-thumbnail.png" />
            <strong>Войти через Google</strong>
          </div>
          <div className="apple">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" />
            <strong>Войти через Apple</strong>
          </div>
          <section className="faq">
            <span>Не удается войти?</span>
            <span onClick={registerTrelloHandler}>Зарегистрироваться</span>
          </section>
        </AfterLogin>
      </section>
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
  }
  .faq {
    padding: 1rem;
    cursor: pointer;
  }
  & .faq span {
    color: blue;
    margin: 4px;
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
  min-height: 32rem;
 

  & div {
    margin-bottom: 0.5rem;
  }
  & .or {
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
    width: 20rem;
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
