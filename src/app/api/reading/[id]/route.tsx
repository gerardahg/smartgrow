import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '../../../../../prisma/client';

export async function GET(
  request: NextRequest,
  context: {
    params: Promise<{ id: string }>;
  }
) {
  void request;

  try {
    const { id } = await context.params;

    const readings = await prisma.readings.findMany({
      where: {
        reference: id,
      },
    });

    if (!readings || readings.length === 0) {
      return NextResponse.json(
        { error: 'Readings not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(readings, { status: 200 });
  } catch (err) {
    const error =
      err instanceof Error ? err : new Error('An unexpected error occurred');
    return NextResponse.json(
      { error: `Failed to fetch readings: ${error.message}` },
      { status: 500 }
    );
  }
}
