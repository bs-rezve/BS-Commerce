import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Query, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/modules/auth/guards/auth.guard';
import { ProductService } from '../services';
import {
  CreateProductDto,
  CreateProductErrorResponseDto,
  CreateProductSuccessResponseDto,
  DeleteProductErrorResponseDto,
  DeleteProductParamsDto,
  DeleteProductSuccessResponseDto,
  GetAllProductsErrorResponseDto,
  GetAllProductsQueryDto,
  GetAllProductsSuccessResponseDto,
  GetProductBySKUErrorResponseDto,
  GetProductBySKUParamsDto,
  GetProductBySKUSuccessResponseDto,
  GetProductCountErrorResponseDto,
  GetProductCountSuccessResponseDto,
  GetProductErrorResponseDto,
  GetProductParamsDto,
  GetProductsByConditionErrorResponseDto,
  GetProductsByConditionQueryDto,
  GetProductsByConditionSuccessResponseDto,
  GetProductSuccessResponseDto,
  UpdateProductDto,
  UpdateProductErrorResponseDto,
  UpdateProductParamsDto,
  UpdateProductsForBrandErrorResponseDto,
  updateProductsForBrandRequestDto,
  UpdateProductsForBrandSuccessResponseDto,
  UpdateProductSuccessResponseDto,
} from '../dto';

@ApiTags('Product API')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) { }

  @Get()
  @ApiResponse({
    description: 'Get All Product Success Response',
    type: GetAllProductsSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Get All Product Error Response',
    type: GetAllProductsErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async getAllProducts(@Query() query: GetAllProductsQueryDto, @Res({ passthrough: true }) res: Response) {
    const { skip, limit } = query;
    const { code, ...response } = await this.productService.getAllProducts({ skip, limit });
    res.status(code);
    return { code, ...response };
  }

  @Get('count')
  @ApiResponse({
    description: 'Get All Product Count Success Response',
    type: GetProductCountSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Get All Product Count Error Response',
    type: GetProductCountErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async getProductCount(@Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.productService.getProductCount();
    res.status(code);
    return { code, ...response };
  }

  @Get('sku/:sku')
  @ApiParam({ name: 'sku' })
  @ApiResponse({
    description: 'Get Product by SKU Success Response',
    type: GetProductBySKUSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Get Product by SKU Error Response',
    type: GetProductBySKUErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async getProductBySKU(@Param() params: GetProductBySKUParamsDto, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.productService.getProductBySKU(params.sku);
    res.status(code);
    return { code, ...response };
  }

  @Get('condition')
  @ApiResponse({
    description: 'Get Products By Condition Success Response',
    type: GetProductsByConditionSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Get Products By Condition Error Response',
    type: GetProductsByConditionErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async getProductsByCondition(
    @Query() condition: GetProductsByConditionQueryDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    console.log(condition)
    const { code, ...response } = await this.productService.getProductsByCondition(condition);
    res.status(code);
    return { code, ...response };
  }

  @Get(':productId')
  @ApiParam({ name: 'productId' })
  @ApiResponse({
    description: 'Get Product Success Response',
    type: GetProductSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Get Product Error Response',
    type: GetProductErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async getProduct(@Param() params: GetProductParamsDto, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.productService.getProduct(params.productId);
    res.status(code);
    return { code, ...response };
  }

  @Post()
  @ApiResponse({
    description: 'Create Product Success Response',
    type: CreateProductSuccessResponseDto,
    status: HttpStatus.CREATED
  })
  @ApiResponse({
    description: 'Create Product Error Response',
    type: CreateProductErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async addProduct(@Body() product: CreateProductDto, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.productService.createProduct(product);
    res.status(code);
    return { code, ...response };
  }

  @Delete(':productId')
  @ApiParam({ name: 'productId' })
  @ApiResponse({
    description: 'Delete Product Success Response',
    type: DeleteProductSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Delete Product Error Response',
    type: DeleteProductErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async deleteProduct(@Param() params: DeleteProductParamsDto, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.productService.deleteProduct(params.productId);
    res.status(code);
    return { code, ...response };
  }

  @Patch('brand')
  @ApiResponse({
    description: 'Update Products For Brand Success Response',
    type: UpdateProductsForBrandSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Update Products For Brand Error Response',
    type: UpdateProductsForBrandErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async updateProductsForBrand(@Body() data: updateProductsForBrandRequestDto, @Res({ passthrough: true }) res: Response,) {
    const { productIds, brandId } = data;
    const { code, ...response } = await this.productService.updateProductsForBrand(productIds, brandId);
    res.status(code);
    return { code, ...response };
  }

  @Patch(':productId')
  @ApiParam({ name: 'productId' })
  @ApiResponse({
    description: 'Update Product Success Response',
    type: UpdateProductSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Update Product Error Response',
    type: UpdateProductErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async updateProduct(@Body() product: UpdateProductDto, @Param() params: UpdateProductParamsDto, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.productService.updateProduct(product, params.productId);
    res.status(code);
    return { code, ...response };
  }
}
