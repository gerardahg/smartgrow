import { NextResponse, NextRequest } from 'next/server';
import { getServerSession } from 'next-auth';

import { prisma } from '../../../../../prisma/client';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const reading = await prisma.readings.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!reading) {
    return NextResponse.json({ error: 'Reading not found' }, { status: 404 });
  }
  return NextResponse.json(reading, { status: 200 });
}
