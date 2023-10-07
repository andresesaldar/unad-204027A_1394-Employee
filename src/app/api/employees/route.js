import { createEmployee, getAllEmployees } from "@/services/employees";

export async function POST(req, res) {

  const data = await req.json();
  
  var created = await createEmployee(data);

  return new Response(JSON.stringify(created), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}

export async function GET(req, res) {
  
  var employees = await getAllEmployees();

  return new Response(JSON.stringify(employees), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}