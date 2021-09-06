import styles from "./ContactList.module.css";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={styles.contact_list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contact}>
          <p>
            {name}: <span>{number}</span>
          </p>
          <button
            type="button"
            className={styles.delete_btn}
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export { ContactList };
