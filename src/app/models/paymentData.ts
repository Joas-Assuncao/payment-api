export interface IPaymentData {
  object: string;
  id: string;
  dateCreated: string;
  customer: string;
  paymentLink: string | null;
  dueDate: string;
  value: number;
  netValue: number;
  billingType: string;
  canBePaidAfterDueDate: boolean;
  pixTransaction: string | null;
  status: string;
  description: string;
  externalReference: string;
  originalValue: number | null;
  interestValue: number | null;
  originalDueDate: string;
  paymentDate: string | null;
  clientPaymentDate: string | null;
  installmentNumber: number | null;
  transactionReceiptUrl: string | null;
  nossoNumero: string;
  invoiceUrl: string;
  bankSlipUrl: string;
  invoiceNumber: string;
  discount: {
    value: number;
    dueDateLimitDays: number;
  };
  fine: {
    value: number;
  };
  interest: {
    value: number;
  };
  deleted: boolean;
  postalService: boolean;
  anticipated: boolean;
  anticipable: boolean;
  refunds: IRefund[];
}

export interface IRefund {
  dateCreated: string;
  status: string;
  value: number;
  description: string;
  transactionReceiptUrl: string;
}
