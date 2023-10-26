export interface ICustomer {
  object: string;
  id: string;
  dateCreated: string;
  name: string;
  email: string;
  cpfCnpj: string;
  phone: string;
  mobilePhone: string;
  address: string;
  addressNumber: string;
  complement: string;
  province: string;
  postalCode: string;
  city: string;
  deleted: boolean;
  additionalEmails: string | null;
  externalReference: string;
  notificationDisabled: boolean;
  groups?: IGroup[];
}

export interface IGroup {
  name: string;
}

export interface ICustomerData {
  object: string;
  hasMore: boolean;
  totalCount: number;
  limit: number;
  offset: number;
  data: ICustomer[];
}
