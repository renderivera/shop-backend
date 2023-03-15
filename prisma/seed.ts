import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
	await prisma.product.deleteMany();
	await prisma.category.deleteMany();
	await prisma.image.deleteMany();

	const top1 = await prisma.product.create({
		data: {
			title: "Yogamatters Racerback Tank Top - Black",
			description: `Introducing our new, practical racerback tank top that provides support through any practice. Made from a sumptuously soft blend of organically grown cotton and Tencel™ Modal, it’s the perfect combination of function and comfort. Great for layering under loose and low-cut tops or wearing as it is, our racerback has a high crew neckline that keeps you covered where you want to be, whatever the asana.`,
			price: 29.99,
			images: {
				create: [
					{
						url: "https://cdn.shopify.com/s/files/1/0278/7259/1939/products/Yogamatters-Natural-Dyes-August-20222243-1_300x300.jpg?v=1663169147",
						alt: "Yogamatters Racerback Tank Top 1",
					},
					{
						url: "https://cdn.shopify.com/s/files/1/0278/7259/1939/products/Yogamatters-Natural-Dyes-August-20223726_300x300.jpg?v=1663170643",
						alt: "Yogamatters Racerback Tank Top 2",
					},
					{
						url: "https://cdn.shopify.com/s/files/1/0278/7259/1939/products/Yogamatters-Natural-Dyes-August-20222256_300x300.jpg?v=1663170643",
						alt: "Yogamatters Racerback Tank Top 3",
					},
				],
			},
		},
	});

	const top2 = await prisma.product.create({
		data: {
			title: "Gossypium Freedom Yoga Vest - Orange",
			description: `Introducing our new, practical racerback tank top that provides support through any practice. Made from a sumptuously soft blend of organically grown cotton and Tencel™ Modal, it’s the perfect combination of function and comfort. Great for layering under loose and low-cut tops or wearing as it is, our racerback has a high crew neckline that keeps you covered where you want to be, whatever the asana.`,
			price: 29.99,
			images: {
				create: [
					{
						url: "https://cdn.shopify.com/s/files/1/0278/7259/1939/products/Gossypium-SS-2021-Day-30947_e2189b5a-c2a5-4647-98d4-7511070ddbbb_300x300.jpg?v=1652266097",
						alt: "Freedom Yoga Vest 1",
					},
					{
						url: "https://cdn.shopify.com/s/files/1/0278/7259/1939/products/GossypiumSS2021Day309151_a5d5821b-5c46-45d3-8a82-338434d4e274_300x300.jpg?v=1652266097",
						alt: "Freedom Yoga Vest 2",
					},
					{
						url: "https://cdn.shopify.com/s/files/1/0278/7259/1939/products/Gossypium-SS-2021-Day-30949-1_8b5f73d6-72e9-413a-9fee-bd2ccb43c0ad_300x300.jpg?v=1652266097",
						alt: "Freedom Yoga Vest 3",
					},
				],
			},
		},
	});

	const top3 = await prisma.product.create({
		data: {
			title: "Yogamatters Crop Top - Lilac",
			description: `Introducing our new, practical racerback tank top that provides support through any practice. Made from a sumptuously soft blend of organically grown cotton and Tencel™ Modal, it’s the perfect combination of function and comfort. Great for layering under loose and low-cut tops or wearing as it is, our racerback has a high crew neckline that keeps you covered where you want to be, whatever the asana.`,
			price: 29.99,
			images: {
				create: [
					{
						url: "https://cdn.shopify.com/s/files/1/0278/7259/1939/products/Yogamatters-Natural-Dyes-August-20221811_300x300.jpg?v=1674144256",
						alt: "Crop Top 1",
					},
					{
						url: "https://cdn.shopify.com/s/files/1/0278/7259/1939/products/Yogamatters-Natural-Dyes-August-20221818_300x300.jpg?v=1674144256",
						alt: "Crop Top 2",
					},
					{
						url: "https://cdn.shopify.com/s/files/1/0278/7259/1939/products/Yogamatters-Natural-Dyes-August-20221824_300x300.jpg?v=1674144256",
						alt: "Crop Top 3",
					},
				],
			},
		},
	});

	const pants1 = await prisma.product.create({
		data: {
			title: "Yogamatters Eco Blend Second-Skin Leggings - Black",
			description: `Introducing our new, practical racerback tank top that provides support through any practice. Made from a sumptuously soft blend of organically grown cotton and Tencel™ Modal, it’s the perfect combination of function and comfort. Great for layering under loose and low-cut tops or wearing as it is, our racerback has a high crew neckline that keeps you covered where you want to be, whatever the asana.`,
			price: 29.99,
			images: {
				create: [
					{
						url: "https://cdn.shopify.com/s/files/1/0278/7259/1939/products/RebeccaforYogamattersJanuary20235115_300x300.jpg?v=1676451686",
						alt: "Second-Skin Leggings 1",
					},
					{
						url: "https://cdn.shopify.com/s/files/1/0278/7259/1939/products/RebeccaforYogamattersJanuary20236205_300x300.jpg?v=1676451686",
						alt: "Second-Skin Leggings 2",
					},
					{
						url: "https://cdn.shopify.com/s/files/1/0278/7259/1939/products/RebeccaforYogamattersJanuary20235135_300x300.jpg?v=1676451686",
						alt: "Second-Skin Leggings 3",
					},
				],
			},
		},
	});

	const pants2 = await prisma.product.create({
		data: {
			title: "Girlfriend Collective Luxe Legging - Bordeaux",
			description: `Introducing our new, practical racerback tank top that provides support through any practice. Made from a sumptuously soft blend of organically grown cotton and Tencel™ Modal, it’s the perfect combination of function and comfort. Great for layering under loose and low-cut tops or wearing as it is, our racerback has a high crew neckline that keeps you covered where you want to be, whatever the asana.`,
			price: 29.99,
			images: {
				create: [
					{
						url: "https://cdn.shopify.com/s/files/1/0278/7259/1939/products/1027_LUXE_Scoop_Tank_Bordeaux_Front_300x300.jpg?v=1661516027",
						alt: "Girlfriend Collective Luxe Legging 1",
					},
					{
						url: "https://cdn.shopify.com/s/files/1/0278/7259/1939/products/4015_LUXE_Legging_Long_Bordeaux_Back2_300x300.jpg?v=1661516027",
						alt: "Girlfriend Collective Luxe Legging 2",
					},
					{
						url: "https://cdn.shopify.com/s/files/1/0278/7259/1939/products/4015_LUXE_Legging_Long_Bordeaux_Back_540x.jpg?v=1661516008",
						alt: "Girlfriend Collective Luxe Legging 3",
					},
				],
			},
		},
	});

	const pants3 = await prisma.product.create({
		data: {
			title: "Gossypium Aspire Harem Pants",
			description: `Introducing our new, practical racerback tank top that provides support through any practice. Made from a sumptuously soft blend of organically grown cotton and Tencel™ Modal, it’s the perfect combination of function and comfort. Great for layering under loose and low-cut tops or wearing as it is, our racerback has a high crew neckline that keeps you covered where you want to be, whatever the asana.`,
			price: 29.99,
			images: {
				create: [
					{
						url: "https://cdn.shopify.com/s/files/1/0278/7259/1939/products/GossypiumSS2021Day31549_7c864ed6-3a37-40ce-8682-39bd4a18abdb_300x300.jpg?v=1678204945",
						alt: "Gossypium Aspire Harem Pants 1",
					},
					{
						url: "https://cdn.shopify.com/s/files/1/0278/7259/1939/products/GossypiumSS2021Day31586_3786ccf4-d65c-4ec4-8c44-6b213f852191_300x300.jpg?v=1678204945",
						alt: "Gossypium Aspire Harem Pants 2",
					},
					{
						url: "https://cdn.shopify.com/s/files/1/0278/7259/1939/products/GossypiumSS2021Day31570_21fb9374-0e4d-4db1-a159-5a5cf4ae7adf_300x300.jpg?v=1678204945",
						alt: "Gossypium Aspire Harem Pants 3",
					},
				],
			},
		},
	});

	const equ1 = await prisma.product.create({
		data: {
			title: "Yogamatters Hemp Buckwheat Bolster - Natural",
			description: `Introducing our new, practical racerback tank top that provides support through any practice. Made from a sumptuously soft blend of organically grown cotton and Tencel™ Modal, it’s the perfect combination of function and comfort. Great for layering under loose and low-cut tops or wearing as it is, our racerback has a high crew neckline that keeps you covered where you want to be, whatever the asana.`,
			price: 29.99,
			images: {
				create: [
					{
						url: "https://cdn.shopify.com/s/files/1/0278/7259/1939/products/wKgQugIQ_300x300.jpg?v=1674641554",
						alt: "Yogamatters Hemp Buckwheat Bolster 1",
					},
					{
						url: "https://cdn.shopify.com/s/files/1/0278/7259/1939/products/Hemp-Bolster_01_af19631d-6311-4d88-8e62-cbcb010ce9bb_300x300.jpg?v=1674562241",
						alt: "Yogamatters Hemp Buckwheat Bolster 2",
					},
					{
						url: "https://cdn.shopify.com/s/files/1/0278/7259/1939/products/zizak3U0_fb491ff4-9071-469a-a1cc-337018831c7b_300x300.jpg?v=1674564550",
						alt: "Yogamatters Hemp Buckwheat Bolster 3",
					},
				],
			},
		},
	});

	const equ2 = await prisma.product.create({
		data: {
			title: "Yogamatters Cork Block",
			description: `Introducing our new, practical racerback tank top that provides support through any practice. Made from a sumptuously soft blend of organically grown cotton and Tencel™ Modal, it’s the perfect combination of function and comfort. Great for layering under loose and low-cut tops or wearing as it is, our racerback has a high crew neckline that keeps you covered where you want to be, whatever the asana.`,
			price: 29.99,
			images: {
				create: [
					{
						url: "https://cdn.shopify.com/s/files/1/0278/7259/1939/products/photo0834_1_300x300.jpg?v=1667315633",
						alt: "Yogamatters Cork Block 1",
					},
					{
						url: "https://cdn.shopify.com/s/files/1/0278/7259/1939/products/cork-block-web_300x300.jpg?v=1667315633",
						alt: "Yogamatters Cork Block 2",
					},
					{
						url: "https://cdn.shopify.com/s/files/1/0278/7259/1939/products/photo0880_1_300x300.jpg?v=1667315633",
						alt: "Yogamatters Cork Block 3",
					},
				],
			},
		},
	});

	const equ3 = await prisma.product.create({
		data: {
			title: "Yogamatters Organic Cotton D-ring Yoga Belt",
			description: `Introducing our new, practical racerback tank top that provides support through any practice. Made from a sumptuously soft blend of organically grown cotton and Tencel™ Modal, it’s the perfect combination of function and comfort. Great for layering under loose and low-cut tops or wearing as it is, our racerback has a high crew neckline that keeps you covered where you want to be, whatever the asana.`,
			price: 29.99,
			images: {
				create: [
					{
						url: "https://cdn.shopify.com/s/files/1/0278/7259/1939/products/photo0295_300x300.jpg?v=1677511767",
						alt: "Yogamatters Organic Cotton D-ring Yoga Belt 1",
					},
					{
						url: "https://cdn.shopify.com/s/files/1/0278/7259/1939/products/organic-eucalyptus-belt_300x300.jpg?v=1677511767",
						alt: "Yogamatters Organic Cotton D-ring Yoga Belt 2",
					},
					{
						url: "https://cdn.shopify.com/s/files/1/0278/7259/1939/products/photo0051_2_300x300.jpg?v=1677511767",
						alt: "Yogamatters Organic Cotton D-ring Yoga Belt 3",
					},
				],
			},
		},
	});
	const topsCat = await prisma.category.create({
		data: {
			name: "tops",
			image: {
				create: {
					alt: "yoga tops",
					url: "https://drive.google.com/uc?id=1W9a9CSXXZe4RhmehngrsXYDSqsskjf1f",
				},
			},
			products: {
				connect: [{ id: top1.id }, { id: top2.id }, { id: top3.id }],
			},
		},
	});

	const pantsCat = await prisma.category.create({
		data: {
			name: "pants",
			image: {
				create: {
					alt: "yoga pants",
					url: "https://drive.google.com/uc?id=1OlFsx3ROuMNykVJcDTbzSNUlnK5Qj_H_",
				},
			},
			products: {
				connect: [{ id: pants1.id }, { id: pants2.id }, { id: pants3.id }],
			},
		},
	});

	const equCat = await prisma.category.create({
		data: {
			name: "equipment",
			image: {
				create: {
					alt: "yoga equipment",
					url: "https://drive.google.com/uc?id=1PnBQ2NASREYFe5Y2kKHNzeUnnFMWlAje",
				},
			},
			products: {
				connect: [{ id: equ1.id }, { id: equ2.id }, { id: equ3.id }],
			},
		},
	});
	const featCat = await prisma.category.create({
		data: {
			name: "featured products",
			image: {
				create: {
					alt: "featured products",
					url: "https://cdn.shopify.com/s/files/1/0278/7259/1939/products/Yogamatters-Natural-Dyes-August-20222256_300x300.jpg?v=1663170643",
				},
			},
			products: {
				connect: [{ id: top1.id }, { id: pants1.id }, { id: equ1.id }],
			},
		},
	});
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
