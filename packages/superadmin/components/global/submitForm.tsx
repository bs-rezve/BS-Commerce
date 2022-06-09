import React, { useRef, useEffect, FC } from "react";

interface Props {
  children: any;
  isDisabled: boolean;
  title: string;
  isHiddenSaveWithContinue: boolean;
  submitBtnText: string;
  continueBtnText: string;
  isHiddenSave: boolean;
  getProps: any;
}

const SubmitForm: FC<Props> = ({
  children,
  isDisabled,
  title,
  isHiddenSaveWithContinue,
  isHiddenSave,
  submitBtnText,
  continueBtnText,
  getProps,
}) => {
  const saveBtnRef = useRef<HTMLButtonElement | any>();
  const saveBtnClicker = () => {
    if (saveBtnRef && saveBtnRef.current) {
      saveBtnRef.current.click();
    }
  };

  const saveWithContinueBtnRef = useRef<HTMLButtonElement | any>();
  const saveWithContinueClick = () => {
    if (saveWithContinueBtnRef && saveWithContinueBtnRef.current) {
      saveWithContinueBtnRef.current.click();
    }
  };

  useEffect(() => {
    const propsObj = {
      saveBtnRef,
      saveWithContinueBtnRef,
    };
    getProps(propsObj);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="">
      <div className="my-3 d-flex justify-content-between">
        <div className="d-flex">
          <div className="fs-2 me-2">{title}</div>
          <div className="d-flex align-items-center">
            <i className="bi bi-arrow-left-circle-fill"></i>
            <span className="fs-5 ms-1">back to {title} list</span>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className={isHiddenSave ? "d-none" : "btn btn-primary me-2"}
            onClick={saveBtnClicker}
            ref={saveBtnRef}
            disabled={isDisabled}
          >
            <i className="bi bi-sd-card pe-1 align-middle"></i>
            {submitBtnText ? submitBtnText : "Save"}
          </button>
          <button
            type="submit"
            onClick={saveWithContinueClick}
            ref={saveWithContinueBtnRef}
            className={isHiddenSaveWithContinue ? "d-none" : "btn btn-primary"}
          >
            <i className="bi bi-sd-card pe-1 align-middle"></i>
            {continueBtnText ? continueBtnText : ""}
          </button>
        </div>
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
};

export default SubmitForm;
