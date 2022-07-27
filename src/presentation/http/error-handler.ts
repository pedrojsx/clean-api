import { BusinessError } from '@/domain/errors/business-error'

export default function ErrorHandler (): any {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value
    descriptor.value = async function (...args: any[]) {
      try {
        return await fn.apply(this, args)
      } catch (error) {
        if (error instanceof BusinessError) {
          return {
            statusCode: 400,
            body: { error: error.message }
          }
        }
        return {
          statusCode: 500,
          body: { error: 'Erro interno do servidor' }
        }
      }
    }
  }
}
