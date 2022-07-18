import { HttpStatus, Injectable } from "@nestjs/common";
import { OrderStatusEnum, PaymentStatusEnum, ShippingStatusEnum } from "src/entity/order";
import { errorResponse, successResponse } from "src/utils/response";
import { IServiceResponse } from "src/utils/response/service.response.interface";
import { ChangeStatusDto, OrderIncompleteStatDto, OrderStatDto, OrderStatusEnumDto } from "../dto/admin.response.dto";
import { OrderData } from "../dto/order.response.dto";
import { OrderRepository } from "../repositories";

@Injectable()
export class OrderAdminService{
    constructor(private orderRepository: OrderRepository) {}

    async getOrderById(orderId: string):Promise<IServiceResponse<OrderData>>{
        const orderData = await this.orderRepository.getOrderById(orderId)
        if (orderData) {
            return successResponse(OrderData, orderData);
          }
        return errorResponse(
        'Error in order creation.',
        null,
        HttpStatus.BAD_REQUEST,
        );
    }

    async getOrderEnums():Promise<IServiceResponse<OrderStatusEnumDto>>{
        const enums = {
            orderStatusEnums: OrderStatusEnum,
            paymentStatusEnums: PaymentStatusEnum,
            shippingStatusEnum: ShippingStatusEnum
        }
        return successResponse( null , enums)
    }

    async getOrderStatistics():Promise<IServiceResponse<OrderStatDto>>{
        const orderStat = await this.orderRepository.getOrderStatistics()
        if(orderStat){
            return successResponse(OrderStatDto, orderStat)
        }
        return errorResponse(
            'Error in order statistics', null, HttpStatus.BAD_REQUEST
        )
    }
    async getIncompleteStatistics():Promise<IServiceResponse<OrderIncompleteStatDto>>{
        const orderStat = await this.orderRepository.getIncompleteStatistics()
        if(orderStat){
            return successResponse(OrderIncompleteStatDto, orderStat)
        }
        return errorResponse(
            'Error in order incomplete statistics', null, HttpStatus.BAD_REQUEST
        )
    }

    async changeStatus(body: ChangeStatusDto): Promise<any>{
        const orderStat = await this.orderRepository.changeStatus(body)
        if(orderStat){
            return successResponse(OrderIncompleteStatDto, orderStat)
        }
        return errorResponse(
            'Error in change status', null, HttpStatus.BAD_REQUEST
        )
    }
}