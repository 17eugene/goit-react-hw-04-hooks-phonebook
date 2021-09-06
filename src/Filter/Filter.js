import styles from "./Filter.module.css";

function Filter({ value, onChange }) {
  return (
    <div className={styles.filter_wrapper}>
      <label className={styles.filter_label}>
        Find contact by name
        <input
          type="text"
          name="filter"
          className={styles.filter_input}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export { Filter };
