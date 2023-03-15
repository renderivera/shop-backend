import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.get("/categories", async (req, res) => {
	const categories = await prisma.category.findMany({});
	res.json(categories);
});
app.get("/products", async (req, res) => {
	const products = await prisma.product.findMany({});
	res.json(products);
});

const server = app.listen(port, () =>
	console.log(`server running on port ${port}`)
);
