import {
  IsNumberString,
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateAddressDto } from './CreateAddress.dto';

export class CreateCustomerDto {
  @IsNumberString()
  id: number;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}
