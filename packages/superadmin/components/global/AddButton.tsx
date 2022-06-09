import Link from "next/link";
import React, { FC } from "react";

interface Props {
  title: string;
  link: string;
}

const AddButton: FC<Props> = ({ title, link }) => {
  return (
    <div className="btn btn-primary ">
      <Link href={link}>
        <a className="text-white text-decoration-none">{title}</a>
      </Link>
    </div>
  );
};

export default AddButton;
