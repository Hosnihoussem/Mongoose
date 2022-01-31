import React from "react";
import {
  deleteContact,
  getOneContact,
  toggleTrue,
} from "../../redux/action/contactActions";
import "./card.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function Card({ contact }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-3">
        <div className="d-flex align-items-center">
          <div className="image">
            {" "}
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
              className="rounded"
              width={155}
            />{" "}
          </div>
          <div className="ml-3 w-100">
            <h4 className="mb-0 mt-0">
              {`${contact.firstName}     ${contact.lastName}`}
            </h4>{" "}
            <span>{contact.email}</span>
            <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
              <div className="d-flex flex-column">
                {" "}
                <span className="articles">Articles</span>{" "}
                <span className="number1">38</span>{" "}
              </div>
              <div className="d-flex flex-column">
                {" "}
                <span className="followers">Followers</span>{" "}
                <span className="number2">980</span>{" "}
              </div>
              <div className="d-flex flex-column">
                {" "}
                <span className="rating">Rating</span>{" "}
                <span className="number3">8.9</span>{" "}
              </div>
            </div>
            <div className="button mt-2 d-flex flex-row align-items-center">
              {" "}
              <button
                className="btn btn-sm btn-outline-primary w-100"
                onClick={() => {
                  dispatch(getOneContact(contact._id));
                  dispatch(toggleTrue());
                  navigate("/addedit_contact");
                }}
              >
                EDIT
              </button>{" "}
              <button
                className="btn btn-sm btn-primary w-100 ml-2"
                onClick={() => dispatch(deleteContact(contact._id))}
              >
                DELETE
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;