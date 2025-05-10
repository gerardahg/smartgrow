import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

import { prisma } from '../../../../prisma/client';
import { authOptions } from '@/lib/authOptions';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  //?: Por si el campo es nulo, !: Porque sabemos que si existe la sesión, existe el correo
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  const devices = await prisma.device.findMany({
    where: { userId: user?.id },
    select: {
      reference: true,
      name: true,
    },
  });
  return NextResponse.json(devices);
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();

  if (!body.name || !body.reference) {
    return NextResponse.json(
      { error: 'Name and reference are required' },
      { status: 400 }
    );
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  const device = await prisma.device.create({
    data: {
      reference: body.reference,
      name: body.name,
      userId: user!.id,
    },
  });

  return NextResponse.json(device, { status: 201 });
}
