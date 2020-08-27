import {DefaultCrudRepository} from '@loopback/repository';
import {Login, LoginRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LoginRepository extends DefaultCrudRepository<
  Login,
  typeof Login.prototype.userid,
  LoginRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Login, dataSource);
  }
}
