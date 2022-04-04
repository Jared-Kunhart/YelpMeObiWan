import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { createBusiness } from "../../store/business";
// import './SignupForm.css'

function CreateBusinessPage() {
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

//   useEffect(() => {
//     let errors = []
//     if (title.length < 1) errors.push("Name field is required")
//     if (title.length > 50) errors.push("Name must be no greater than 50 characters.")
//     if (location.length < 1) errors.push("Name field is required")
//     if (imageUrl.length < 1) errors.push("Name field is required")
//     setErrors(errors)
//   }, [title, location, imageUrl])

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
    </div>
    </form>
  );
}

export default CreateBusinessPage;