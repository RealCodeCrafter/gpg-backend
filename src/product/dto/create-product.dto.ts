import { IsString, IsArray, IsOptional, IsNotEmpty } from 'class-validator';
import { Type, Transform } from 'class-transformer';

const parseArray = (value: any): string[] | undefined => {
  if (!value) return undefined;
  if (Array.isArray(value)) return value;
  if (typeof value === 'string') {
    try {
      return JSON.parse(value);
    } catch {
      return [value];
    }
  }
  return undefined;
};

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  nameRu: string;

  @IsString()
  @IsOptional()
  nameEn?: string;

  @IsString()
  @IsOptional()
  descriptionRu?: string;

  @IsString()
  @IsOptional()
  descriptionEn?: string;

  @Type(() => Number)
  @IsNotEmpty()
  brandId: number;

  @Transform(({ value }) => parseArray(value))
  @IsArray()
  @IsOptional()
  flash?: string[];

  @Transform(({ value }) => parseArray(value))
  @IsArray()
  @IsOptional()
  temperature?: string[];

  @Transform(({ value }) => parseArray(value))
  @IsArray()
  @IsOptional()
  base?: string[];

  @Transform(({ value }) => parseArray(value))
  @IsArray()
  @IsOptional()
  sae?: string[];

  @Transform(({ value }) => parseArray(value))
  @IsArray()
  @IsOptional()
  density?: string[];

  @Transform(({ value }) => parseArray(value))
  @IsArray()
  @IsOptional()
  kinematic_one?: string[];

  @Transform(({ value }) => parseArray(value))
  @IsArray()
  @IsOptional()
  kinematic_two?: string[];

  @Transform(({ value }) => parseArray(value))
  @IsArray()
  @IsOptional()
  viscosityIndex?: string[];
}

