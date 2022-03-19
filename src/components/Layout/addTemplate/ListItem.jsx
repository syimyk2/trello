import React,{useEffect, useRef, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { cardActions } from '../../../store/cardsSlice'
import Card from '../../UI/Card'
import { cardData } from './datas'

const ListItem = (props) => {
    const dispatch = useDispatch()
    // const items = useSelector((state)=>state.card.cardData)
    const [showAdder, setShowAdder] =useState(false)
    const [itemss, setItems] =useState([])
     let taskRef =useRef('')

 const showModalHandler =(e)=>{
 dispatch(cardActions.toggleCard(e.target.id))
    }

   const  addCardsHandler =(e)=>{
    if(taskRef.current.value===''){
        return
    }


     const cardsData = {
         task: taskRef.current.value,
         id: Math.random().toString(),
         completed: false,
     }
     setItems((prev)=>{
       return[
         ...prev,
         cardsData
       ]

     })
     dispatch(cardActions.addCardItem(cardsData))
     taskRef.current.value = ''
   }
console.log(itemss);
  return (
    <WrapperListItem>
        <p>{props.title}</p>
        <Cards>
            {itemss.map((el)=><Card onClick={showModalHandler} key={el.id} id={el.id} >{el.task}  <img src="https://www.clipartmax.com/png/middle/159-1594534_people-confuse-two-pencil-icons-pencil-edit-icon-png.png" alt="" /></Card>)}
        </Cards>

        {!showAdder ? <h1 className='toggle-adder' onClick={()=>setShowAdder(true)}> +  Добавить список</h1>: <div className='second-part'>
               <textarea ref={taskRef} type='text' placeholder='Вывести заголовок списка'/>
               <div>
               <button onClick={addCardsHandler} >Добавить карточку</button> <span><img onClick={()=>setShowAdder(false)} src="https://www.svgimages.com/svg-image/s5/x-icon.svg" alt="#" /></span>
               </div>
          </div> }

    </WrapperListItem>

  )
}

const Cards=styled.div`
display: flex;
flex-direction: column;

& div{
    margin-top: 0.5px;
    color: black;
    box-shadow: 0px 1px 0px 0px;
    width: 100%;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    height: 2rem;
    align-items: center;

}
& img{
    width: 20px;
    display: hidden;
}
& img:hover{
    display: show;
}

`
const WrapperListItem = styled.div`
background: #74718e;
display: inline-block;
padding: 0.5rem;
width: 270px;
border-radius: 5px;
margin-right: 10%;
cursor: pointer;



& h1{
 font-size: 94%;
background: #74718e;
padding-top: 0.5rem;
padding-bottom: 0.5rem;
margin-top: 5px;
width: 100%;
border-radius: 5px;

cursor: pointer;
}
& h1:hover{
    background: #acacac;
}

& p{
    margin-top: 0;
    padding-left: 00.3rem;
    font-size: 94%;
    color: #000040;
    font-weight: bold;
}

& textarea{
    padding:0.3rem;
    max-width: 15rem;
    width: 20rem;
    border-radius: 5px;
    max-height: 15rem;
    outline: none;
    min-height: 3rem;
    min-width: 15rem;

}
& .second-part div{
    display :flex;
    align-items: center;
    padding: 0.3rem;

}
& span{
 margin-left: 1rem;
}
& img{
    width: 20px;

}
& button{
    background-color: #0077c3;
    outline: none;
    color: white;
    border: none;

}
& button:hover{
    background: #0080d5;
}

`
export default ListItem
