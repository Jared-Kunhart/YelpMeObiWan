import { useEffect, useState } from "react";
import { getAllReviews, deleteReview, editReview } from "../../store/review";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import { Modal } from '../../context/Modal';
import CreateReviewPage from "./CreateReview";
import EditReviewPage from './EditReview'

const Reviews = () => {
    const dispatch = useDispatch();
    const { businessId } = useParams()
    const [showModal, setShowModal] = useState(false);
    const reviews = useSelector(state => Object.values(state.review))
    useEffect(() => {
        dispatch(getAllReviews())
    }, [dispatch])

    const handleDelete = (reviewId) => {
        dispatch(deleteReview(reviewId));
    };

    return (
        <>
        <div>
            {reviews?.filter(review => review.businessId === +businessId).map(review => (
                <div key={review?.id}>
                    {review?.content}
                <button onClick={() => setShowModal(true)}>Edit</button>
                {showModal && (
                  <Modal onClose={() => setShowModal(false)}>
                    <EditReviewPage review={review} hideModal={() => setShowModal(false)} />
                  </Modal>
                )}
                <button onClick={() => handleDelete(review?.id)} className='delete-button'>
                Delete
                </button>
                </div>
            ))}
        </div>
        <div>
            <CreateReviewPage businessId={businessId} />
        </div>
        </>
    )
}

export default Reviews;
