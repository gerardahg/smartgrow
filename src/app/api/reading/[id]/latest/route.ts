import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../../prisma/client';

export async function GET(
  request: NextRequest,
  context: {
    params: Promise<{ id: string }>;
  }
) {
  void request;
  try {
    const { id } = await context.params;
    const latestReading = await prisma.readings.findFirst({
      where: { reference: id },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(latestReading, { status: 200 });
  } catch (err) {
    const error =
      err instanceof Error ? err : new Error('An unexpected error occurred');
    return NextResponse.json(
      { message: `Failed to fetch latest reading: ${error.message}` },
      { status: 500 }
    );
  }
}
