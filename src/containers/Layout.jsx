import React from 'react'
import PropTypes from 'prop-types'
import Header from '@components/Header'

const Layout = ({ children }) => {
	return (
		<div className='Layout'>
			<Header />
			{children}
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.any,
}

export default Layout
