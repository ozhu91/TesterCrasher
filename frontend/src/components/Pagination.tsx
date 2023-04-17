const Pagination = () => {
    return (
        <div className='clientsPage__pagination pagination'>
            <span className="material-icons pagination__arrow pagination__arrow_left">
            arrow_back_ios
            </span>
            <span className="pagination__page pagination__page_active">1</span>
            <span className="pagination__page">2</span>
            <span className="pagination__page">3</span>
            <span className="pagination__page">4</span>
            <span className="pagination__page">...</span>
            <span className="pagination__page">20</span>
            <span className="material-icons pagination__arrow pagination__arrow_right">
                arrow_forward_ios
            </span>
        </div>
    )
}

export default Pagination