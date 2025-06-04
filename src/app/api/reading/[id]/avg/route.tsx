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

    // Query para obtener el promedio de cada lectura por dia
    const dailyAverages = await prisma.$queryRaw`
      SELECT 
        DATE(createdAt) as date,
        AVG(temperature) as avgTemperature,
        AVG(humidity) as avgHumidity,
        AVG(light) as avgLight
      FROM Readings 
      WHERE reference = ${id}
      GROUP BY DATE(createdAt)
      ORDER BY DATE(createdAt) ASC
    `;

    return NextResponse.json(dailyAverages, { status: 200 });
  } catch (err) {
    const error =
      err instanceof Error ? err : new Error('An unexpected error occurred');
    return NextResponse.json(
      { message: `Failed to fetch daily averages: ${error.message}` },
      { status: 500 }
    );
  }
}
