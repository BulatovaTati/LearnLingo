import CustomButton from '../CustomButton/CustomButton';
import s from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ handleLoadMore }) => {
    return (
        <CustomButton modClass={s.loadMore} fn={handleLoadMore}>
            Load More
        </CustomButton>
    );
};

export default LoadMoreBtn;
