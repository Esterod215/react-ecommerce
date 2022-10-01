import React from 'react';

import { useFilterContext } from '../context/filter_context';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
	const { filteredProducts, gridView } = useFilterContext();
	if (filteredProducts.length < 1)
		return (
			<h5 style={{ textTransform: 'capitalize' }}>
				Sorry, no products matched your search
			</h5>
		);

	if (gridView) {
		return <GridView filteredProducts={filteredProducts}></GridView>;
	}
	return <ListView filteredProducts={filteredProducts} />;
};

export default ProductList;
