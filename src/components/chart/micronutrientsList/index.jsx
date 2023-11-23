import style from "./style.module.scss";

const MicronutrientBar = ({ label, amount, daily, unit="mg" }) => {
	return (
		<li className={style.micronutrientBar}>
			<div className={style.data}>
				<label>{label}</label>
				<p className={style.amount}>{(amount*100).toFixed()/100}/{daily}{unit}</p>
			</div>
			<div className={style.bar}>
				<div
					className={style.fill}
					style={{
						width: `${Math.min(Math.max(amount, daily/50), daily)/daily*100}%`
					}} />
			</div>
		</li>
	);
};

const MicronutrientsList = ({ items, title }) => {	
	return (
		<ul className={style.micronutrientsList}>
			<h3>{title}</h3>
			{Object.keys(items).map(key =>
				<MicronutrientBar
					label={key}
					amount={items[key].amount}
					daily={items[key].daily}
					unit={items[key].unit}
					key={key} />
			)}
		</ul>
	);
};

export default MicronutrientsList;
