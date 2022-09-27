import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';

import { useProductsContext } from '../context/products_context';
import { single_product_url } from '../utils/constants';
import { formatPrice } from '../utils/helpers';
import {
	Loading,
	Error,
	PageHero,
	ProductImages,
	Stars,
	AddToCart,
} from '../components/';

const SingleProductPage = () => {
	const {
		single_product_loading,
		single_product_error,
		single_product,
		fetchProduct,
	} = useProductsContext();
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		fetchProduct(`${single_product_url}${id}`);
	}, [id]);

	useEffect(() => {
		if (single_product_error) {
			setTimeout(() => {
				navigate('/');
			}, 3000);
		}
	}, [single_product_error]);

	const { name, price, description, stock, stars, reviews, company, images } =
		single_product;

	if (single_product_loading) return <Loading />;
	if (single_product_error) return <Error />;

	return (
		<Wrapper>
			<PageHero currentPage={name} product={true} />
			<div className='section section-center page'>
				<Link to='/products' className='btn'>
					Back To Products
				</Link>
				<div className='product-center'>
					<ProductImages images={images} />
					<section className='content'>
						<h2>{name}</h2>
						<Stars />
						<h5 className='price'>{formatPrice(price)}</h5>
						<p className='desc'>{description}</p>
						<p className='info'>
							<span>Available: </span>
							{stock > 0 ? 'Available' : 'Out Of Stock'}
						</p>
						<p className='info'>
							<span>SKU: </span>
							{id}
						</p>
						<p className='info'>
							<span>Brand: </span>
							{company}
						</p>
						<hr />
						{stock > 0 && <AddToCart />}
					</section>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	.product-center {
		display: grid;
		gap: 4rem;
		margin-top: 2rem;
	}
	.price {
		color: var(--clr-primary-5);
	}
	.desc {
		line-height: 2;
		max-width: 45em;
	}
	.info {
		text-transform: capitalize;
		width: 300px;
		display: grid;
		grid-template-columns: 125px 1fr;
		span {
			font-weight: 700;
		}
	}

	@media (min-width: 992px) {
		.product-center {
			grid-template-columns: 1fr 1fr;
			align-items: center;
		}
		.price {
			font-size: 1.25rem;
		}
	}
`;

export default SingleProductPage;
