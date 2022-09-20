import React from 'react';
import styled from 'styled-components';

import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

const AboutPage = () => {
	return (
		<main>
			<PageHero currentPage='About' />
			<Wrapper className='page section section-center'>
				<img src={aboutImg} alt='Desk Image' />
				<article>
					<div className='title'>
						<h2>Our Story</h2>
						<div className='underline'></div>
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
						commodo ligula eget dolor. Aenean massa. Cum sociis natoque
						penatibus et magnis dis parturient montes, nascetur ridiculus mus.
						Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
						Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
						aliquet nec, vulputate
					</p>
				</article>
			</Wrapper>
		</main>
	);
};

const Wrapper = styled.section`
	display: grid;
	gap: 4rem;
	img {
		width: 100%;
		display: block;
		border-radius: var(--radius);
		height: 500px;
		object-fit: cover;
	}
	p {
		line-height: 2;
		max-width: 45em;
		margin: 0 auto;
		margin-top: 2rem;
		color: var(--clr-grey-5);
	}
	.title {
		text-align: left;
	}
	.underline {
		margin-left: 0;
	}
	@media (min-width: 992px) {
		grid-template-columns: 1fr 1fr;
	}
`;

export default AboutPage;
