import express from "express";
import { PrismaClient, Category, Product, Image } from "@prisma/client";
const cors = require("cors");
import { Stripe } from "stripe";
require("dotenv").config();

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(cors({ origin: process.env.CLIENT_URL }), express.json());

const stripe = new Stripe(process.env.STRIPE_SK as string, {
	apiVersion: "2022-11-15",
});

let p: (Product & { images: Image[] })[];
let c: (Category & { image: Image })[];

const getProducts = async () => {
	if (!p)
		p = await prisma.product.findMany({
			include: { images: true, categories: true },
		});
	return p;
};

const getCategories = async () => {
	if (!c)
		c = await prisma.category.findMany({
			include: { image: true },
		});
	return c;
};

app.get("/categories", async (req, res) => {
	res.json(await getCategories());
});
app.get("/products", async (req, res) => {
	res.json(await getProducts());
});

app.post("/create-checkout-session", async (req, res) => {
	const cartItems = req.body.cartItems as Product[];
	const products = await getProducts();

	// get original products in case of malicious client price changes
	const cartProducts = cartItems.map((item) => {
		return products.find((p) => p.id === item.id) as Product;
	});

	cartProducts.sort((a, b) => a.id - b.id);

	const cartLineItems = cartProducts.map((item) => {
		return {
			quantity: 1,
			price_data: {
				unit_amount: item.price * 100,
				currency: "usd",
				product_data: {
					name: item.title,
				},
			},
		} as Stripe.Checkout.SessionCreateParams.LineItem;
	});

	const session = await stripe.checkout.sessions.create({
		line_items: cartLineItems,
		mode: "payment",
		success_url: `${process.env.CLIENT_URL}/order/success`,
		cancel_url: `${process.env.CLIENT_URL}/order/cancel`,
	});

	res.json({ url: session.url });
});

const server = app.listen(port, () =>
	console.log(`server running on port ${port}`)
);
