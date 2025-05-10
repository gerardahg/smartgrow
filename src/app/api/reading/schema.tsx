import { z } from 'zod';

const schema = z.object({
  reference: z.string(),
  temperature: z.number(),
  humidity: z.number(),
  light: z.number(),
  rain: z.boolean(),
});

export default schema;
