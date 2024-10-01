import { Request, Response, NextFunction } from "express";


const getAvailableProducts = async (req : Request, res : Response, next : NextFunction) =>  {


    res.status(200).json({
        name : 'iphone',
        image : 'urlImage',
        price : 10,
        availableQuantity : 100,
        category : 'electronics'
    })
}


export default {
    getAvailableProducts
}