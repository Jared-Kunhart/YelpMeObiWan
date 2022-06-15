import { useState } from "react";
import { Modal } from "../../context/Modal"
import BusinessDetail from "./BusinessDetail"

export default function BusinessSearchModal({ business, reviews, sessionUser, setSearchWord }) {
    const businessObj = {id: business[0], title: business[1], description: business[2],
    location: business[3], imageUrl: business[4], ownerId: business[5]}
    const [showModal, setShowModal] = useState(false);
    return (
      <>
        <span
        className="business-li"
        key={business?.id}
        value={business?.title}
        onClick={() => [setShowModal(true), console.log("clicked")]}
        >
            <div id="searched_business_name">
                {business[1]}
            </div>
            <div id="searched_business_location">
                {business[3]}
            </div>
        </span>
        {showModal && (
          <Modal onClose={() => [setShowModal(false), setSearchWord("")]}>
            <BusinessDetail business={businessObj} reviews={reviews} sessionUser={sessionUser} />
          </Modal>
      )}
      </>
    )
}
