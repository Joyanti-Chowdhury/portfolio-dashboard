export * from "./sidebar.type";
import {
  loginValidationSchema,
  projectCreateValidation,
  projectUpdateValidation,
  signValidationSchema,
} from "@/validation";
import { z } from "zod";

export type TSignupField = z.infer<typeof signValidationSchema>;
export type TLoginField = z.infer<typeof loginValidationSchema>;
export type TProjectField = z.infer<typeof projectCreateValidation>;
export type TProjectUpdateField = z.infer<typeof projectUpdateValidation>;

export type TProjectData = {
  id: string;
  name: string;
  image: string;
  clientSiteLink: string;
  serverSiteLink: string;
  liveSiteLink:string,

};
