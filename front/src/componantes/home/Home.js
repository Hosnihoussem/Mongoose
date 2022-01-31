import React from "react";
import { useDispatch } from "react-redux";
import "./home.css";
import { Link } from "react-router-dom";
import { getAllContacts, toggleFalse } from "../../redux/action/contactActions";
import { useNavigate } from "react-router-dom";
function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <body>
      <nav class="navMenu">
        <a href="#">Home</a>
        <a
          style={{ color: "white", cursor: "pointer" }}
          onClick={() => {
            dispatch(toggleFalse());
            navigate("/addedit_contact");
          }}
        >
          addedit
        </a>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        <Link
          to="/listof_contact"
          style={{ color: "white" }}
          onClick={() => {
            dispatch(getAllContacts());
            navigate("/listof_contact");
          }}
        >
          contact
        </Link>
        <div class="dot"></div>
      </nav>
    </body>
  );
}

export default Home;