export interface InterfaceReview {
  nickName: string
  email: string
  rate: number
  recommend: string
  reviewTitle: string
  publicEmail: boolean
  productReview: string
  editReview?: () => void
  deleteReview?: () => void
}

export const defaultReview: InterfaceReview = {
  nickName: '',
  email: '',
  rate: 0,
  recommend: '',
  reviewTitle: '',
  publicEmail: false,
  productReview: ''
}

export interface InterfaceInput {
  title: string
  placeholder: string
  type: 'text' | 'textarea' // Union type Ex: type MyType = string | number | boolean;
  value: string
  onChange?: (value: string) => void
}

export interface InterfaceRadio {
  titleOne: string
  titleTwo: string
  extendClass: string
  check: string
  onChange?: (value: string) => void
}
