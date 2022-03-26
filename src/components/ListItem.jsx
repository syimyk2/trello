import React,{useEffect, useRef, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Card from './UI/Card'
import Input from './UI/Input'
import {BiAlignRight} from 'react-icons/bi'
import {BiPencil} from 'react-icons/bi'
import {getTodos, putTodos } from '../store/todosSlice'
import { cardActions } from '../store/cardsSlice'


const ListItem = (props) => {
    const dispatch = useDispatch()
    const [todoItems, setTodoItems] =useState([])
    const [showAdder, setShowAdder] =useState(false)
     let taskRef =useRef('')

 const showModalHandler =(e)=>{
 dispatch(cardActions.toggleCard(e.target.id))
    }
   const  onChange=(e)=>{

    }

   const  addCardsHandler =(e)=>{
     const id = e.target.id
    if(taskRef.current.value===''){
        return
    }
     const todosData = {
         task: taskRef.current.value,
         id: Math.random().toString(),
         completed: false,
     }
     setTodoItems((prev)=>{
       return[
         ...prev,
         todosData,
       ]
     })
    dispatch(cardActions.addCardItem(todosData))

     taskRef.current.value = ''
   }


  return (
    <WrapperListItem key={props.id} >
         <div className='list_header'>
           <Input
         value={props.title}
        type='text'
        placeholder='Ввести заголовок списка'
        onChange={onChange}
        // autoFocus
        />
        <div>
           <BiAlignRight color='black'/>
        </div>

       </div>
        <Cards>
            {todoItems.map((el)=><Card className={'card'} onClick={showModalHandler} key={el.id} id={el.id} >{el.task}<BiPencil className='edit'/> </Card>)}
        </Cards>

        {!showAdder ? <h1 className='toggle-adder' onClick={()=>setShowAdder(true)}> +  Добавить список</h1>: <div className='second-part'>
               <textarea ref={taskRef} type='text' placeholder='Вывести заголовок списка'/>
               <div>
               <button id={props.id} onClick={addCardsHandler} >Добавить карточку</button> <span><img onClick={()=>setShowAdder(false)} src="https://www.svgimages.com/svg-image/s5/x-icon.svg" alt="#" /></span>
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
    font-size: 11px;
    display: flex;
    justify-content: space-between;
    height: 5px;
    align-items: center;

}
 .card .edit{
   opacity:0;
}
.card:hover .edit{
opacity:1;
}

`
const WrapperListItem = styled.div`
background: #bbbbbb;
padding: 0.5rem;
width: 200px;
border-radius: 5px;
margin-right: 50px ;
cursor: pointer;

.list_header{
  display: flex;
  justify-content: space-between;
}
.list_header input{
  width: 155px;
  padding-top: 0;
}

& h1{
 font-size: 11px;
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
    font-size: 11px;
    color: #000040;
    font-weight: bold;
}

& textarea{
    padding:0.3rem;
    max-width: 11.5rem;
    width: 8rem;
    border-radius: 5px;
    max-height: 15rem;
    outline: none;
    min-height: 3rem;
    min-width: 11.5rem;

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
    width: 17px;

}
& button{
    background-color: #0077c3;
    outline: none;
    color: white;
    border: none;
    font-size: 11px;

}
& button:hover{
    background: #0080d5;
}

`
export default ListItem
