import {Router} from 'express'
import productsController from './product.controller'


const productRouter = Router()


productRouter.get('/products', productsController.getAvailableProducts)


export default productRouter
