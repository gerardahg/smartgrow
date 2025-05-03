import { NextResponse, NextRequest } from 'next/server';
import { getServerSession } from 'next-auth';

import { prisma } from '../../../../../prisma/client';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const device = await prisma.device.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!device) {
    return NextResponse.json({ error: 'Device not found' }, { status: 404 });
  }
  return NextResponse.json(device);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();

  if (!body.name) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 });
  }

  const existingDevice = await prisma.device.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!existingDevice) {
    return NextResponse.json({ error: 'Device not found' }, { status: 404 });
  }

  const userId = (session.user as { id: number }).id;

  if (existingDevice.userId != userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const updatedDevice = await prisma.device.update({
    where: { id: parseInt(params.id) },
    data: {
      name: body.name,
      userId: userId,
    },
  });

  return NextResponse.json(updatedDevice, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const existingDevice = await prisma.device.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!existingDevice) {
    return NextResponse.json({ error: 'Device not found' }, { status: 404 });
  }

  const userId = (session.user as { id: number }).id;

  if (existingDevice.userId != userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const deletedDevice = await prisma.device.delete({
    where: { id: parseInt(params.id) },
  });

  return NextResponse.json(deletedDevice, { status: 200 });
}
