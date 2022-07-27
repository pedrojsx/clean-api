export namespace LoginModel {
  export type Input = {
    email: string
    password: string
  }
  export type Output = {
    email: string | null | undefined
    token: string
  } | null
}
