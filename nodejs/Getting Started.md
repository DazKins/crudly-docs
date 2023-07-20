# Getting Started

## Pre-requisites

Before you start, make sure you have followed the "Getting Started" guide for the web application: [Getting Started](<../Getting%20Started%20(Crudly%20Web).md>)

We'll be building off of the tables created in this guide.

## Overview

In this guide, we'll use the tables created for our Pet Grooming shop to host a simple API for a web application.

## Setup

Let's start by creating a new NodeJS project:

```bash
npm init -y
touch main.js
```

We'll install express to host the HTTP web server:

```bash
npm install express
```

And let's populate `main.js` a basic express server. We'll add routes for getting customer, pet and a pet's owner:

```js
const express = require("express");
const app = express();

app.get("/pet/:id", async (req, res) => {
  // TODO
});

app.get("/customer/:id", async (req, res) => {
  // TODO
});

app.get("/pet/:id/owner", async (req, res) => {
  // TODO
});

app.listen(3000);
```

## Working with Crudly

Start by installing the [Crudly NPM package](https://www.npmjs.com/package/@crudly/crudly):

```bash
npm install @crudly/crudly
```

Then let's import the package and initialise a Crudly object:

```js
const { createCrudly } = require("@crudly/crudly");

const crudly = createCrudly({
  projectId: "<YOUR_PROJECT_ID>",
  projectKey: "<YOUR_PROJECT_KEY>",
});
```

Replace `<YOUR_PROJECT_ID>` and `<YOUR_PROJECT_KEY>` with the project ID and project key respectively that you should have obtained from the previous guide.

Now let's start interacting with our tables!

We'll start with the get pet endpoint:

```js
app.get("/pet/:id", async (req, res) => {
  return await crudly.getEntityById("pet", req.params.id);
});
```

It's as simple as that! We simplify specify which table we want to fetch from (the `pet` table) and the ID of the entity we want to fetch. Let's do the same for the customer endpoint:

```js
app.get("/customer/:id", async (req, res) => {
  return await crudly.getEntityById("customer", req.params.id);
});
```

Now let's do the final more involved endpoint, getting a pet's owner:

```js
app.get("/pet/:id/owner", async (req, res) => {
  const pet = await crudly.getEntityById("pet", req.params.id);

  return await crudly.getEntityById("customer", pet.ownerId);
});
```

And that's all the endpoint implemented!

## Further Reading

To learn more check out the [full API reference for NodeJS](./README.md)
