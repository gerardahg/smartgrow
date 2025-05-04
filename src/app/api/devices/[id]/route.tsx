import { NextResponse, NextRequest } from 'next/server';
import { getServerSession } from 'next-auth';

import { prisma } from '../../../../../prisma/client';
import { authOptions } from '../../auth/[...nextauth]/route';

interface Params {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params }: Params) {
  const id = parseInt(params.id);
  const device = await prisma.device.findUnique({
    where: {
      id: id,
    },
  });

  if (!device) {
    return NextResponse.json({ error: 'Device not found' }, { status: 404 });
  }
  return NextResponse.json(device);
}

export async function PUT(request: NextRequest, { params }: Params) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;

  const body = await request.json();

  if (!body.name) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 });
  }

  const existingDevice = await prisma.device.findUnique({
    where: { id: parseInt(id) },
  });

  if (!existingDevice) {
    return NextResponse.json({ error: 'Device not found' }, { status: 404 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user?.email! },
  });

  if (existingDevice.userId != user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const updatedDevice = await prisma.device.update({
    where: { id: parseInt(id) },
    data: {
      name: body.name,
      userId: user.id,
    },
  });

  return NextResponse.json(updatedDevice, { status: 200 });
}

export async function DELETE(request: NextRequest, { params }: Params) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;

  const existingDevice = await prisma.device.findUnique({
    where: { id: parseInt(id) },
  });

  if (!existingDevice) {
    return NextResponse.json({ error: 'Device not found' }, { status: 404 });
  }

  //Si existe la sesión existe el correo, indicamos '!'
  const user = await prisma.user.findUnique({
    where: { email: session.user?.email! },
  });

  if (existingDevice.userId != user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const deletedDevice = await prisma.device.delete({
    where: { id: parseInt(id) },
  });

  return NextResponse.json(deletedDevice, { status: 200 });
}
