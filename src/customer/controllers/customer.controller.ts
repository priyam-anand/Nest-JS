import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCustomerDto } from '../dto';
import { CustomerService } from '../services/customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get('search/:id')
  getCustomer(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customerService.getCustomerById(id);
    if (customer) return customer;
    throw new HttpException('Customer not found', HttpStatus.BAD_REQUEST);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomer(@Body() body: CreateCustomerDto) {
    return this.customerService.createCustomer(body);
  }
}
