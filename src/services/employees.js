import { open } from "sqlite";
import sqlite3 from "sqlite3";

let db = null;

async function getDb() {
    if (!db) {
        db = await open({
          filename: "./db/employees.db",
          driver: sqlite3.Database,
        });
    }
    return db;
}

export async function getAllEmployees() {
  await getDb();

  const employees = await db.all("SELECT * FROM employees");

  return employees;
}

export async function createEmployee(employee) {
  await getDb();

  const created = await db.run(
    "INSERT INTO employees(code, name, surname, identity, address, telephone, photo_id) VALUES(?, ?, ?, ?, ?, ?, ?)",
    [
      employee["code"],
      employee["name"],
      employee["lastName"],
      employee["type"],
      employee["address"],
      employee["phone"],
      0
    ]
  );

  return created;
}