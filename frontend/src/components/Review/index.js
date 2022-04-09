import { useEffect, useState } from "react";
import { Parallax, Pagination, Navigation } from "swiper";
import { getAllReviews, deleteReview, editReview } from "../../store/review";
import { useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from "swiper/react";
import CreateReviewPage from "./CreateReview";
import EditReviewPage from './EditReview';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Reviews = ({business, reviews, sessionUser }) => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllReviews())
    }, [dispatch])

    const handleDelete = (reviewId) => {
        dispatch(deleteReview(reviewId));
    };

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
              "url(/images/themandalorianthechild.jpeg)",
          }}
          data-swiper-parallax="-23%">
        </div>
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
                    <p>{review?.content}</p>
                </div>
                </div>
                </SwiperSlide>
            ))}
        <div>
        </div>
        </Swiper>
        </>
    )
}

export default Reviews;
