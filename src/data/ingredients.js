export const dailyNutrients = {
	calories: { amount: 0, daily: 2500, unit: "Kcal" },
	carbohydrates: {
		total: { amount: 0, daily: 300, unit: "g" },
		dietaryFiber: { amount: 0, daily: 38, unit: "g" },
		sugar: { amount: 0, daily: 37.5, unit: "g" },
	},
	protein: { amount: 0, daily: 56, unit: "g" },
	fat: {
		total: { amount: 0, daily: 70, unit: "g" },
		saturatedFat: { amount: 0, daily: 20, unit: "g" },
		transFat: { amount: 0, daily: 0, unit: "g" },
	},
	minerals: {
		calcium: { amount: 0, daily: 1000, unit: "mg" },
		iron: { amount: 0, daily: 8, unit: "mg" },
		manganese: { amount: 0, daily: 2.3, unit: "mg" },
		magnesium: { amount: 0, daily: 420, unit: "mg" },
		potassium: { amount: 0, daily: 4700, unit: "mg" },
		selenium: { amount: 0, daily: 55, unit: "µg" },
		zinc: { amount: 0, daily: 11, unit: "mg" },
	},
	vitamins: {
		folate: { amount: 0, daily: 400, unit: "µg" },
		niacin: { amount: 0, daily: 16, unit: "mg" },
		pantothenicAcid: { amount: 0, daily: 5, unit: "mg" },
		riboflavin: { amount: 0, daily: 1.3, unit: "mg" },
		thiamin: { amount: 0, daily: 1.2, unit: "mg" },
		vitaminA: { amount: 0, daily: 900, unit: "µg" },
		vitaminB5: { amount: 0, daily: 5, unit: "mg" },
		vitaminB6: { amount: 0, daily: 1.3, unit: "mg" },
		vitaminB12: { amount: 0, daily: 2.4, unit: "µg" },
		vitaminD: { amount: 0, daily: 20, unit: "µg" },
		vitaminC: { amount: 0, daily: 90, unit: "mg" },
		vitaminE: { amount: 0, daily: 15, unit: "mg" },
		vitaminK: { amount: 0, daily: 120, unit: "µg" },
	},
	other: {
		choline: { amount: 0, daily: 550, unit: "mg" },
		cholesterol: { amount: 0, daily: 300, unit: "mg" },
		omega3FattyAcids: { amount: 0, daily: 1.6, unit: "g" },
		sodium: { amount: 0, daily: 2300, unit: "mg" },
	}
};

export const ingredients = [
	{
		name: "Avocado",
		nutrients: {
			calories: 160,			  // kcal
			carbohydrates: {
				total: 8.5,			  // g
				dietaryFiber: 6.7,	  // g
				sugar: 0.7,			  // g
			},
			protein: 2,				  // g
			fat: {
				total: 14.7,		  // g
				saturatedFat: 4.2,	  // g
				transFat: 0,		  // g
			},
			minerals: {
				calcium: 6,			  // mg
				iron: 0.3,			  // mg
				manganese: 0.038,	  // mg
				magnesium: 29,		  // mg
				potassium: 485,		  // mg
				selenium: 20.1,		  // µg
				zinc: 0.64,			  // mg
			},
			vitamins: {
				folate: 22,			  // µg
				niacin: 0.045,		  // mg
				pantothenicAcid: 1.4, // mg
				riboflavin: 0.45,	  // mg
				thiamin: 0.05,		  // mg
				vitaminA: 73,		  // µg
				vitaminB5: 0.61,	  // mg
				vitaminB6: 0.1,		  // mg
				vitaminB12: 1.11,	  // µg
				vitaminD: 2.1,		  // µg
				vitaminC: 5,		  // mg
				vitaminE: 1.03,		  // mg
				vitaminK: 21,		  // µg
			},
			other: {
				choline: 294,		  // mg
				cholesterol: 186,	  // mg
				omega3FattyAcids: 0,  // mg
				sodium: 4,			  // mg
			}
		},
	},
	{
		name: "Apple",
		nutrients: {
			calories: 95,
			carbohydrates: {
				total: 25,
				dietaryFiber: 4.4,
				sugar: 18.9,
			},
			protein: 0.5,
			fat: {
				total: 0.3,
				saturatedFat: 0,
				transFat: 0,
			},
			minerals: {
				calcium: 6,
				iron: 0.12,
				manganese: 0.035,
				magnesium: 5,
				potassium: 195,
				selenium: 0,
				zinc: 0.04,
			},
			vitamins: {
				folate: 3,
				niacin: 0.1,
				pantothenicAcid: 0.06,
				riboflavin: 0.03,
				thiamin: 0.02,
				vitaminA: 3,
				vitaminB5: 0.06,
				vitaminB6: 0.04,
				vitaminB12: 0,
				vitaminD: 0,
				vitaminC: 8.4,
				vitaminE: 0.33,
				vitaminK: 4,
			},
			other: {
				choline: 3.4,
				cholesterol: 0,
				omega3FattyAcids: 0,
				sodium: 1,
			}
		},
	},
	{
		name: "Banana",
		nutrients: {
			calories: 72,
			carbohydrates: {
				total: 19,
				dietaryFiber: 2.1,
				sugar: 10,
			},
			protein: 0.9,
			fat: {
				total: 0.3,
				saturatedFat: 0,
				transFat: 0,
			},
			minerals: {
				calcium: 2,
				iron: 0.1,
				manganese: 0.1,
				magnesium: 21.9,
				potassium: 290,
				selenium: 0,
				zinc: 0.1,
			},
			vitamins: {
				folate: 9,
				niacin: 0.5,
				pantothenicAcid: 0.3,
				riboflavin: 0.1,
				thiamin: 0.03,
				vitaminA: 51.8,
				vitaminB5: 0.3,
				vitaminB6: 0.3,
				vitaminB12: 0,
				vitaminD: 0,
				vitaminC: 6.8,
				vitaminE: 0.1,
				vitaminK: 0.5,
			},
			other: {
				choline: 7.6,
				cholesterol: 0,
				omega3FattyAcids: 0,
				sodium: 0,
			}
		},
	},
	{
		name: "Bell Pepper",
		nutrients: {
			calories: 37,
			carbohydrates: {
				total: 7.2,
				dietaryFiber: 2.5,
				sugar: 5,
			},
			protein: 1.2,
			fat: {
				total: 0.4,
				saturatedFat: 0,
				transFat: 0,
			},
			minerals: {
				calcium: 7,
				iron: 0.4,
				manganese: 0.1,
				magnesium: 12,
				potassium: 211,
				selenium: 0,
				zinc: 0.2,
			},
			vitamins: {
				folate: 46,
				niacin: 0.9,
				pantothenicAcid: 0.3,
				riboflavin: 0.1,
				thiamin: 0.1,
				vitaminA: 3726,
				vitaminB5: 0.3,
				vitaminB6: 0.3,
				vitaminB12: 0,
				vitaminD: 0,
				vitaminC: 152,
				vitaminE: 1.6,
				vitaminK: 4.9,
			},
			other: {
				choline: 6.1,
				cholesterol: 0,
				omega3FattyAcids: 0,
				sodium: 3,
			}
		},
	},
	/*{
		name: "Broccoli",
		nutrients: {

		},
	},
	{
		name: "Cabbage",
		nutrients: {

		},
	},
	{
		name: "Carrots",
		nutrients: {

		},
	},
	{
		name: "Egg",
		nutrients: {

		},
	},
	{
		name: "Onion",
		nutrients: {

		},
	},
	{
		name: "Oranges",
		nutrients: {

		},
	},
	{
		name: "Potatoes",
		kcal: 77,
		nutrients: {

		},
	},
	{
		name: "Spinach",
		nutrients: {

		},
	},
	{
		name: "Strawberries",
		nutrients: {

		},
	},*/
];
