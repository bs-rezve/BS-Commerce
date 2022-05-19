import { regexConfig } from 'config/regex';
import * as Joi from 'joi';
import { UpdatedUser } from 'src/entity/user';

export const UserUpdateSchema = Joi.object<UpdatedUser, true>({
  firstName: Joi.string(),
  lastName: Joi.string(),
  provider: Joi.string(),
  providerData: Joi.object(),
  additionalProviderData: Joi.object(),
  phone: Joi.string().regex(regexConfig.phone).messages({
    "string.pattern.base": `Please Enter the Valid Phone Number!`,
  }),
  address: Joi.object().keys(({
    id: Joi.string(),
    addressLine1: Joi.string().required(),
    addressLine2: Joi.string(),
    city: Joi.string().required(),
    country: Joi.string().required(),
    postCode: Joi.string().required(),
  })),
  gender: Joi.string(),
  active: Joi.boolean(),
  status: Joi.string()
});

