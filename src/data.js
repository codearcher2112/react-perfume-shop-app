export const productData = [
	{
		"id": "1",
		"brand": "Carolina Herrera",
		"name": "good girl",
		"prices": 80,
		"desc": "Carolina Herrera Good Girl Eau de Parfum is an elite oriental fragrance enclosed in an original bottle in the form of an exquisite black shoe . The ideal embodiment of oriental charm, mystery and unattainable attractiveness. The initial note of Good Girl is the fragrant, passionate smell of coffee and delicate almonds, the heart note is the floral scents of jasmine sambac and velvet tuberose, and the composition of eau de parfum is completed with cocoa and spicy tonka beans. For true connoisseurs of oriental scents , the Carolina Herrera brand has created only their inherent viscous, bright, and at the same time delicate fragrance.",
		"imgSrc": "https://goldapple.ru/media/catalog/product/8/4/8411061819838_1_tginxynyoinw697m.jpg"
	},
	{
		"id": "2",
		"brand": "Carolina Herrera",
		"name": "ch men",
		"prices": 110,
		"desc": "Carolina Herrera CH Men Eau de Toilette is built on the contrast of aromas. Sunny and astringent notes of bergamot and bright grapefruit, complemented by the sweet aroma of vanilla sugar, lead to a trail of spicy saffron and nutmeg. The composition is complemented by the warm smell of wood, accords of oak moss, leather and amber. The stylish and extravagant scent of eau de toilette invites you on long journeys, giving even more masculinity to its owner. CH Men water is distinguished by its long-lasting scent, which lingers pleasantly over the entire skin. The fragrance from Carolina Herrera is packaged in a laconic bottle, complemented by brutal elements.",
		"imgSrc": "https://goldapple.ru/media/catalog/product/8/4/8411061665022_1_xp745kogl5i4azc8.jpg"
	},
	{
		"id": "3",
		"brand": "Carolina Herrera",
		"name": "good girl légère",
		"prices": 120,
		"desc": "Carolina Herrera Good Girl Légère Eau de Parfum belongs to the category of floral oriental fragrances. The perfume composition was developed by the author Louis Turner, the release of the product began in 2018. It is worth saying that eau de parfum belongs to the popular series of “shoes” fragrances. It is called so because the water bottle has the shape of an elegant gold-colored shoe with a very high stiletto heel. Carolina Herrera dedicated the composition to the ambiguity of a woman's nature, her duality and mystery. The fragrance of Legere is most revealed in the evening. It is dominated by notes of ylang-ylang, jasmine, sandalwood.",
		"imgSrc": "https://goldapple.ru/media/catalog/product/cache/fb5d06f7acfb2f26f85333624ccbfb5e/8/4/8411061907580_1_axryly82eufvlyic.jpg"
	},
	{
		"id": "4",
		"brand": "Carolina Herrera",
		"name": "bad boy le parfum",
		"prices": 160,
		"desc": "Carolina Herrera revives the myth of eternal rebellion with the new men's fragrance Bad Boy Le Parfum, with unpredictable notes that reveal the character of a strong and energetic personality. The fragrance is housed in a mesmerizing matte bottle shaped like the iconic lightning bolt from the Bad Boy universe.Upon application of Bad Boy Le Parfum, the skin is instantly energized by the combination of grapefruit and a bold hemp accord. This decisive wave is followed by harmoniously intertwining notes of black pepper and geranium. After a few minutes, Bad Boy Le Parfum delivers the final surprise and reveals itself with a special leather accord, as individual as a talisman. The daring and sexy accord of leather is accentuated by the sound of vetiver, a characteristic and classic note in men's perfumery. Vetiver serves a dual purpose: it makes the fragrance practical and gives men the opportunity to give their style a certain personality.",
		"imgSrc": "https://goldapple.ru/media/catalog/product/cache/fb5d06f7acfb2f26f85333624ccbfb5e/8/4/8411061991886_1_n9mxwfqew14fqviw.jpg"
	},
	{
		"id": "5",
		"brand": "Carolina Herrera",
		"name": "212vip",
		"prices": 89,
		"desc": "Carolina Herrera 212VIP Eau de Parfum is a stunning fragrance of a mysterious oriental night, a scent of passion that awakens true femininity and sexuality. The initial note of eau de parfum is sweet rum and tart passion fruit, the heart note of 212VIP is exquisite musk and fragrant gardenia, and delicate vanilla and tonka bean finish"
	}
]

export const getProducts = () => {
	return new Promise((res, rej) => {
		setTimeout(() => res(productData), 2000);
	});
}


