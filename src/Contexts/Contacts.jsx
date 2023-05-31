import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { UserContext } from "./UserContext";

export const ContactContext = createContext({});

export const ContactProviders = ({ children }) => {
  const { user } = useContext(UserContext);
  const [contacts, setContacts] = useState([]);
  const [modal, setModal] = useState(false);
  const token = localStorage.getItem("@TOKEN");
  const [remove, setRemove] = useState([]);

  useEffect(() => {
    user && setContacts(user.contacts);
  }, [user]);

  const getContacts = async () => {
    if (token) {
      try {
        const res = await api.get("contacts/listContact", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setContacts(res.data);
      } catch (error) {
        console.log(error);
        setContacts([]);
      }
    }
  };

  useEffect(() => {
    getContacts();
  }, [remove]);

  const createContact = async (data) => {
    try {
      const res = await api.post("contacts/createContacts", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newContacts = [...contacts, res.data];
      setContacts(newContacts);
      toast.success("Contato cadastrado");
      setModal(false);
    } catch (error) {
      toast.error("Contato já existe");
    }
  };

  const submitContact = (data) => {
    createContact(data);
  };

  const deleteContact = async (id) => {
    try {
      await api.delete(`contacts/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Contato deletado");
      setRemove([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        submitContact,
        modal,
        setModal,
        contacts,
        deleteContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

ContactProviders.propTypes = {
  children: PropTypes.node.isRequired,
};
