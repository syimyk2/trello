import React from 'react'
import styled from 'styled-components'
import ReactDOM  from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cardActions } from '../../../store/cardsSlice'

const Modal = (props) => {

    const dispatch = useDispatch()
    const cardItemData = useSelector((state)=>state.card.cardModal.cardItem)


  return (
    <CardModalWrapper>
        <header>
            <section>
                <img src="https://icons.veryicon.com/png/o/business/financial-linear-icon/option-3.png" alt="icon" />
          <div>
               <h1>{cardItemData.task}</h1>
               <p> in colonne <span>{cardItemData.task}</span> </p>
          </div>
            </section>
            <div>
                <h1 onClick={()=>dispatch(cardActions.toggleCard())}  >X</h1>
            </div>
        </header>
        <main>
            <div className='description'>
                 <p>Описание</p>
                 <div>
                   <textarea name="" id="" cols="80" rows="5" placeholder='Добавить более подробное описание...'></textarea>
                 </div>

                 <div>
                   <button>save</button>
                 <strong>X</strong>
                 </div>

            </div>
            <div>
                <p>Действие</p>
                <textarea name="" id="" cols="80" rows="3" placeholder='Оставить коментарий...'></textarea>
            </div>

        </main>
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
    padding: 1rem;
    cursor: pointer;

& header {
    background: #E5E5E5;
    padding: 1rem;
    display:flex;
    justify-content: space-between;
    align-items: start;
}
& .description{
  display:flex;
  flex-direction: column;
}
&  strong{
  margin-left: 20px;
  color: black;
}
& header section{
    width: 15rem;
    display: flex;
    justify-content: space-between;
    align-items: start;


}
& header section img{
 width: 50px;
}
& header section p span{
text-decoration: underline;
}
& header img{
    width: 20px;
}
 &  h1 {
    margin: 0;
    color: #000040;
}
&  p{
 color: black;
}
main {
    padding: 1rem;

}



@media (min-width: 768px) {
    & {
        left: calc(40% - 20rem);
        width: 60rem;
    }
}
`
const Backdrop =(props)=>{
    const dispatch = useDispatch()

    return <Backdropp onClick={()=>dispatch(cardActions.toggleCard())}/>
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
        <Modal  message={props.message}   onConfirm ={props.onConfirm}> {props.children}</Modal>,
        document.getElementById('modal-root')
    )},
     {ReactDOM.createPortal(
         <Backdrop onConfirm={props.onConfirm}/>,
         document.getElementById("backdrop-root")
    )}



    </>

 }




export default CardModal
