import {Entity, model, property} from '@loopback/repository';

@model()
export class Login extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  userid?: number;

  @property({
    type: 'string',
  })
  password?: string;


  constructor(data?: Partial<Login>) {
    super(data);
  }
}

export interface LoginRelations {
  // describe navigational properties here
}

export type LoginWithRelations = Login & LoginRelations;
