import { useEffect, useState } from 'react';
import Reviews from '../Review';
import './BusinessDetail.css'
import CreateReviewPage from '../Review/CreateReview';
import EditReviewPage from '../Review/EditReview';

const BusinessDetail = ({ business, sessionUser, reviews }) => {
  console.log(sessionUser)
  console.log(reviews)
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
    let sneakyDiv = document.querySelector("#root > main > nav > div.businessCard")
    sneakyDiv.addEventListener('click', closeMenu)

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


  const reviewButton = () => {
    const reviewBelongsToUser = reviews.find(review => sessionUser.id === review.userId)
    if (reviewBelongsToUser) {
      <button onClick={openMenu}>Edit a Review</button>
      {showMenu && (
      <div className="editReview">
        <EditReviewPage setShowMenu={setShowMenu} />
      </div>
      )}
    } else {
      <button onClick={openMenu}>Post Review</button>
      {showMenu && (
      <div className="postReview">
        <CreateReviewPage setShowMenu={setShowMenu} />
      </div>
      )}
    }
  }


  return (
    <div className='wrapper'>
      <div className='content'>
        <div className='bg-shape'>
          <img src='/images/stormtrooper.jpg' alt='' id="yoda"></img>
        </div>

        <div className='business-img'>
            <div className='business-img__item' id={business.id}>
              <img src={business.imageUrl} alt="" className='business-img__img'></img>
            </div>
        </div>

        <div className='business-slider'>
          <div className="business-slider__wrp swiper-wrapper">
            <div className='business-slider__item swiper-slide' data-target={business.id}>
              <div className='business-slider__card'>
                <img src={business.imageUrl} alt="" className='business-slider__cover'></img>
                <div className='business-slider__content'>
                  <h1 className='business-slider__content'>
                    {business.title}
                  </h1>
                  <button>Review</button>
                  <span className='business-slider__description'><sup>{business.description}</sup></span>
                  <div className='business-ctr'>
                    <div className='business-labels'>
                    <div className="review-labels__title"><Reviews business={business} reviews={reviews} sessionUser={sessionUser} /></div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BusinessDetail;
