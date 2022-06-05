/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: UserWithRelations, schemaOptions: { includeRelations: true })
 */
export interface UserWithRelations {
  datebirth: string;
  document: string;
  document_number: string;
  document_series: string;
  foreigner: string;
  id?: number;
  mail: string;
  name: string;
  otchestvo?: string;
  password: string;
  phone_number: string;
  surname: string;

  [key: string]: any;
}
