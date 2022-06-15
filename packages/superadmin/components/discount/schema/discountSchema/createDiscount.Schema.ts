import { string, object, number } from "yup";
import XRegExp from "xregexp";
import * as Yup from "yup";

export const discountSchema = object().shape({
  name:  string()
  .matches(
    XRegExp("^[\\pL.]+(?:\\s[\\pL]+)*$"),
    "This field should contain letters only"
  )
  .min(2, "This field must be at least 2 characters long")
  .max(50, "This field must be at most 50 characters long")
  .required("This field must not be empty"),
  type:  string()
  .min(2, "This field must be at least 2 characters long")
  .max(50, "This field must be at most 50 characters long")
  .required("This field must not be empty"),
  discountPercentage: number()
  .typeError('You must Select a Category')
  .required("This field must not be empty"),
  startDate: Yup.date()
  .required("This field must not be empty"),
  endDate: Yup.date()
  .required("This field must not be empty"),
  timesUsed: number(),


});