import style from "./style.module.scss";

import MicronutrientsList from "./micronutrientsList";
import { dailyNutrients } from "@/data/ingredients";

const addNutrientsValues = (target, nutrient, portion) => {
	Object.keys(nutrient).forEach(key => {
		target[key].amount += nutrient[key] * portion/100;
	});
};

const Chart = ({ items }) => {	
	const nutrients = JSON.parse(JSON.stringify(dailyNutrients));
	
	items.forEach(item => {
		const { portion } = item;
		const {
			calories,
			carbohydrates, protein, fat,
			minerals, vitamins, other
		} = item.nutrients;
		
		nutrients.calories.amount += calories * portion/100;
		nutrients.protein.amount += protein * portion/100;

		addNutrientsValues(nutrients.carbohydrates, carbohydrates, portion);
		addNutrientsValues(nutrients.fat, fat, portion);
		addNutrientsValues(nutrients.minerals, minerals, portion);
		addNutrientsValues(nutrients.vitamins, vitamins, portion);
		addNutrientsValues(nutrients.other, other, portion);
	});

	// Calculate macronutrients percents
	const total = 
		  nutrients.carbohydrates.total.amount
		+ nutrients.fat.total.amount
		+ nutrients.protein.amount;

	let carbsPercent = 0.33;
	let proteinPercent = 0.33;
	let fatPercent = 0.34;

	if(total > 0) {
		carbsPercent = nutrients.carbohydrates.total.amount / total;
		proteinPercent = nutrients.protein.amount / total;
		fatPercent = nutrients.fat.total.amount / total;
	}

	const factor = 750;
	const carbsTotal = factor * carbsPercent;
	const proteinTotal = factor * (carbsPercent + proteinPercent);
	const fatTotal = factor * (carbsPercent + proteinPercent + fatPercent);

	return (
		<div className={style.chart}>
			<div className={style.circleWrapper}>
				<svg className={style.circle} width={320} height={320}>
					<circle
						className={style.fat}
						style={{ strokeDasharray: `${fatTotal} ${factor - fatTotal}` }}
						cx={160} cy={160} r={120} fill="transparent" />
				
					<circle
						className={style.protein}
						style={{ strokeDasharray: `${proteinTotal} ${factor - proteinTotal}` }}
						cx={160} cy={160} r={120} fill="transparent" />
				
					<circle
						className={style.carbs}
						style={{ strokeDasharray: `${carbsTotal} ${factor - carbsTotal}` }}
						cx={160} cy={160} r={120} fill="transparent" />

					<circle cx={160} cy={160} r={150} fill="transparent" stroke="white" strokeWidth={8} />
				</svg>
				<div className={style.center}>
					<p className={style.kcal}>{nutrients.calories.amount}Kcal</p>
					<div className={style.nutrients}>
						<div className={style.nutrient}>
							<div className={`${style.color} ${style.carbs}`}></div>
							<p>Carbs: {((total > 0 ? carbsPercent : 0) * 100).toFixed(2)}% ({nutrients.carbohydrates.total.amount.toFixed(2)}g)</p>
						</div>
						<div className={style.nutrient}>
							<div className={`${style.color} ${style.protein}`}></div>
							<p>Protein: {((total > 0 ? proteinPercent : 0) * 100).toFixed(2)}% ({nutrients.fat.total.amount.toFixed(2)}g)</p>
						</div>
						<div className={style.nutrient}>
							<div className={`${style.color} ${style.fat}`}></div>
							<p>Fat: {((total > 0 ? fatPercent : 0) * 100).toFixed(2)}% ({nutrients.protein.amount.toFixed(2)}g)</p>
						</div>
					</div>
				</div>
			</div>
			<div className={style.nutrientsLists}>
				<MicronutrientsList items={nutrients.vitamins} title="Vitamins" />
				<div className={style.column}>
					<MicronutrientsList items={nutrients.minerals} title="Minerals" />
					<MicronutrientsList items={nutrients.other} title="Other Nutrients" />
				</div>
			</div>
		</div>
	);
};

export default Chart;
