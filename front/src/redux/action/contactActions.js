import {
    GETALLCONTACTS,
    GETONECONTACT,
    TOGGLETRUE,
    TOGGLEFALSE,
  } from "../type";
  import axios from "axios";
  export const getAllContacts = () => async (dispatch) => {
    try {
      const res = await axios.get("/api/contacts");
      console.log(res.data.contacts);
      dispatch({ type: GETALLCONTACTS, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
  
  export const addContact = (fromData) => async (dispatch) => {
    try {
      await axios.post("/api/contacts", fromData);
      dispatch(getAllContacts());
    } catch (error) {
      console.log(Error);
    }
  };
  export const editContact = (id, fromData) => async (dispatch) => {
    try {
      await axios.put(`/api/contacts/${id}`, fromData);
      dispatch(getAllContacts());
    } catch (error) {
      console.log(Error);
    }
  };
  export const deleteContact = (id) => async (dispatch) => {
    try {
      await axios.delete(`/api/contacts/${id}`);
      dispatch(getAllContacts());
    } catch (error) {
      console.log(Error);
    }
  };
  export const getOneContact = (id) => async (dispatch) => {
    try {
      const res = await axios.get(`/api/contacts/${id}`);
      dispatch({ type: GETONECONTACT, payload: res.data });
      console.log(res.data);
    } catch (error) {
      console.log(Error);
    }
  };
  export const toggleTrue = () => {
    return { type: TOGGLETRUE };
  };
  export const toggleFalse = () => {
    return { type: TOGGLEFALSE };
  };