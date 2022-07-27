import { FindAllUsers } from '@/data/protocols/user/user-protocols'
import { UserModel } from '@/domain/models/user/user-model'

export class FindUsers implements FindAllUsers {
  constructor (
    private readonly usersRepository: FindAllUsers
  ) { }

  async findAll (): Promise<UserModel.Output[]> {
    return await this.usersRepository.findAll()
  }
}
