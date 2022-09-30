import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import '@styles/ProductItem.scss'
import addToCardIcon from '@icons/bt_add_to_cart.svg'
import AppContext from '../context/AppContext'

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext)

	const handleClick = item => {
		addToCart(item)
	}
	return (
		<div className='ProductItem'>
			<img src={product.images[0]} alt={product.title} />
			<div className='product-info'>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure
					style={{ cursor: 'pointer' }}
					onClick={() => handleClick(product)}
				>
					<img src={addToCardIcon} alt='' />
				</figure>
			</div>
		</div>
	)
}

ProductItem.propTypes = {
	product: PropTypes.object,
}

export default ProductItem
