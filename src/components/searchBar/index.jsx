"use client";

import { useState } from "react";
import style from "./style.module.scss";
import { ingredients } from "@/data/ingredients";

const SearchBar = ({ items, setItems }) => {
	const [search, setSearch] = useState("");
	const [open, setOpen] = useState(false);
	const [hover, setHover] = useState(false);

	const results = ingredients.filter(item => item.name.includes(search));

	const handleClick = name => {
		setSearch("");
		setOpen(false);
		
		if(items.some(item => item.name === name)) return;
		
		const ingredient = ingredients.find(item => item.name === name);
		ingredient["portion"] = 100;
		
		setItems(prev => [...prev, ingredient]);
	};
	
	const handleType = event => {
		setSearch(event.target.value);
	};

	return (
		<div className={`${style.searchBar} ${open ? style.open : ""}`}>
			<input
				type="text"
				value={search}
				onChange={handleType}
				onFocus={() => setOpen(true)}
				onBlur={() => setOpen(hover)}
				placeholder="Add some ingredients" />

			<ul
				className={style.results}
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				{results.map(item => {
					return (
						<li
							key={item.name}
							onClick={() => handleClick(item.name)}
						>
							{item.name}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default SearchBar;
