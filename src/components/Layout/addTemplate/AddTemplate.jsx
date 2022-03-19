import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { cardActions } from '../../../store/cardsSlice'
import CardModal from './CardModal'
import ListItem from './ListItem'

const AddTemplate = () => {
    const dispatch = useDispatch()
    const cardModalIsShow= useSelector((state)=>state.card.cardModal.cardIsShow)
    const showAdder = useSelector((state)=>state.card.showAdder)
    const addNewList = useSelector((state)=>state.card.cardData.data)


    let listTitleRef = useRef('')

    const addNewListHandler =(e)=>{
        e.preventDefault()
        dispatch(cardActions.addNewList(listTitleRef.current.value))
        listTitleRef.current.value = ''
        dispatch(cardActions.toggleAdder(false))

    }

  console.log(addNewList);
  return (
      <MainContent>
       {cardModalIsShow && <CardModal />}
       {addNewList.map((el)=> <ListItem key={el.id} id={el.id} title={el.title}/>)}

      <AddTemplateWrapper showAdder={showAdder}>
          {!showAdder ? <div className='toggle-adder' onClick={()=>dispatch(cardActions.toggleAdder(true))}> +  Добавить список</div>:<div className='second-part'>
              <form onSubmit={addNewListHandler}>
            <input ref={listTitleRef} type='text' placeholder='Вывести заголовок списка'/>
                        <div>
                           <button type='submit'>Добавить список</button>
                           <span>
                            <img onClick={()=> dispatch(cardActions.toggleAdder(false))} src="https://www.svgimages.com/svg-image/s5/x-icon.svg" alt="#" />
                           </span>
                        </div>
              </form>

          </div> }



      </AddTemplateWrapper>
      </MainContent>


  )
}
const MainContent = styled.main`
background:  transparent;
/* max-width: 1400px; */
margin: 0 auto;
display: flex;
align-items: start;
padding: 3rem;






`
const AddTemplateWrapper = styled.div`
background: rgba(128, 128, 128, 0.562);
display: inline-block;
padding: 0.5rem;
width: 250px;
border-radius: 5px;

cursor: pointer;


.toggleAdder{
    height: 40px
    font-size: 94%;
}
:hover{
    background: ${(props)=> props.showAdder ? '': '#9f9f9f' } ;
}

& input{
    padding:1rem;
    width: 15rem;
    height: 2rem;
    border-radius: 5px;
    border: 1px solid #0077c3;
    outline: none;
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

export default AddTemplate
