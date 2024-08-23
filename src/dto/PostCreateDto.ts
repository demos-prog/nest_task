import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PostCreateDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsNumber()
  user: number;
}
