// import prisma from "@/lib/db";
import prisma from "../../../../lib/db"
import { NextResponse } from "next/server";
import { deleteFile, uploadFile } from "@/utils/fileUpload";

export async function GET(req: Request, { params }: { params: { id: number } }) {
  const { id } = params
  try {
    const order = await prisma.order.findUnique({
      where: {
        id
      }
    })
    return NextResponse.json(
      {
        message: 'Lấy thông tin đơn hàng thành công',
        order
      },
      { status: 200 }
    );
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: 'Có lỗi xảy ra' }, { status: 500 });
    }
  }
}

export async function DELETE(req: Request, { params }: { params: { id: number } }) {
  const { id } = params
  try {
    const order = await prisma.order.findUnique({
      where: {
        id: +id,
      }
    })
    if (!order) {
      return NextResponse.json({ message: 'Đơn hàng không tồn tại' }, { status: 404 });
    }
    await prisma.order.delete({
      where: {
        id: +id
      }
    })
    return NextResponse.json(
      {
        message: 'Xóa đơn hàng thành công',
      },
      { status: 200 }
    );
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: 'Có lỗi xảy ra' }, { status: 500 });
    }
  }
}