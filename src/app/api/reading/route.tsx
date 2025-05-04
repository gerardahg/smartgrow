import { NextResponse, NextRequest } from 'next/server';

import { prisma } from '../../../../prisma/client';
import schema from './schema';

export async function GET() {
  const readings = await prisma.readings.findMany();
  return NextResponse.json(readings, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const newReading = await prisma.readings.create({
    data: {
      deviceId: body.deviceId,
      temperature: body.temperature,
      humidity: body.humidity,
      light: body.light,
      rain: body.rain,
    },
  });

  return NextResponse.json(newReading, { status: 201 });
}
