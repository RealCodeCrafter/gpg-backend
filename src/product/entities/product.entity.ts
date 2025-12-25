import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
} from 'typeorm';
import { Brand } from '../../brand/entities/brand.entity';

@Entity('products')
@Unique(['nameRu', 'brandId'])
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nameRu: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  nameEn: string;

  @Column({ type: 'text', nullable: true })
  descriptionRu: string;

  @Column({ type: 'text', nullable: true })
  descriptionEn: string;

  @Column({ type: 'text', array: true, default: [] })
  images: string[];

  @Column({ type: 'varchar', length: 50, nullable: true })
  saeViscosityClass: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  saeViscosityClassStandard: string;

  @Column({ type: 'decimal', precision: 10, scale: 3, nullable: true })
  densityAt20C: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  densityAt20CStandard: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  kinematicViscosity40C: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  kinematicViscosity40CStandard: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  kinematicViscosity100C: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  kinematicViscosity100CStandard: string;

  @Column({ type: 'int', nullable: true })
  viscosityIndex: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  viscosityIndexStandard: string;

  @Column({ type: 'int', nullable: true })
  flashPoint: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  flashPointStandard: string;

  @Column({ type: 'int', nullable: true })
  pourPoint: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  pourPointStandard: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  totalBaseNumber: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  totalBaseNumberStandard: string;

  @ManyToOne(() => Brand, (brand) => brand.products, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'brandId' })
  brand: Brand;

  @Column({ nullable: true })
  brandId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

