import { Response } from 'express';
import { PaginationResult } from './pagination.result'; // Importa l'interfaccia PaginationResult

export interface PaginationResponse extends Response {
  results?: PaginationResult;
}