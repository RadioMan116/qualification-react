import React from "react";
import "./Item.scss";





const item = () => {

};
class Item extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isToggleOn: true };

		// Эта привязка обязательна для работы `this` в колбэке.

		// this.handleClick = this.handleClick.bind(this);
		// this.getItemIndexById = this.getItemIndexById.bind(this);
	}

	handleClick(id) {
		// let index = this.getItemIndexById(id);
		console.log(id);
		let index = id;
		console.log(index);
		let newItems = this.store.state;
		if (newItems[index].class) {
			newItems[index].class = false;
			this.store.state.class = false;

		}
		else {
			newItems[index].class = true;
			this.store.state.class = true;
		}

		console.log(newItems[index].class);
		console.log(this.store.state.class);

	}


	getItemIndexById(id) {
		let res = -1;
		this.store.state.forEach((item, index) => {
			if (item.id === id) res = index;
		});
		return res;
	}

	store = {
		state: [
			{
				id: 0,
				caption: 'Сказочное заморское',
				title: 'Нямушка',
				desc: 'с фуа-гра',
				servings: '10 порций',
				gift: ['мышь в подарок'],
				weight: '0,5',
				text: 'Печень утки разварная с артишоками.',
				class: true,

			},
			{

				id: 1,
				caption: 'Сказочное заморское',
				title: 'Нямушка',
				desc: 'с рыбой',
				servings: '24 порций',
				gift: ['2 мыши в подарок'],
				weight: '2',
				text: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
				class: true,
			},
			{
				id: 2,
				caption: 'Сказочное заморское',
				title: 'Нямушка',
				desc: 'с курой',
				servings: '100 порций',
				gift: ['5 мышей в подарок', 'заказчик доволен'],
				weight: '2',
				text: 'Филе из цыплят с трюфелями в бульоне.',
				class: true,
			}
		]

	};

	render() {
		return (
			this.store.state.map((el, index) => {

				return (
					<div className={`item ${el.class}`} onClick={() => this.handleClick(index)}>


						<div className='item-inner'>
							<div className='item-caption'>
								{el.caption}
								<span className='active'>
									Котэ не одобряет?
								</span>
							</div>
							<div className='item-title'>
								{el.title}
							</div>
							<div className='item-desc'>
								{el.desc}
							</div>
							<div className='item-servings'>
								{el.servings}
							</div>
							{el.gift.map(gift => <div className='item-gift'>{gift}</div>)}
							<div className='item-pic'>

							</div>
							<div className='item-weight'>
								<span>
									{el.weight}
								</span>
									кг
							</div>
						</div>
						<div className='item-text'>
							Чего сидишь? Порадуй котэ, <a href='#'>купи.</a>
							<span className='active'>{el.text}</span>
						</div>
					</div>
				);
			})
		);
	}
}

export default Item;