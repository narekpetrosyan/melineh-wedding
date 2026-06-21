import { createGuest, deleteGuest, getGuests } from "../database";

export async function POST(req) {
  const body = await req.json();
  const { name, count, wish } = body;

  try {
    await createGuest({ name, count, wish });
    return Response.json(
      { message: "Successfully created guest" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(err, { status: 400 });
  }
}

export async function GET() {
  try {
    const guests = await getGuests();
    return Response.json(guests, { status: 200 });
  } catch (err) {
    return Response.json({ error: err }, { status: 400 });
  }
}

export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return Response.json(
      { error: "Guest id is required" },
      { status: 400 }
    );
  }

  try {
    await deleteGuest(id);
    return Response.json(
      { message: "Successfully deleted guest" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(err, { status: 400 });
  }
}
