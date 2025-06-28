import { useState, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import LanguageLevelList from '../LanguageLevelList/LanguageLevelList';
import CommentList from '../CommentList/CommentList';
import s from './ReadMore.module.css';

const ReadMore = ({ levels, reviews, experience, name, surname, avatar_url }) => {
    const [isHidden, setIsHidden] = useState(true);
    const contentRef = useRef(null);

    const handleHidden = () => setIsHidden(prev => !prev);
    const { openModal } = useOutletContext();

    const handleOpenModal = () => {
        openModal('booking', {
            name: name,
            surname: surname,
            avatar_url: avatar_url,
        });
    };

    return (
        <>
            <div ref={contentRef} className={`${s.content} ${isHidden ? s.hidden : s.visible}`}>
                <p className={s.experience}>{experience}</p>
                <CommentList reviews={reviews} />
            </div>

            <button type="button" className={s.btnReadMore} onClick={handleHidden}>
                {isHidden ? 'Read more' : 'Read less'}
            </button>

            <LanguageLevelList levels={levels} />
            {!isHidden && (
                <button type="button" className={s.btnBook} onClick={handleOpenModal}>
                    Book trial lesson
                </button>
            )}
        </>
    );
};

export default ReadMore;
