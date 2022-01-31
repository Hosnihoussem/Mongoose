import React, { useState, useEffect } from "react";
import "./addEditContact.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact, editContact } from "../../redux/action/contactActions";
import { useNavigate } from "react-router-dom";
function AddEditContact() {
  const navigate = useNavigate();

  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const contacts = useSelector((state) => state.contactReducer.contact);

  const edit = useSelector((state) => state.contactReducer.edit);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.id]: e.target.value });
  };
  const handleEdit = (e) => {
    // e.preventDefault();
    dispatch(editContact(contacts._id, contact));
    navigate("/listof_contact");
  };
  const handleAdd = (e) => {
    // e.preventDefault();
    dispatch(addContact(contact));
    navigate("/listof_contact");
  };
  useEffect(() => {
    edit
      ? setContact({
          firstName: contacts.firstName,
          lastName: contacts.lastName,
          email: contacts.email,
        })
      : setContact(contact);
  }, []);
  return (
    <div className="form">
      <div className="title">Welcome</div>
      <div className="subtitle">Let's create your account!</div>
      <div className="input-container ic1">
        <input
          id="firstName"
          className="input"
          type="text"
          placeholder=" "
          onChange={handleChange}
          value={contact.firstName}
        />
        <div className="cut" />
        <label htmlFor="firstname" className="placeholder">
          First name
        </label>
      </div>
      <div className="input-container ic2">
        <input
          value={contact.lastName}
          id="lastName"
          className="input"
          type="text"
          placeholder=" "
          onChange={handleChange}
        />
        <div className="cut" />
        <label htmlFor="lastname" className="placeholder">
          Last name
        </label>
      </div>
      <div className="input-container ic2">
        <input
          id="email"
          value={contact.email}
          className="input"
          type="text"
          placeholder=" "
          onChange={handleChange}
        />
        <div className="cut cut-short" />
        <label htmlFor="email" className="placeholder">
          Email
        </label>
      </div>

      {edit ? (
        <div>
          {" "}
          <button type="text" className="submit" onClick={handleEdit}>
            EDIT
          </button>
        </div>
      ) : (
        <div>
          <button type="text" className="submit" onClick={handleAdd}>
            ADD
          </button>
        </div>
      )}
    </div>
  );
}

export default AddEditContact;