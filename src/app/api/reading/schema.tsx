import { z } from 'zod';

const schema = z.object({
  deviceId: z.number().positive(),
  temperature: z.number(),
  humidity: z.number(),
  light: z.number(),
  rain: z.boolean(),
});

export default schema;
