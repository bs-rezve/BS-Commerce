import { ManufacturerCreateSchema } from './../validators/manufacturer.create.validator';
import { HttpStatus, Injectable } from '@nestjs/common';
import * as Joi from 'joi';
import { validateParams } from 'src/decorators/service.validator';
import { Manufacturer } from 'src/entity/manufacturer';
import { Helper } from 'src/helper/helper.interface';
import { ServiceErrorResponse, ServiceSuccessResponse } from 'src/helper/serviceResponse/service.response.interface';
import { ManufacturerRepository } from '../repositories';

@Injectable()
export class ManufacturerService {

    constructor(
        private manufacturerRepo: ManufacturerRepository,
        private helper: Helper
    ) { }

    @validateParams({ schema: ManufacturerCreateSchema })
    async createManufacturer(manufacturer: Manufacturer): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
        const isManufacturerExist = await this.manufacturerRepo.getManufacturerById(manufacturer.id);
        if (isManufacturerExist) {
            return this.helper.serviceResponse.errorResponse('Manufacturer already exists', { manufacturer: [`This manufacturer id ${manufacturer.id} already exists. Try with different Id`] }, HttpStatus.BAD_REQUEST);
        }

        const newManufacturer = await this.manufacturerRepo.createManufacturer(manufacturer);
        if (!newManufacturer) {
            return this.helper.serviceResponse.errorResponse('Manufacturer not created successfully', null, HttpStatus.BAD_REQUEST);
        }

        return this.helper.serviceResponse.successResponse(newManufacturer);
    }

    @validateParams({ schema: Joi.number().required().label('Skip') }, { schema: Joi.number().required().label('Limit') })
    async getAllManufacturers(skip?: number, limit?: number): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
        const foundManufacturers = await this.manufacturerRepo.getAllManufacturers(skip, limit);

        if (!foundManufacturers) {
            return this.helper.serviceResponse.errorResponse('Manufacturers not found', { manufacturers: ["Not found"] }, HttpStatus.BAD_REQUEST);
        }

        const manufacturerNumbers = await this.manufacturerRepo.getManufacturersNumber();
        const allManufacturers = {
            manufacturers: foundManufacturers,
            total: manufacturerNumbers
        }

        return this.helper.serviceResponse.successResponse(allManufacturers);

    }

    @validateParams({ schema: Joi.string().required().label('Id') })
    async getManufacturer(manufacturerId: string): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
        const foundManufacturer = await this.manufacturerRepo.getManufacturerById(manufacturerId);

        if (!foundManufacturer) {
            return this.helper.serviceResponse.errorResponse('Manufacture not found', { manufacturer: ["Not found"] }, HttpStatus.BAD_REQUEST);
        }

        return this.helper.serviceResponse.successResponse(foundManufacturer);

    }

    @validateParams({ schema: Joi.string().required().label('Id') }, { schema: ManufacturerCreateSchema })
    async updateManufacturer(manufacturerId: string, manufacturer: Manufacturer): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
        const foundManufacturer = await this.manufacturerRepo.getManufacturerById(manufacturerId);

        if (!foundManufacturer) {
            return this.helper.serviceResponse.errorResponse('Manufacture not found', { manufacturer: ["Manufacturer not found. Try with different id"] }, HttpStatus.BAD_REQUEST);
        } else {
            const savedManufacturer = await this.manufacturerRepo.updateManufacturerById(manufacturerId, manufacturer);

            if (!savedManufacturer) {
                return this.helper.serviceResponse.errorResponse('Can not update manufacturer', { manufacture: ["Not updated"] }, HttpStatus.BAD_REQUEST);
            }

            return this.helper.serviceResponse.successResponse(savedManufacturer);
        }
    }

    @validateParams({ schema: Joi.string().required().label('id') })
    async deleteManufacturer(manufacturerId: string): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
        const foundManufacturer = await this.manufacturerRepo.getManufacturerById(manufacturerId);

        if (!foundManufacturer) {
            return this.helper.serviceResponse.errorResponse('Manufacture not found', { manufacturer: ["Manufacturer not found. Try with different id"] }, HttpStatus.BAD_REQUEST);
        } else {
            const manufacturer = await this.manufacturerRepo.deleteManufacturerById(manufacturerId);

            if (!manufacturer) {
                return this.helper.serviceResponse.errorResponse('Can not delete manufacturer', { manufacture: ["Not deleted"] }, HttpStatus.BAD_REQUEST);
            }
    
            return this.helper.serviceResponse.successResponse(manufacturer);
        }
    }


}
