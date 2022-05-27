import { FC, useState } from "react";

interface Props {
  labelOn: string;
  labelOff: string;
}

const Conditional: FC<Props> = ({ labelOn, labelOff }) => {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      {isChecked ? labelOn : labelOff}
    </label>
  );
};

export default Conditional;
