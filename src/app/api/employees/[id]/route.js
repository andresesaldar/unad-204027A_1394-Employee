import { deleteEmployee, getEmployeeById, updateEmployee } from "@/services/employees";

export async function GET(req, res) {

    const query = req.query;
    const { id } = query;

    var employee = await getEmployeeById(id);

    return new Response(JSON.stringify(employee), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}

export async function PATCH(req, res) {

    const query = req.query;
    const { id } = query;

    const data = await req.json();

    var updated = await updateEmployee(id, data);

    return new Response(JSON.stringify(updated), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}


export async function DELETE(req, res) {

    const query = req.query;
    const { id } = query;


    var deleted = await deleteEmployee(id);

    return new Response(JSON.stringify(deleted), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}