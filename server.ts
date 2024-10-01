import express from 'express'
import { Application } from 'express-serve-static-core'
import app from './config/app'
import dotenv from 'dotenv';
import connectDB from './config/db.config';

dotenv.config();

const port = process.env.PORT || 8000;

app.listen(port, async () => {
    console.log(`now listening on port ${port}`); 
  
    await connectDB(); 
  });