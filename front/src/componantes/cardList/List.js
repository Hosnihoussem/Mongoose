import React from "react";
import Card from "../card/Card";
import { useSelector } from "react-redux";
function List() {
  const contacts = useSelector((state) => state.contactReducer.contacts);
  return (
    <div>
      {contacts.map((contact) => (
        <Card key={contact._id} contact={contact} />
      ))}
    </div>
  );
}

export default List;