export default function Hero(){
    return (
        <>
            <section className="hero">

                <div className="container">
                    <div className="content">
                        <h1 className="title">Some text over here</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum enim ex ducimus ipsa amet nesciunt
                            maxime, corporis tempora animi consectetur repudiandae id eum voluptate, minus rerum obcaecati
                            officiis iste sit?</p>

                        <div className="search-container">

                            <input type="text" placeholder="Quick Search" className='nav-search-input' />
                                <button><span>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </span> Search</button>
                        </div>
                    </div>


                </div>


            </section>
        </>
    )
}