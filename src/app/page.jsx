"use client";

import { useState } from "react";
import style from "./page.module.scss";

import Chart from "@/components/chart";
import IngredientsList from "@/components/ingredientsList";
import SearchBar from "@/components/searchBar";

const Home = () => {
	const [ingredients, setIngredients] = useState([]);

	return (
		<main className={style.main}>
			<div className={style.ingredients}>
				<SearchBar items={ingredients} setItems={setIngredients} />
				<IngredientsList items={ingredients} setItems={setIngredients} />
			</div>
			<div className={style.nutrients}>
				<Chart items={ingredients} />
			</div>
		</main>
	);
};

export default Home;
