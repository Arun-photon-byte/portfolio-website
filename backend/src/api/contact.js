import express from 'express';
import { saveContactSubmission } from '../services/contactService.js';

export const contactRouter = express.Router();

contactRouter.post('/', (req, res) => {
  const result = saveContactSubmission(req.body ?? {});

  if (!result.ok) {
    return res.status(400).json({
      success: false,
      errors: result.errors
    });
  }

  return res.status(201).json({
    success: true,
    message: result.message
  });
});
