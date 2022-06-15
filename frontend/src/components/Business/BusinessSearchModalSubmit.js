import { useState } from "react";
import { Modal } from "../../context/Modal"
import BusinessDetail from "./BusinessDetail"

export default function BusinessSearchModalSubmit({ business, reviews, sessionUser, setSearchWord }) {
    const businessObj = {id: business[0], title: business[1], description: business[2],
    location: business[3], imageUrl: business[4], ownerId: business[5]}
    const [showModal, setShowModal] = useState(true);
    return (
      <>
        {showModal && (
          <Modal onClose={() => [setShowModal(false), setSearchWord("")]}>
            <BusinessDetail business={businessObj} reviews={reviews} sessionUser={sessionUser} />
          </Modal>
        )}
      </>
    )
}
