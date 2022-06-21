import { ErrorMessage, Field } from "formik";
import { useState } from "react";
import Tooltips from "../../global/tooltip";

const MetaForm = () => {
  const [btnToggler, setBtnToggler] = useState("bi-plus-lg");

  const toggleButton = () => {
    if (btnToggler == "bi-plus-lg") setBtnToggler("bi-dash");
    else setBtnToggler("bi-plus-lg");
  };

  return (
    <>
      <div
        className="card card-secondary card-outline my-4"
        data-card-name="meta"
        data-hideattribute="ProductPage.HideInfoBlock"
        id="meta"
      >
        <div className="card-header with-border d-flex justify-content-between align-items-center">
          <button
            className="btn invisible w-100 h-auto text-top m-0 p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#metaTab"
            aria-expanded="true"
            aria-controls="metaTab"
            onClick={() => toggleButton()}
          >
            <div className="card-title row align-items-center visible">
              <i
                className="bi bi-meta col-1"
                style={{ fontSize: "25px", marginTop: "-20px" }}
              />
              <div className="px-3 fs-5 col text-start">Meta</div>
              <div className="col-1">
                <i className={`bi ${btnToggler}`} />
              </div>
            </div>
          </button>
        </div>
        <div className="collapse " id="metaTab">
          <div className="card-body">
            <div className="form-group row my-2">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end">
                  <label className="col-form-label col px-1" htmlFor="keywords">
                    Keywords
                  </label>
                  <Tooltips title="Short description is the text that is displayed in product list i.e. category / manufacturer pages." />
                </div>
              </div>
              <div className="col-md-9">
                <div className="input-group pe-3">
                  <Field
                    type="text"
                    className="form-control"
                    id="keywords"
                    name="keywords"
                  />
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="keywords" />
                </div>
              </div>
            </div>
            <div className="form-group row my-2">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="metaTitle"
                  >
                    Title
                  </label>
                  <Tooltips title="Short description is the text that is displayed in product list i.e. category / manufacturer pages." />
                </div>
              </div>
              <div className="col-md-9">
                <div className="input-group pe-3">
                  <Field
                    type="text"
                    className="form-control"
                    id="metaTitle"
                    name="metaTitle"
                  />
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="metaTitle" />
                </div>
              </div>
            </div>
            <div className="form-group row my-2">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="metaDescription"
                  >
                    Description
                  </label>
                  <Tooltips title="Short description is the text that is displayed in product list i.e. category / manufacturer pages." />
                </div>
              </div>
              <div className="col-md-9">
                <div className="input-group pe-3">
                  <Field
                    type="text"
                    className="form-control"
                    id="metaDescription"
                    name="metaDescription"
                  />
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="metaDescription" />
                </div>
              </div>
            </div>

            <div className="form-group row my-2">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="metaFriendlyPageName"
                  >
                    Friendly Page Name
                  </label>
                  <Tooltips title="Short description is the text that is displayed in product list i.e. category / manufacturer pages." />
                </div>
              </div>
              <div className="col-md-9">
                <div className="input-group ">
                  <Field
                    type="text"
                    className="form-control"
                    id="metaFriendlyPageName"
                    name="metaFriendlyPageName"
                  />
                  <div className="pt-2" style={{ height: "10px" }}>
                    <h2 className="required text-danger ">*</h2>
                  </div>
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="metaFriendlyPageName" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetaForm;
