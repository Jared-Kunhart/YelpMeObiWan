import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { editBusiness } from "../../store/business";
import './index.css'

function EditBusinessPage({ business, setShowMenu }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(business.title);
  const [description, setDescription] = useState(business.description);
  const [location, setLocation] = useState(business.location);
  const [newImage, setNewImage] = useState("");
  const [errors, setErrors] = useState([]);
  const [changed, setChanged] = useState(false)

  // useEffect(() => {
  //   let errors = [];

    // if (imageUrl.match(/(jpe?g|tiff|png|gif|bmp)/) === null) errors.push('You need to prove a way for citizens to see your business')
  //   setErrors(errors)
  // }, [title, description, location, imageUrl])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitErrors = [];

    if (title.length < 1) submitErrors.push("You need a name for your business Scoundrel")
    if (title.length > 50) submitErrors.push("Business name can't be longer than 50 parsecs")
    if (description.length < 1) submitErrors.push("Describe your business for future citizens")
    if (location.length < 1) submitErrors.push("Put a location so citizens know where to find your business")
    if (location.length > 50) submitErrors.push("Location can't be longer than 50 parsecs")

    if (submitErrors.length) return setErrors(submitErrors)

    const payload = new FormData();
    payload.append("title", title);
    payload.append("description", description);
    payload.append("location", location);
    payload.append("image", newImage);

    const response = await dispatch(editBusiness({payload, id: business?.id}))

    if(response.errors) {
        return setErrors([response.errors])
    }
    setShowMenu(false);
  };

  const handleCancelClick = (e) => {
    e.preventDefault()
    setShowMenu(false);
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    setNewImage(file)
    setChanged(true)
  };

  return (
    <form id="edit_business_form" onSubmit={handleSubmit}>
      {errors.length > 0 && (
          <ul className="errors-ul">
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
      )}
    <div id="businessForm">
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <label className="submit-bttn">
              Update an Image for your Business:
                    <input id="update_business_input" type="file" onChange={updateFile} />
                </label>
      <button type="submit">Update Business</button>
      <button id="cancel" type="button" onClick={handleCancelClick}>Cancel</button>
    </div>
    </form>
  );
}

export default EditBusinessPage;
