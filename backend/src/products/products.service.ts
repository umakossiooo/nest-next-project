import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) { }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const newUser = this.productRepository.create(createProductDto);
    return await this.productRepository.save(newUser);
  }

  async findAll(): Promise<Product[]> {
    const products = await this.productRepository.find();
    if (products.length === 0) {
      throw new NotFoundException('No products found');
    }
    return products;
  }

  async findOne(id: number) {
    const productFound = await this.productRepository.findOneBy({ id });
    if (!productFound) throw new NotFoundException(`Product with ${id} found`);
    return productFound;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const updatedProduct = await this.productRepository.update(id, updateProductDto);
    if (!updatedProduct) throw new NotFoundException(`Product with ${id} found`);
    return updatedProduct;
  }

  async remove(id: number) {
    const productRemoved = await this.productRepository.delete(id);
    if (!productRemoved) throw new NotFoundException(`Product with ${id} found`);
    return productRemoved;
  }
}
