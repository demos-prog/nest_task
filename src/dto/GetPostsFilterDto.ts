import { IsString, IsOptional } from 'class-validator';

export class GetPostsFilterDto {
  @IsOptional()
  @IsString()
  userId: string;

  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  take: string;

  @IsOptional()
  @IsString()
  skip: string;
}
