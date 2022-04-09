import { useEffect } from "react";
import { Parallax, Pagination, Navigation } from "swiper";
import { getAllReviews} from "../../store/review";
import ReviewMenu from "./ReviewMenu";
import { useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SwiperStyles.css"
import CreateReviewModal from "./CreateReviewModal";


const Reviews = ({business, reviews, sessionUser }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllReviews())
    }, [dispatch])

    return (
        <>
        <Swiper
            style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            }}
            speed={600}
            parallax={true}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Parallax, Pagination, Navigation]}
            className="mySwiper">
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "backgroundImage":
              "url('/images/themandalorianthechild.jpeg')",
          }}
          data-swiper-parallax="-23%">
        </div>
          <SwiperSlide>
            <CreateReviewModal business={business} />
            <div className="title" data-swiper-parallax="-300">
                {business.title}
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
                {business.location}
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                {business.description}
              </p>
            </div>
          </SwiperSlide>
            {reviews?.filter(review => review.businessId === +business.id).map(review => (
                <SwiperSlide>
                <div key={review?.id}>
                <div className="title" data-swiper-parallax="-300">
                  {review.User.username}
                </div>
                <div className="subtitle" data-swiper-parallax="-200">
                  {review?.rating}
                </div>
                <div className="text" data-swiper-parallax="-100">
                  <ReviewMenu review={review} sessionUser={sessionUser} business={business} />
                  <p>{review?.content}</p>
                </div>
                </div>
                </SwiperSlide>
            ))}
        </Swiper>
        </>
    )
}

export default Reviews;
