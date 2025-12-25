import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

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
  @IsNumber()
  @IsNotEmpty()
  brandId: number;

  @IsString()
  @IsOptional()
  saeViscosityClass?: string;

  @IsString()
  @IsOptional()
  saeViscosityClassStandard?: string;

  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  densityAt20C?: number;

  @IsString()
  @IsOptional()
  densityAt20CStandard?: string;

  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  kinematicViscosity40C?: number;

  @IsString()
  @IsOptional()
  kinematicViscosity40CStandard?: string;

  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  kinematicViscosity100C?: number;

  @IsString()
  @IsOptional()
  kinematicViscosity100CStandard?: string;

  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  viscosityIndex?: number;

  @IsString()
  @IsOptional()
  viscosityIndexStandard?: string;

  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  flashPoint?: number;

  @IsString()
  @IsOptional()
  flashPointStandard?: string;

  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  pourPoint?: number;

  @IsString()
  @IsOptional()
  pourPointStandard?: string;

  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  totalBaseNumber?: number;

  @IsString()
  @IsOptional()
  totalBaseNumberStandard?: string;
}

