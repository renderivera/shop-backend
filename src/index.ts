import express from "express";
import { PrismaClient, Category, Product, Image } from "@prisma/client";
import cors from "cors";

const prisma = new PrismaClient();
const app = express();
const port = 3000;
app.use(cors({ origin: "http://localhost:5173" }), express.json());

let p: (Product & { images: Image[] })[];
let c: (Category & { image: Image })[];

app.get("/categories", async (req, res) => {
	if (!c)
		c = await prisma.category.findMany({
			include: { image: true },
		});
	res.json(c);
});
app.get("/products", async (req, res) => {
	if (!p)
		p = await prisma.product.findMany({
			include: { images: true, categories: true },
		});
	res.json(p);
});

const server = app.listen(port, () =>
	console.log(`server running on port ${port}`)
);
