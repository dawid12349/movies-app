import usePaginationArray from '../../hooks/usePaginationArray';
import {v4 as uuidv4} from 'uuid';
import styles from './Pagination.module.css';
function Pagination({page, handlePageChange, totalPages }) {
    const currentPage = page || 1;
    const pages = usePaginationArray(currentPage,  totalPages, 1);
    return (
        <div className={styles.pagination }>
            {pages.map(npage => (
                <div href='#' key={uuidv4()}
                    onClick={() => handlePageChange(npage)}
                    className={currentPage === npage ? styles.active : 'page-item'}>
                    {npage}
                </div>
            ))}
        </div>
    )
}

export default Pagination;
