import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from './Product';
import './Products.css'
import Loading from '../Shared/Loading'

const Products = () => {
    let itemsPerPage = 3;
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const fetchInventory = async () => {
            setLoading(true);
            await fetch('https://desolate-reaches-30083.herokuapp.com/product')
                .then(res => res.json())
                .then(data => setProducts(data))
            setLoading(false);
        }
        fetchInventory();
    }, [])



    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(products.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(products.length / itemsPerPage));
    }, [products, itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
    };


    return (
        <div className='mx-auto px-0 lg:px-24'>
            <h1 className='text-2xl text-neutral text-center mt-10'>Our Manufactured Products</h1>
            {loading ? <Loading></Loading> :
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mx-auto my-5'>
                    {currentItems &&
                        currentItems.map(product => <Product
                            key={product._id}
                            product={product}
                        >
                        </Product>)
                    }
                </div>
            }
            <div className='flex justify-center items-center'>
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />
            </div>
        </div>
    );
};

export default Products;