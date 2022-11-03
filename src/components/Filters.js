import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const { allProducts, filters, updateFilters, clearFilters } =
    useFilterContext();

  const categories = getUniqueValues(allProducts, "category");
  const companies = getUniqueValues(allProducts, "company");
  const colors = getUniqueValues(allProducts, "colors");

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={e => e.preventDefault()}>
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="serach"
              className="search-input"
              value={filters.text}
              onChange={updateFilters}
            />
          </div>

          <div className="form-control">
            <h5>Category</h5>
            <div>
              {categories.map(category => {
                return (
                  <button
                    key={category}
                    type="button"
                    name="category"
                    className={
                      filters.category === category.toLowerCase()
                        ? "active"
                        : ""
                    }
                    onClick={updateFilters}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="form-control">
            <h5>Companies</h5>
            <select
              className="company"
              name="company"
              value={filters.company}
              onChange={updateFilters}
            >
              {companies.map(company => {
                return <option key={company}>{company}</option>;
              })}
            </select>
          </div>
          <div className="form-control">
            <h5>Colors</h5>
            <div className="colors">
              {colors.map(color => {
                return (
                  <button
                    key={color}
                    data-color={color}
                    name="color"
                    className={`
											${color === "all" ? "all-btn" : "color-btn"}
											${filters.color === color ? "active" : ""}
										`}
                    style={{ backgroundColor: color !== "all" ? color : "" }}
                    onClick={updateFilters}
                  >
                    {color === "all" ? "all" : ""}
                    {color !== "all" && filters.color === color ? (
                      <FaCheck />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="form-control">
            <h5>Price</h5>
            <p className="price">{formatPrice(filters.price)}</p>
            <input
              type="range"
              name="price"
              min={filters.min_price}
              max={filters.max_price}
              value={filters.price}
              onChange={updateFilters}
            />
          </div>
          <div className="form-control shipping">
            <label htmlFor="shipping">Free Shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={updateFilters}
              checked={filters.shipping}
            />
          </div>
        </form>
        <button className="clear-btn" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: flex;
    align-items: center;
    text-transform: capitalize;
    font-size: 1rem;
    max-width: 200px;

    label {
      padding-right: 0.5rem;
    }
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
