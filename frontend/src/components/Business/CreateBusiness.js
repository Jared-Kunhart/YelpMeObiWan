import React, { useState } from "react";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const business = {
        title,
        description,
        location,
        imageUrl,
    };

    await dispatch(createBusiness(business));

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
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </label>
      <button type="submit">Create Business</button>
      <button type="button" onClick={handleCancelClick}>Cancel</button>
    </div>
    </form>
  );
}

export default CreateBusinessPage;
