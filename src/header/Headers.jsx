import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { Button } from '../UI/Button'
// import { Input } from '../UI/Input'
import styled from 'styled-components'
import { authActions } from '../store/authSlice'
// import Coontainer from '../UI/Container'
// import Lupa from '../../assets/SVG/lupa.svg'

const Header = () => {
  const dispatch = useDispatch()
  const email = useSelector((state)=>state.auth.userProfile)
  const toggleProfile =(e)=>{
   dispatch(authActions.showProfile(true))
  }
	return (
		// <Coontainer>
			<HeaderDiv>
				<div className='block_for_icon_and_ul'>
					<img src='https://img.icons8.com/color/48/000000/trello.png' />
					<h1>TRELLO</h1>
					<ul>
						<li>Рабочие пространства</li>
						<li>Недавние</li>
						<li>В избранном</li>
						<li>Шаблоны</li>
					</ul>
					{/* <Button>Создать</Button> */}
					<button>create</button>
				</div>

				<div>
					<div className='search'>
						{/* <img src={Lupa} alt='' /> */}
						{/* <Input placeholder='Search' type='search' /> */}
						<input type="search" name="" id="" />
					</div>
				</div>
				<div onClick={toggleProfile} className='profile'>
          <i>{email.email}</i>
					<img src="https://www.nicepng.com/png/detail/59-590507_taco-taco-trello.png" alt="" />
				</div>
			</HeaderDiv>
		// </Coontainer>
	)
}
const HeaderDiv = styled.div`
	height: 50px;
	margin: 0 auto;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background: #565958;
	cursor: pointer;
	.block_for_icon_and_ul {
		display: flex;
		justify-content: space-around;
		align-items: center;
		h1 {
			color: #ffffff;
		}
		ul {
			display: flex;
			padding: 35px;
			li {
				list-style: none;
				padding: 15px;
				color: #ffffff;
			}
		}
		img {
			width: 30px;
		}
		h1 {
			font-size: 25px;
		}
		button {
			width: 75px;
			height: 32px;
			background: #787a79;
			color: #ffffff;
			border-radius: 6px;
			border: none;
			&:hover {
				opacity: 0.8;
			}
		}
	}
	.profile img{
     width: 30px
	}
	.search {
		display: flex;
		background: #787a79;
		width: 250px;
		height: 34px;
		border-radius: 6px;
		padding: 2px;
		input {
			background: none;
			border: none;
			outline: none;
			padding: 5px;
			font-size: 16px;
			&::placeholder {
				color: #ffffff;
			}
		}
		img {
			width: 30px;
		}
	}
`

export default Header
