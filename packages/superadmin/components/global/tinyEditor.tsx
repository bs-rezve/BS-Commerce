import { Editor } from "@tinymce/tinymce-react";
import { FC } from "react";
import styles from "../../styles/Input.module.css";

interface Props {
  label?: string;
  name?: string;
  value?: string;
}

const TinyEditor: FC<Props> = ({ label, name, value }) => {
  const handleEditorChange = (content: any, editor: any) => {
    console.log("Content was updated:", content);
  };
  return (
    <>
      <div className="form-group row mb-2">
        <div className="col-md-3">
          <div className={styles.label_wrapper}>
            <label className={styles.col_form_label} htmlFor={name}>
              {label}
            </label>
            <div
              title=""
              data-toggle="tooltip"
              className="ico-help"
              data-original-title="The customer's email."
            >
              <i className="fas fa-question-circle"></i>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <Editor
            apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
            //onInit={(evt, editor) => console.log(editor.getContent())}
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 200,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={handleEditorChange}
            // tinymceScriptSrc="/path/to/tinymce.min.js"
          />
        </div>
      </div>
    </>
  );
};

export default TinyEditor;
