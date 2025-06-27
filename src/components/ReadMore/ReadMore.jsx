import { useState, useRef } from 'react';
import s from './ReadMore.module.css';
import CommentList from '../CommentList/CommentList';

const ReadMore = ({ reviews, experience }) => {
    const [isHidden, setIsHidden] = useState(true);
    const contentRef = useRef(null);

    const handleHidden = () => setIsHidden(prev => !prev);

    return (
        <>
            <div ref={contentRef} className={`${s.content} ${isHidden ? s.hidden : s.visible}`}>
                <p className={s.experience}>{experience}</p>
                <CommentList reviews={reviews} />
            </div>

            <button type="button" className={s.btnReadMore} onClick={handleHidden}>
                {isHidden ? 'Read more' : 'Read less'}
            </button>
        </>
    );
};

export default ReadMore;
