import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import { deleteBusiness } from '../../store/business';
import EditBusiness from './EditBusiness';
import Reviews from '../Review';
// import { getOneBusiness } from '../../store/business';
import './ReviewSlider.css'

const BusinessDetail = () => {
  const history = useHistory()
  const { businessId } = useParams()
  const business = useSelector(state => state.business[businessId]);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = (businessId) => {
    dispatch(deleteBusiness(businessId));
    history.push('/')
  };

  return (
    <div className='wrapper'>
      <div className='content'>
        <div className='bg-shape'>
          <img src='/images/stormtrooper.jpg' alt='' id="yoda"></img>
        </div>

        <div className='business-img'>
            <div className='business-img__item' id={businessId}>
              <img src={business.imageUrl} alt="" className='business-img__img'></img>
            </div>
        </div>
        <div className='business-slider'>
          <button className='prev disabled'>
            <span className='icon'>
              <i className="fa-solid fa-circle-arrow-left" style={{ fontSize: "25px" }}></i>
            </span>
          </button>
          <button className='next'>
            <span className='icon'>
              <i className="fa-solid fa-circle-arrow-right" style={{ fontSize: "25px" }}></i>
            </span>
          </button>
          <div className="business-slider__wrp swiper-wrapper">
            <div className='business-slider__item swiper-slide' data-target={businessId}>
              <div className='business-slider__card'>
                <img src={business.imageUrl} alt="" className='business-slider__cover'></img>
                <div className='business-slider__content'>
                  <h1 className='business-slider__content'>
                    {business.title}
                  </h1>
                  <span className='business-slider__description'><sup>{business.description}</sup></span>
                  <div className='business-ctr'>
                    <div className='business-labels'>
                    <div class="review-labels__title">Reserved spot for Reviews</div>
                    <button className='review-slider__fav js-fav'><span className='heart'></span>Reserved spot for Rating</button>

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
