import fs from 'node:fs';
import path from 'node:path';
import request from 'supertest';
import { createApp } from '../src/app.js';
import * as contactService from '../src/services/contactService.js';

const dbPath = path.resolve(process.cwd(), '../db/company-website.db');

describe('POST /api/contact', () => {
  it('returns the app health status', async () => {
    const app = createApp();

    const response = await request(app).get('/health');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ ok: true });
  });

  it('stores a valid submission and returns a thank you message', async () => {
    if (fs.existsSync(dbPath)) {
      fs.unlinkSync(dbPath);
    }

    const app = createApp();

    const response = await request(app)
      .post('/api/contact')
      .send({
        name: 'Jane Doe',
        email: 'jane@example.com',
        message: 'I would like to learn more about your services.'
      });

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe('Thank you for reaching out!');
  });

  it('rejects a submission when required fields are missing', async () => {
    const app = createApp();

    const response = await request(app)
      .post('/api/contact')
      .send({
        name: '',
        email: 'not-an-email',
        message: ''
      });

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.errors).toEqual(
      expect.arrayContaining(['Name is required.', 'Email is invalid.', 'Message is required.'])
    );
  });

  it('returns a 500 error when the app throws an unexpected exception', async () => {
    const app = createApp();
    const saveSpy = vi.spyOn(contactService, 'saveContactSubmission').mockImplementation(() => {
      throw new Error('Unexpected failure');
    });

    const response = await request(app)
      .post('/api/contact')
      .send({
        name: 'Jane Doe',
        email: 'jane@example.com',
        message: 'I would like to know more.'
      });

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      success: false,
      message: 'Unable to save your message right now. Please try again later.'
    });

    saveSpy.mockRestore();
  });
});
