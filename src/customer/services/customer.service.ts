import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from '../dto';
import { Customer } from '../types';

@Injectable()
export class CustomerService {
  users: Customer[] = [
    {
      id: 1,
      email: 'priyam27.anand@gmail.com',
      name: 'priyam1',
    },
    {
      id: 2,
      email: 'priyam27.anand@gmail.com',
      name: 'priyam2',
    },
    {
      id: 3,
      email: 'priyam27.anand@gmail.com',
      name: 'priyam3',
    },
    {
      id: 4,
      email: 'priyam27.anand@gmail.com',
      name: 'priyam4',
    },
    {
      id: 5,
      email: 'priyam27.anand@gmail.com',
      name: 'priyam5',
    },
  ];

  getCustomerById(id: number) {
    return this.users.find((user) => user.id == id);
  }

  createCustomer(customer: CreateCustomerDto) {
    this.users.push(customer);
  }
}
