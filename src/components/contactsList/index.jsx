import { Licontact, SectionTech, UlTech } from "./style";
import { GrFormTrash } from "react-icons/gr";
import { useContext } from "react";
import { ContactContext } from "../../Contexts/Contacts";

export const ContactList = () => {
  const { contacts, setModal, deleteContact } = useContext(ContactContext);

  return (
    <SectionTech>
      <div>
        <p>Meus contatos</p>
        <button onClick={() => setModal(true)}>+</button>
      </div>
      <UlTech>
        {contacts?.map((contact) => (
          <Licontact key={contact.id}>
            <h3>{contact.name}</h3>
            <p>{contact.email}</p>
            <div>
              <p>{contact.fone}</p>
              <button onClick={() => deleteContact(contact.id)}>
                <GrFormTrash />
              </button>
            </div>
          </Licontact>
        ))}
      </UlTech>
    </SectionTech>
  );
};
