import { FaUserCircle } from 'react-icons/fa';
import { IoMdStar } from 'react-icons/io';

import s from './CommentList.module.css';

const CommentList = ({ reviews }) => {
    return (
        <ul className={s.commentList}>
            {reviews.map(({ reviewer_name, reviewer_rating, comment }, idx) => (
                <li key={idx} className={s.commentItem}>
                    <div className={s.commentItemWrap}>
                        <div className={s.commentItemAvatar}>
                            <FaUserCircle size={30} />
                        </div>
                        <div>
                            <p className={s.commentItemName}>{reviewer_name}</p>
                            <div className={s.ratingContainer}>
                                <IoMdStar className={s.starIcon} />
                                <span className={s.commentRating}>{reviewer_rating}</span>
                            </div>
                        </div>
                    </div>
                    <p className={s.commentItemText}>{comment}</p>
                </li>
            ))}
        </ul>
    );
};

export default CommentList;
