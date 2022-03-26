import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { authActions } from '../../store/authSlice'
import Lupa from '../../assets/img/lupa.svg'
import { CustomLInk } from '../../helpers/customLink/CustomLInk'
import { BiChevronDown } from "react-icons/bi";
import {FaUserCircle} from 'react-icons/fa'
const activeClass =(navData)=> navData.isActive ? 'active' : 'nav';
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
					<Link to ='/'>TRELLO</Link>
					<ul>
						<NavLink className={activeClass} to='/workspace'> Рабочие пространства <BiChevronDown/></NavLink>
						<NavLink className={activeClass} to ='/recent'>Недавние <BiChevronDown/></NavLink>
						<NavLink className={activeClass} to = '/favorite'>В избранном<BiChevronDown/></NavLink>
						<CustomLInk className={'nav'} to ={'/archive'}>Archive<BiChevronDown/></CustomLInk>
					</ul>
           <div>
            	<button>Создать</button>
          </div>

				</div>

				<div>
					<div className='search'>
						<img src={Lupa} alt='search' />
						<input type="search" name="" id="" />
					</div>
				</div>
				<div className='profile'>
          <div>{email.email}</div>
		      <FaUserCircle onClick={toggleProfile} fontSize={'30px'}/>
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
  box-sizing: border-box;
	cursor: pointer;
   & a{
  color: white;
  margin: 10px;
  border-radius: 3px;
  padding-left: 15px;
  padding-right: 15px;
  text-decoration: none;


  }
  .nav.active{
     background-color: black;
  }
  .nav:visited {
  background-color: #ccc;
}
  .nav:hover{
  background-color: rgba(130, 130, 130, 0.549);

  }
  .active:focus,
  .active{
    color: violet;
    background-color: rgba(130, 130, 130, 0.549);
  }
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
      margin: 0;
      align-items:center;

		}
		img {
			width: 30px;
		}
		.h1 {
			font-size: 25px;
      color:white;
      text-decoration: none;
      cursor: pointer;
		}
		button {
			width: 75px;
			height: 32px;
			background: #787a79;
			color: #ffffff;
			border-radius: 6px;
			border: none;
      padding:0;
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
