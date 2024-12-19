import { PaymentStatus } from "@prisma/client";

export type PaymentMethod = 'bkash' | 'nagad';

export interface  Order {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string | null;
  transactionId: string;
  amount: number;
  paymentStatus: PaymentStatus;
  orderStatus: PaymentStatus;
  paymentMethod: PaymentMethod;
  userAgreement: boolean;
  createdAt: Date;
  bookName:string,
  bookId:string;
  slug:string;
  bookImage:string;
}
export interface OrderResponse {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  transactionId: string;
  amount: number;
  paymentStatus: PaymentStatus;
  orderStatus: PaymentStatus;
  paymentMethod: PaymentMethod;
  userAgreement: boolean;
  createdAt: Date;
  book:{
    id: string; name: string; slug: string; folderName:string; fileName:string;
  }
}
export interface SkeletonProps {
    className?: string;
  }
  
  export interface DashboardCardProps {
    isLoading?: boolean;
  }