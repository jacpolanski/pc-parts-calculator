import Joi from "joi";

export const schemaPart = Joi.object({
  formPartName: Joi.string()
    .empty("")
    .min(3)
    .max(30)
    .required()
    .trim(true)
    .messages({
      "string.empty": `Part Name cannot be empty`,
      "string.min": `Minimum of {#limit} characters required`,
      "string.max": `Maximum of {#limit} characters allowed`,
      "any.required": `Part Name is required`,
    }),
  formPartCategory: Joi.string().required().messages({
    "string.empty": `Part Category cannot be empty`,
    "any.required": `Part Category id required`,
  }),
  formPartDetails: Joi.string().allow("").max(250).trim(true).messages({
    "string.min": `Minimum of {#limit} characters required`,
    "string.max": `Maximum of {#limit} characters allowed`,
  }),
  formPartPrice: Joi.number().messages({
    "string.empty": `Please enter Part price`,
    "any.required": `Please enter Part price`,
    "number.base": "Please enter Part price",
  }),
});
