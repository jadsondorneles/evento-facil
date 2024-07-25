export type MessagesByField = {
  field: string
  messages: string[]
}

export type FormError = {
  message: string
  response: {
    data: {
      message: string
      messagesByField?: MessagesByField[]
    }
  }
}
