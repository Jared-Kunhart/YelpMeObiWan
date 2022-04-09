import { useEffect, useState } from 'react';
import EditReviewPage from './EditReview';
import DeleteReviewModal from './ReviewDeleteModal';
import CreateReviewPage from './CreateReview';

export default function ReviewMenu({ review, sessionUser }) {
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
      };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
          setShowMenu(false);
        };
      }, [showMenu]);

      // const ownsReview = sessionUser && sessionUser.id === review.User.id;

      const Owner = () => {
        return (
        <div className="review_div">
        <button onClick={openMenu}>Edit Review</button>
        {showMenu && (
          <>
            <EditReviewPage review={review} setShowMenu={setShowMenu} />
            <DeleteReviewModal review={review}/>
          </>
        )}
      </div>
      )
      }

      const NotOwner = () => {
        return (
        <div className="review_div">
          <button onClick={openMenu}>Post Review</button>
          {showMenu && (
            <>
              <CreateReviewPage />
            </>
          )}
        </div>
        )
      }


return (
    <>
      {sessionUser && sessionUser.id === review.User.id ? ( <Owner /> ) : ( <NotOwner /> ) }
    </>
  )
}
