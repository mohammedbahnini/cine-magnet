import { useEffect, useState } from "react";



export default function Pagination() {

    const [paginationItems, setpaginationItems] = useState([]);
    const [pages, setPages] = useState(10);
    const [pagesToShow, setPagesToShow] = useState(6);
    const [current, setCurrent] = useState(1);


    const createPaginationItems = () => {

            const items = [];

            items.push({ text: 'First', pageNumber: 1 });


            if (pages - (current - 1 + pagesToShow) > 0) // break in end
            {
                for (let i = current; i <= (current + pagesToShow - 1) - 1; i++) {

                    items.push({ text: i, pageNumber: i });
                }
                items.push({ text: '...', pageNumber: -1 }, { text: pages, pageNumber: pages });

            }
            else { // break in begining
                if (pagesToShow < pages) {
                    items.push({ text: pages - pagesToShow, pageNumber: pages - pagesToShow }, { text: '...', pageNumber: -1 });
                }

                for (let i = pages - pagesToShow + 2; i <= pages; i++) {

                    if (i != 0) {
                        items.push({ text: i, pageNumber: i });
                    }

                }
            }

            items.push({ text: 'Last', pageNumber: pages });

            setpaginationItems([...items]);
            console.log(items);
        

    }

    useEffect(() => {
        createPaginationItems();
    }, [current])



    return (
        <div className="pagination">
            <div className="pagination-items">
                {paginationItems.map((item, index) => {
                    return (
                        <a
                            className={['pagination-item ', current === parseInt(item.text) ? 'active' : ''].join(' ')} key={index}
                            onClick={() => setCurrent(item.pageNumber !== -1 ? item.pageNumber : current) }
                        >
                            {item.text}
                        </a>
                    )
                })}
            </div>
        </div>
    )
}