import React, { useState } from "react";

import styles from "./AddForm.module.css";

function AddForm({ submitHandler }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const inputChange = (e) => {
    switch (e.currentTarget.name) {
      case "name":
        setName(e.currentTarget.value);
        break;

      case "number":
        setNumber(e.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    submitHandler({ name: name, number: number });
    setName("");
    setNumber("");
  };

  return (
    <div>
      <form className={styles.form} onSubmit={formSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            onChange={inputChange}
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <label className={styles.form}>
          Number
          <input
            className={styles.input}
            type="tel"
            name="number"
            value={number}
            onChange={inputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button type="submit" className={styles.add_btn}>
          Add contact
        </button>
      </form>
    </div>
  );
}

// class AddForm extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       name: "",
//       number: "",
//     };
//   }

//   handleChange = (e) => {
//     this.setState({
//       [e.currentTarget.name]: e.currentTarget.value, //в значение артибута 'name' у инпута положиди знаение 'value'
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.submitHandler(this.state);
//     this.setState({ name: "", number: "" });
//   };

//   render() {
//     return (
//       <div>
//         <form className={styles.form} onSubmit={this.handleSubmit}>
//           <label className={styles.label}>
//             Name
//             <input
//               className={styles.input}
//               type="text"
//               onChange={this.handleChange}
//               name="name"
//               value={this.state.name}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//               required
//             />
//           </label>

//           <label className={styles.form}>
//             Number
//             <input
//               className={styles.input}
//               type="tel"
//               name="number"
//               value={this.state.number}
//               onChange={this.handleChange}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//               required
//             />
//           </label>

//           <button type="submit" className={styles.add_btn}>
//             Add contact
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

export { AddForm };
