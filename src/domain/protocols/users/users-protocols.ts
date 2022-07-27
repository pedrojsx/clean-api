import { UserModel } from '@/domain/models/user/user-model'

export interface UserProtocols {
  findAll: () => Promise<Array<UserModel.Output>>
  findOne: (email: string) => Promise<UserModel.Output>
}
