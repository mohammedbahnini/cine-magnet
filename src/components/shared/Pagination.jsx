import { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";



export default function Pagination(props) {

    const [paginationItems, setpaginationItems] = useState([]);


    const {currentPage , pages , pagesToShow , querySearch  } = props ;


    const createPaginationItems = () => {

            const items = [];

            items.push({ text: 'First', pageNumber: 1 });
            if( currentPage > 1)
                items.push({ text: 'Prev', pageNumber: currentPage  - 1});



            if (pages - (currentPage - 1 + pagesToShow) > 0) // break in end
            {

                for (let i = currentPage; i <= (currentPage + pagesToShow - 1) - 1; i++) {
                    
                        items.push({ text: i , pageNumber: i });
                }
                
                items.push({ text: '...', pageNumber: -1 }, { text: pages, pageNumber: pages });

            }
            else { // break in begining
                if (pagesToShow < pages) {
                    items.push({ text: pages - pagesToShow, pageNumber: pages - pagesToShow }, { text: '...', pageNumber: -1 });
                }

                for (let i = pages - pagesToShow + 2; i <= pages; i++) {

                    if (i > 0) {
                        items.push({ text: i, pageNumber: i });
                    }

                }
            }

            items.push({ text: 'Last', pageNumber: pages });

            setpaginationItems([...items]);


    }

    useEffect(() => {
        createPaginationItems();

    }, [querySearch ])



    return (
        <div className="pagination">
            <div className="pagination-items">

                { pages > 0 && paginationItems.map((item, index) => {
                    return (
                        <Link to={`/all-movies?query=${querySearch}&page=${item.pageNumber}`}
                            className={['pagination-item ', currentPage === parseInt(item.text) ? 'active' : ''].join(' ')} key={index}
                        >
                            {item.text}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}