import { FindAllUsers, FindOneUser } from '@/data/protocols/user/user-protocols'
import { UserModel } from '@/domain/models/user/user-model'

export class UserRepository implements FindAllUsers, FindOneUser {
  private users: Array<UserModel.Output> = [
    {
      email: 'userdev@onfly.com.br',
      password: '123456789'
    },
    {
      email: 'johndoe@onfly.com.br',
      password: '123456789'
    },
    {
      email: 'ayrtonsenna@onfly.com.br',
      password: '123456789'
    }
  ]

  async findOne (email: string): Promise<UserModel.Output> {
    const user = this.users.find(user => user?.email === email)

    return user || null
  }

  async findAll (): Promise<Array<UserModel.Output>> {
    return this.users || null
  }
}
