import React, { useState, useContext } from 'react'
import Menu from '@components/Menu.jsx'
import '@styles/Header.scss'
import menuIcon from '@icons/icon_menu.svg'
import yardSaleLogo from '@logos/logo_yard_sale.svg'
import shoppingCardIcon from '@icons/icon_shopping_cart.svg'
import AppContext from '../context/AppContext'
import MyOrder from '../containers/MyOrder'

const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(false)
	const [toggleOrders, setToggleOrders] = useState(false)
	const { state } = useContext(AppContext)

	const handleToggleMenu = () => {
		toggleOrders && setToggleOrders(false)
		setToggleMenu(!toggleMenu)
	}

	const handleToggleOrders = () => {
		toggleMenu && setToggleMenu(false)
		setToggleOrders(!toggleOrders)
	}

	return (
		<nav>
			<img src={menuIcon} alt='menu' className='menu' />
			<div className='navbar-left'>
				<img src={yardSaleLogo} alt='logo' className='nav-logo' />
				<ul>
					<li>
						<a href='/'>All</a>
					</li>
					<li>
						<a href='/'>Clothes</a>
					</li>
					<li>
						<a href='/'>Electronics</a>
					</li>
					<li>
						<a href='/'>Furnitures</a>
					</li>
					<li>
						<a href='/'>Toys</a>
					</li>
					<li>
						<a href='/'>Others</a>
					</li>
				</ul>
			</div>
			<div className='navbar-right'>
				<ul>
					<li
						className='navbar-email'
						style={{ cursor: 'pointer' }}
						onClick={handleToggleMenu}
					>
						platzi@example.com
					</li>
					<li
						className='navbar-shopping-cart'
						style={{ cursor: 'pointer' }}
						onClick={handleToggleOrders}
					>
						<img src={shoppingCardIcon} alt='shopping cart' />
						{state.cart.length > 0 && <div>{state.cart.length}</div>}
					</li>
				</ul>
			</div>
			{toggleMenu && <Menu />}
			{toggleOrders && <MyOrder />}
		</nav>
	)
}

export default Header
