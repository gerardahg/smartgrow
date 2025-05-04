import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

import { prisma } from '../../../../prisma/client';
import { authOptions } from '../auth/[...nextauth]/route';

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const userId = (session.user as { id: number }).id;

  const devices = await prisma.device.findMany({
    where: {
      userId: userId,
    },
    select: {
      id: true,
      name: true,
    },
  });
  return NextResponse.json(devices);
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();

  if (!body.name) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 });
  }

  const userId = (session.user as { id: number }).id;

  const device = await prisma.device.create({
    data: {
      name: body.name,
      userId: userId,
    },
  });

  return NextResponse.json(device, { status: 201 });
}
