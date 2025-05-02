import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../prisma/client';
import schema from '../schema';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }
  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validationn = schema.safeParse(body);
  if (!validationn.success) {
    return NextResponse.json(validationn.error.errors, { status: 400 });
  }

  const existingUser = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!existingUser) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  const updatedUser = await prisma.user.update({
    where: { id: parseInt(params.id) },
    data: {
      name: body.name,
      email: body.email,
      password: body.password,
    },
  });

  return NextResponse.json(updatedUser, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const existingUser = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!existingUser) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  const user = await prisma.user.delete({
    where: {
      id: parseInt(params.id),
    },
  });

  return NextResponse.json(user, { status: 200 });
}
