import { createEmployee } from "@/services/employees";

export async function POST(req, res) {

  const data = await req.json();
  
  var created = createEmployee(data);

  return new Response(JSON.stringify(created), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}