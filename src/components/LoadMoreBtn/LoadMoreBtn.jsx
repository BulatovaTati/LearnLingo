import s from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ handleLoadMore }) => {
    return (
        <button type="button" className={s.loadMoreBtn} onClick={handleLoadMore}>
            Load more
        </button>
    );
};

export default LoadMoreBtn;
