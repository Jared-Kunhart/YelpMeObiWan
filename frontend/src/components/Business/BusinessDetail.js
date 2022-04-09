import Reviews from '../Review';
import './BusinessDetail.css'

const BusinessDetail = ({ business, sessionUser, reviews }) => {

  return (
  <div className='wrapper'>
    <div className='content'>
      <div className='content-wrapper'>
        <div className='business-id' id={business.id}>
          <img src={business.imageUrl} alt="" className='business_img'></img>
        </div>
        </div>
        <div className="review_wrapper"><Reviews business={business} reviews={reviews} sessionUser={sessionUser} /></div>
      </div>
    </div>
  );
};
export default BusinessDetail;
