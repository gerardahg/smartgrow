import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '../../../../../prisma/client';
import schema from '../schema';
import Params from '@/lib/types/apiParams';

export async function GET(request: NextRequest, { params }: Params) {
  void request;

  const { id } = await params;

  const user = await prisma.user.findUnique({
    where: {
      email: id,
    },
  });

  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }
  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params }: Params) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const { id } = await params;

  const existingUser = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });

  if (!existingUser) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  const updatedUser = await prisma.user.update({
    where: { id: parseInt(id) },
    data: {
      name: body.name,
      email: body.email,
      password: body.password,
    },
  });

  return NextResponse.json(updatedUser, { status: 200 });
}

export async function DELETE(request: NextRequest, { params }: Params) {
  void request;
  const { id } = await params;

  const existingUser = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });

  if (!existingUser) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  const user = await prisma.user.delete({
    where: {
      id: parseInt(id),
    },
  });

  return NextResponse.json(user, { status: 200 });
}
