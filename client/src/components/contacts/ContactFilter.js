import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
const ContactFilter = () => {
  const contactContext = useContext(ContactContext);

  const { filterContacts, clearFilter, filtered } = contactContext;
  const text = useRef(null);

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    } else {
    }
  });

  const onChange = e => {
    // if (e.target.value !== "") {
    //   filterContacts(e.target.value);
    // } else {
    //   clearFilter();
    // }
    e.preventDefault();
    console.log(text);
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        onChange={onChange}
        placeholder='Filter Contacts...'
      />
    </form>
  );
};

export default ContactFilter;
