import React, { useState } from 'react';
import styled from 'styled-components';

const ProductImages = ({ images }) => {
	const [mainImage, setMainImage] = useState(images ? images[0].url : '');

	return (
		<Wrapper>
			{images ? (
				<>
					<img src={mainImage} alt='Main Image' className='main' />
					<div className='gallery'>
						{images
							.filter((image) => image.url !== mainImage)
							.map((galleryImage) => {
								return (
									<img
										src={galleryImage.url}
										key={galleryImage.id}
										alt={galleryImage.fileName}
										onClick={() => setMainImage(galleryImage.url)}
									/>
								);
							})}
					</div>
				</>
			) : (
				''
			)}
		</Wrapper>
	);
};

const Wrapper = styled.section`
	.main {
		height: 600px;
	}
	img {
		width: 100%;
		display: block;
		border-radius: var(--radius);
		object-fit: cover;
	}
	.gallery {
		margin-top: 1rem;
		display: grid;
		justify-content: center;
		grid-template-columns: repeat(4, 1fr);
		column-gap: 1rem;
		img {
			height: 100px;
			cursor: pointer;
		}
	}
	.active {
		box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
	}
	@media (max-width: 576px) {
		.main {
			height: 300px;
		}
		.gallery {
			img {
				height: 50px;
			}
		}
	}
	@media (min-width: 992px) {
		.main {
			height: 500px;
		}
		.gallery {
			img {
				height: 75px;
			}
		}
	}
`;

export default ProductImages;
