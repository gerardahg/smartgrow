import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '../../../../../prisma/client';
import Params from '@/lib/types/apiParams';

export async function GET(request: NextRequest, { params }: Params) {
  void request;

  const { id } = await params;

  const reading = await prisma.readings.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!reading) {
    return NextResponse.json({ error: 'Reading not found' }, { status: 404 });
  }
  return NextResponse.json(reading, { status: 200 });
}
