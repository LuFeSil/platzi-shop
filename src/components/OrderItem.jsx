import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import '@styles/OrderItem.scss'
import closeIcon from '@icons/icon_close.png'
import AppContext from '../context/AppContext'

const OrderItem = ({ product, indexValue }) => {
	const { removeFromCart } = useContext(AppContext)

	const handleRemoveItem = item => {
		removeFromCart(item)
	}
	return (
		<div className='OrderItem'>
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img
				style={{ cursor: 'pointer' }}
				src={closeIcon}
				alt='close'
				onClick={() => handleRemoveItem(indexValue)}
			/>
		</div>
	)
}

OrderItem.propTypes = {
	product: PropTypes.object,
	indexValue: PropTypes.number,
}

export default OrderItem
