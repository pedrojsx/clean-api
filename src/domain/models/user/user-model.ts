export namespace UserModel {
  export type Input = {
    email: string
    password: string
  }

  export type Output = {
    email: string
    password: string
  } | null
}
