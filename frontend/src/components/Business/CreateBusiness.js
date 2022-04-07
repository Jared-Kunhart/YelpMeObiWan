import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBusiness } from "../../store/business";


function CreateBusinessPage({ setShowMenu }) {
  const dispatch = useDispatch();
  const businesses = useSelector(state => Object.values(state.business))
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    let errors = [];
    if (title.length < 1) errors.push("You need a name for your Business scoundrel.")
    if (title.length > 50) errors.push("Can't be longer than 50 parsecs.")
    if (description.length < 1) errors.push("Describe your Business for future citizens.")
    if (location.length < 1) errors.push("Put a location so citizens know where to find your Business.")
    if (location.length > 50) errors.push("Can't be longer than 50 parsecs.")
    if (imageUrl.match(/(jpe?g|tiff|png|gif|bmp)/) === null) errors.push('You need to prove a way for citizens to see your Business.')
    setErrors(errors)
  }, [title, description, location, imageUrl])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const business = {
        title,
        description,
        location,
        imageUrl,
    };

    await dispatch(createBusiness(business));
    setShowMenu(false)
    reset();
  };

  const handleCancelClick = (e) => {
    e.preventDefault()
    setShowMenu(false)
  };

  const reset = () => {
    setTitle("");
    setDescription("");
    setLocation("");
    setImageUrl("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error) => <li key={error}>{error}</li>)}
      </ul>
    <div id="businessForm">
      <label>
        Name:
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
      <button type="submit" disabled={errors.length > 0}>Create Business</button>
      <button type="button" onClick={handleCancelClick}>Cancel</button>
    </div>
    </form>
  );
}

export default CreateBusinessPage;
