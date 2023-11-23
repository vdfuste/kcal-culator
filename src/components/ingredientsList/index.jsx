import { useEffect, useState } from "react";
import style from "./style.module.scss";

const Item = ({ data, items, setItems }) => {
	const [portion, setPortion] = useState(data.portion);
	const { name, nutrients } = data;

	const handleType = event => {
		setPortion(parseInt(event.target.value) | 0);
	};

	const handleDelete = () => {
		setItems(prev => {
			const newItems = [...prev];
			const deleteIndex = prev.findIndex(item => item.name === name);
			newItems.splice(deleteIndex, 1);
			return newItems;
		});
	};

	useEffect(() => {
		const current = [...items];
		const itemId = current.findIndex(item => item.name === name);
		current[itemId].portion = portion;

		setItems(current);
	}, [portion]);

	return (
		<li className={style.item}>
			<div className={style.data}>
				<p>{name}</p>
				<p className={style.calories}>{(nutrients.calories * portion).toFixed(0)/100}Kcal</p>
			</div>
			<div className={style.inputs}>
				<input
					type="text"
					value={portion}
					onChange={handleType} />
				<p className={style.unit}>grams</p>
			</div>
			<button
				className={style.closeBtn}
				onClick={handleDelete}
			>X</button>
		</li>
	);
};

const IngredientsList = ({ items, setItems }) => {
	return (
		<ul className={style.ingredientsList}>
			{items.map((item, id) => <Item data={item} items={items} setItems={setItems} key={id} />)}
		</ul>
	);
};

export default IngredientsList;
