import express from 'express';
import cors from 'cors';
import { contactRouter } from './api/contact.js';

export function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get('/health', (_req, res) => {
    res.json({ ok: true });
  });

  app.use('/api/contact', contactRouter);

  app.use((err, _req, res, _next) => {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Unable to save your message right now. Please try again later.'
    });
  });

  return app;
}
