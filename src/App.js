import { useSelector } from "react-redux";
import styled from "styled-components";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import background from "./assets/img/img.jpg";
import Headers from "./header/Headers";
import AddTemplate from "./components/Layout/addTemplate/AddTemplate";
import SignUp from "./components/SignUp";

function App() {
  const authIsValid = useSelector((state) => state.auth.isValid);
  const showProfile = useSelector((state)=>state.auth.showProfile);
  const isRegister = useSelector((state)=>state.auth.isRegister);


  console.log(authIsValid);
  return (
    <Wrapper authIsValid ={authIsValid} img={background}>
      {authIsValid ? (
        <>
          <Headers />
          <AddTemplate />
          {showProfile&& <UserProfile/> }


        </>
      ) : (
        !isRegister ? <Auth/>: <SignUp/>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: url(${(props) => (!props.authIsValid ? props.img : "")});
  background-size: cover;
  height: ${(props) => (!props.authIsValid ? "100vh" : "")};
  display: ${(props) => (!props.authIsValid ? "flex" : "")};
`;

export default App;
