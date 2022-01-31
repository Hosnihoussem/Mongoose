import {
    GETALLCONTACTS,
    GETONECONTACT,
    TOGGLEFALSE,
    TOGGLETRUE,
  } from "../type";
  const initState = {
    contacts: [],
    contact: {},
    edit: false,
    ayoub: {},
  };
  const contactReducer = (state = initState, action) => {
    switch (action.type) {
      case GETALLCONTACTS:
        return {
          ...state,
          contacts: action.payload.contacts,
        };
      case GETONECONTACT:
        return {
          ...state,
          contact: action.payload.contact,
        };
      case TOGGLETRUE:
        return {
          ...state,
          edit: true,
        };
      case TOGGLEFALSE:
        return {
          ...state,
          edit: false,
        };
      default:
        return state;
    }
  };
  
  export default contactReducer;