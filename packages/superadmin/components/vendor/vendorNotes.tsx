import React, { FC } from "react";
import { noteList } from "../../utils/typs";
import InputField from "../global/inputField";
import TableInfo from "../global/table";
// import RewardsCreateForm from "./rewardForm";

interface Props {
  noteList: noteList[] | [];
  values: any;
}

const VendorNotes: FC<Props> = ({ noteList, values }) => {
  const thead = ["Created on", "Note", "Delete"];
  return (
    <div className="">
      <TableInfo tHead={thead} list={noteList}>
        {noteList?.map((data, index) => (
          <tr key={index}>
            <td className="text-center">{data.created}</td>
            <td>{data.note}</td>
            <td className="text-center">
              <button type="button" className="btn btn-danger">
                <i className="bi bi-trash pe-1 align-middle"></i>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </TableInfo>
      <div className="card mt-2">
        <div className="card-header fs-5">Add vendor note</div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-12">
              <InputField
                value={values?.note}
                label="Note"
                placeholder="Note"
                required
                type="text"
                name="note"
              />
            </div>
            <div className="col-lg-12 text-center">
              <button
                type="submit"
                className="btn btn-primary mt-1"
                onSubmit={() => {}}
              >
                Add vendor note
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorNotes;
