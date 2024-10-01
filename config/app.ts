import express, {Application} from 'express'
import productRouter from '../router/product/product.router'

const app : Application = express()

app.use(express.json())
app.use('/api',productRouter)

export default app