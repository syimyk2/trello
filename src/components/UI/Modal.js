import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import ReactDOM from 'react-dom'



const Modal = (props) => {

  const dispatch = useDispatch()
  const cardItemData = useSelector((state)=>state)


return (
  <CardModalWrapper>
      <header>
          <section>
              <img src="https://icons.veryicon.com/png/o/business/financial-linear-icon/option-3.png" alt="icon" />
          </section>
          <div>
            <h1>Atention!</h1>
          </div>
          <div>
              <h1 onClick={props.onCencel}>X</h1>
          </div>
      </header>
      <main>
        <h1>Do you really want to go back?</h1>
        <p>The changes you made may not be saved.</p>
      </main>
      <footer>
        <button onClick={props.onConfirm}>yes</button>
        <button onClick={props.onCencel}>NO</button>
      </footer>
  </CardModalWrapper>
)
}
const CardModalWrapper = styled.div`
  position: fixed;
  top: 10vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;
  background: #E5E5E5;
  border-radius: 5px;
  /* padding: 1rem; */
  cursor: pointer;

& header {
  background: #E5E5E5;
  padding: 1rem;
  display:flex;
  justify-content: space-between;
  align-items: start;
  background: green;
}

& header section img{
width: 15px;
}
& header section p span{
text-decoration: underline;
}
&  h1 {
  margin: 0;
  font-size: 14px;
  color: #000040;
}
p{
  color: #000040;
  margin-bottom: 0;
}
main {
  padding: 1rem;

}
footer{
  display: flex;
  justify-content: end;
}
& button{
  color: inherit;
  margin: 25px
}


@media (min-width: 300px) {
  & {
      left: calc(40% - 20rem);
      width: 30rem;
  }
}
`
const Backdrop =(props)=>{
  const dispatch = useDispatch()

  return <Backdropp />
}
const Backdropp =styled.div`
 position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 11;
  background: rgba(0, 0, 0, 0.665);

`
const CardModal = (props)=>{

 return <>

  {ReactDOM.createPortal(
      <Modal  message={props.message} onCencel={props.onCencel}   onConfirm ={props.onConfirm}> {props.children}</Modal>,
      document.getElementById('modal-root')
  )},
   {ReactDOM.createPortal(
       <Backdrop onConfirm={props.onConfirm}/>,
       document.getElementById("backdrop-root")
  )}



  </>

}




export {CardModal}
