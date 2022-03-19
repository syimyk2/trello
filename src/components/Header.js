// import classes from './Header.module.css';

import styled from "styled-components";

const HeaderStyle = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #026aa7;
  color: white;
  padding: 0 10%;

  & ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
  }

  & li {
    margin: 0 1rem;
  }

  & a {
    text-decoration: none;
    color: white;
    font-size: 1.25rem;
  }

  & a:hover,
  & a:active {
    color: #b864da;
  }

  & button {
    font-size: 1.25rem;
    background-color: #ffbb00;
    border: 1px solid #ffbb00;
    padding: 0.5rem 1.5rem;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    color: #2c2922;
  }

  & button:hover,
  & button:active {
    background-color: #ffa600;
    border-color: #ffa600;
  }
  & img {
    width: 50px;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <h1>Trello</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Cards</a>
          </li>
          <li>
            <a href="/">Kanban</a>
          </li>
          <li>
            <button>Logout</button>
          </li>
          <li>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgfZzcRD54A6eJmYsmabDV8dDtL388pHgjmw&usqp=CAU" />
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
