import express from "express";
import { createCrudly } from "@crudly/crudly";

const app = express();
app.use(express.json());

const crudly = createCrudly({
  projectId: "<YOUR_PROJECT_ID>",
  projectKey: "<YOUR_PROJECT_KEY>",
});

app.get("/pet/:id", async (req, res) => {
  const pet = await crudly.getEntityById("pet", req.params.id);

  if (!pet) {
    return res.sendStatus(404);
  }

  res.json(pet);
});

app.get("/customer/:id", async (req, res) => {
  const customer = await crudly.getEntityById("customer", req.params.id);

  if (!customer) {
    return res.sendStatus(404);
  }

  res.json(customer);
});

app.get("/pet/:id/owner", async (req, res) => {
  const pet = await crudly.getEntityById("pet", req.params.id);

  if (!pet) {
    return res.sendStatus(404);
  }

  const owner = await crudly.getEntityById("customer", pet.ownerId);

  if (!owner) {
    return res.sendStatus(500);
  }

  res.json(owner);
});

app.post("/pet", async (req, res) => {
  const petId = await crudly.createEntity("pet", req.body);
  res.json(petId);
});

app.post("/customer", async (req, res) => {
  const customerId = await crudly.createEntity("customer", req.body);
  res.json(customerId);
});

app.listen(3000);
