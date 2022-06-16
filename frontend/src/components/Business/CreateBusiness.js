import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBusiness } from "../../store/business";


function CreateBusinessPage({ setShowMenu }) {
  const dispatch = useDispatch();
  const businesses = useSelector(state => Object.values(state.business))
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState([]);

  // useEffect(() => {
  //   let errors = [];
  //   if (title.length < 1) errors.push("You need a name for your Business scoundrel.")
  //   if (title.length > 50) errors.push("Can't be longer than 50 parsecs.")
  //   if (description.length < 1) errors.push("Describe your Business for future citizens.")
  //   if (location.length < 1) errors.push("Put a location so citizens know where to find your Business.")
  //   if (location.length > 50) errors.push("Can't be longer than 50 parsecs.")
  //   if (image.match(/(jpe?g|tiff|png|gif|bmp)/) === null) errors.push('You need to prove a way for citizens to see your Business.')
  //   setErrors(errors)
  // }, [title, description, location, image])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitErrors = [];

    if (title.length < 1) submitErrors.push("You need a name for your Business scoundrel.")
    if (title.length > 50) submitErrors.push("Can't be longer than 50 parsecs.")
    if (description.length < 1) submitErrors.push("Describe your Business for future citizens.")
    if (location.length < 1) submitErrors.push("Put a location so citizens know where to find your Business.")
    if (location.length > 50) submitErrors.push("Can't be longer than 50 parsecs.")
    if (image.length < 1) submitErrors.push("You need to prove a way for citizens to see your Business.")
    // if (image.match(/(jpe?g|tiff|png|gif|bmp)/) === null) submitErrors.push('You need to prove a way for citizens to see your Business.')

    if (title && description && location && image) {
      setErrors([]);
      const response = await dispatch(createBusiness({ title, description, location, image }))

      if (response.errors) {
        return setErrors([response.errors])
      }

      setShowMenu(false)
      reset();

    } else {
      return setErrors(submitErrors);
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault()
    setShowMenu(false)
  };

  const reset = () => {
    setTitle("");
    setDescription("");
    setLocation("");
    setImage("");
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  }

  return (
    <form onSubmit={handleSubmit}>
      {errors.length > 0 && (
          <ul className="errors-ul">
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
      )}
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
            <label className="submit-bttn">
                Upload an Image of your Business:
              <input id="choose_file_input" type="file" onChange={updateFile} />
            </label>
      <button id="create" type="submit">Create Business</button>
      <button id="cancel_create_business" type="button" onClick={handleCancelClick}>Cancel</button>
    </div>
    </form>
  );
}

export default CreateBusinessPage;
