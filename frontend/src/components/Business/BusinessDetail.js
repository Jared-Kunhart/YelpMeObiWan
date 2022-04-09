import Reviews from '../Review';
import './BusinessDetail.css'

const BusinessDetail = ({ business, sessionUser, reviews }) => {

  return (
  <div className='wrapper'>
    <div className='content'>
      <div className='bg-shape'>
        <img src='/images/stormtrooper.jpg' alt='' id="stormtrooper"></img>
      </div>
      <div className='content-wrapper'>
        <div className='business-id' id={business.id}>
          <img src={business.imageUrl} alt="" className='business_cover'></img>
        </div>
          <h1 className='business-title'>
            {business.title}
          </h1>
          <div className='business-description'>
            <p>{business.description}</p>
          </div>
        </div>
        <div className="review_wrapper"><Reviews business={business} reviews={reviews} sessionUser={sessionUser} /></div>
      </div>
    </div>
  );
};
export default BusinessDetail;
