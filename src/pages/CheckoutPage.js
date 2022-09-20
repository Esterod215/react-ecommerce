import React from 'react';
import styled from 'styled-components';

import { PageHero } from '../components';

const CheckoutPage = () => {
	return (
		<main>
			<PageHero currentPage='Checkout' />
			<Wrapper className='page'>
				<h3>Checkout</h3>
			</Wrapper>
		</main>
	);
};

const Wrapper = styled.section``;

export default CheckoutPage;
