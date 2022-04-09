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
  const [imageUrl, setImageUrl] = useState(business.imageUrl);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    let errors = [];
    if (title.length < 1) errors.push("You need a name for your business Scoundrel")
    if (title.length > 50) errors.push("Business name can't be longer than 50 parsecs")
    if (description.length < 1) errors.push("Describe your business for future citizens")
    if (location.length < 1) errors.push("Put a location so citizens know where to find your business")
    if (location.length > 50) errors.push("Location can't be longer than 50 parsecs")
    if (imageUrl.match(/(jpe?g|tiff|png|gif|bmp)/) === null) errors.push('You need to prove a way for citizens to see your business')
    setErrors(errors)
  }, [title, description, location, imageUrl])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
        ...business,
        title,
        description,
        location,
        imageUrl,
    };

    await dispatch(editBusiness(payload));
    setShowMenu(false);
  };

  const handleCancelClick = (e) => {
    e.preventDefault()
    setShowMenu(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error) => <li key={error}>{error}</li>)}
      </ul>
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
      <label>
        Image URL:
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </label>
      <button type="submit" disabled={errors.length > 0}>Update Business</button>
      <button id="cancel" type="button" onClick={handleCancelClick}>Cancel</button>
    </div>
    </form>
  );
}

export default EditBusinessPage;
