import DeleteReviewModal from './ReviewDeleteModal';
import EditReviewModal from './EditReviewModal';
import CreateReviewModal from './CreateReviewModal'

export default function ReviewMenu({ review, sessionUser, business }) {
      const Owner = () => {
        return (
        <div className="review_div">
          <>
            <EditReviewModal review={review} />
            <DeleteReviewModal review={review}/>
          </>
      </div>
        )
      }

      const NotOwner = () => {
        return (
        <div id='post_review_div' className="review_div">
            <>
              <CreateReviewModal business={business} />
            </>
        </div>
        )
      }




return (
    <>
      {sessionUser && sessionUser.id === review.User.id ? ( <Owner /> ) : ( <NotOwner /> ) }
    </>
  )
}
