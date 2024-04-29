export async function loader() {
  const response = await fetch("https://cdn.poschuler.dev/cv.pdf");
  const data = await response.arrayBuffer();

  return new Response(data, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=poschuler.pdf`,
    },
  });
}
