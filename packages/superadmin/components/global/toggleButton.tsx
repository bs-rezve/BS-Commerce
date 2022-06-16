import React, { FC } from "react";
import styles from "../../styles/Input.module.css";

interface Props {
  setIsOpen: any;
}

const ToggleButton: FC<Props> = ({ setIsOpen }) => {
  const toggleChecked = () => {
    setIsOpen((val: boolean) => !val);
  };
  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={toggleChecked} />
      <span className={styles.slider}></span>
    </label>
  );
};

export default ToggleButton;
