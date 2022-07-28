import { FindOneUser, InsertUser } from '@/data/protocols/user/user-protocols'
import { BusinessError } from '@/domain/errors/business-error'
import { UserModel } from '@/domain/models/user/user-model'

export class CreateUser implements InsertUser {
  constructor (
    private readonly userRepository: FindOneUser & InsertUser
  ) { }

  async insert (data: UserModel.Input): Promise<UserModel.Output> {
    const user = await this.userRepository.findOne(data.email)
    if (user) {
      throw new BusinessError('Email em uso')
    }

    const result = await this.userRepository.insert(data)
    return result
  }
}
