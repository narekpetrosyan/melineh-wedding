import { apiGet, apiPost } from "../database";

export async function POST(req, res) {
 const body = await req.json();
 const { name, count, wish } = body;

 const query = `
    INSERT INTO guests(name, count, wish)
    VALUES(?, ?, ?)
  `;
 const values = [name, count, wish];

 let status, respBody;
 await apiPost(query, values)
  .then(() => {
   status = 200;
   respBody = { message: "Successfully created guest" };
  })
  .catch((err) => {
   status = 400;
   respBody = err;
  });
 return Response.json(respBody, {
  status,
 });
}


export async function GET(req, res) {
 const query = `
    SELECT * from guests
  `;

 let status, body;
 try {
  await apiGet(query)
   .then((res) => {
    status = 200;
    body = res;
   })
   .catch((err) => {
    status = 400;
    body = { error: err };
   });
  return Response.json(body, {
   status,
  });
 } catch (error) {
  console.error(error.message);
  return Response.json(
   { error: error },
   {
    status: 400,
   }
  );
 }
}

export async function DELETE(req, res) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  console.log(searchParams);


  let status, respBody;

  if (!id) {
    status = 400;
    respBody = err;
  } else {
    const query = `
      DELETE FROM guests
      WHERE id = (?);
    `;

    await apiPost(query, [id])
    .then(() => {
      status = 200;
      respBody = { message: "Successfully deleted guest" };
    })
    .catch((err) => {
      status = 400;
      respBody = err;
    });
  }

 return Response.json(respBody, {
  status,
 });
}
