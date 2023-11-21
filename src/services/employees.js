import path, { join } from 'path';
import { open } from "sqlite";
import sqlite3 from "sqlite3";

let db = null;

async function getDb() {
    if (!db) {
        const filename = path.join(process.cwd(), 'db', 'employees.db');
        db = await open({
          filename,
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

  const created = await  new Promise((res, rej) =>
    db.run(
      "INSERT INTO employees(code, name, surname, identity, address, telephone, photo_id) VALUES(?, ?, ?, ?, ?, ?, ?)",
      [
        employee["code"],
        employee["name"],
        employee["lastName"],
        employee["type"],
        employee["address"],
        employee["phone"],
        0
      ],
      (err, employee) => {
        if(err) rej(err)
        res(employee)
      }
  ));

  return created;
}

export async function getEmployeeById(id) {
  await getDb();

  const created = await new Promise((res, rej) =>
    db.each(
      "SELECT * FROM employees WHERE id = ?",
      id,
      (err, found) => {
        if(err) rej(err);
        res(found)
      }
  ));

  return created;
}

export async function updateEmployee(id, employee) {
  await getDb();

  const updateArgs = [];
  const updateReq = [];

  if (employee["code"]) {
    updateReq.push(`code = ?`)
    updateArgs.push(employee["code"])
  }

  if (employee["name"]) {
    updateReq.push(`name = ?`)
    updateArgs.push(employee["name"])
  }

  if (employee["lastName"]) {
    updateReq.push(`lastName = ?`)
    updateArgs.push(employee["lastName"])
  }

  if (employee["type"]) {
    updateReq.push(`type = ?`)
    updateArgs.push(employee["type"])
  }

  if (employee["address"]) {
    updateReq.push(`address = ?`)
    updateArgs.push(employee["address"])
  }

  if (employee["phone"]) {
    updateReq.push(`phone = ?`)
    updateArgs.push(employee["phone"])
  }

  if (employee["phone"]) {
    updateReq.push(`phone = ?`)
    updateArgs.push(employee["phone"])
  }


  const updated = await new Promise((res, rej) => db.run(
    `UPDATE employees SET ${updateReq,join(", ")} WHERE id = ?`,
    [
      ...updateArgs,
      id
    ],
    (err, up) => {
      if(err) rej(err);
      res(up)
    }
  ));

  return updated;
}

export async function deleteEmployee(id) {
  await getDb();

  const deleted = await new Promise((res, rej) => db.run(
    `DELETE FROM employees WHERE id = ?`,
    id,
    (err, del) => {
      if(err) rej(err);
      res(del)
    }
  ));

  return deleted;
}