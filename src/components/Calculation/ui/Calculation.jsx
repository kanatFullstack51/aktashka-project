import React, { useEffect, useState } from 'react';

import { Button } from 'src/widgets/Button';
import styles from './calculationPage.module.scss'
import { Input } from 'src/widgets/Input';
import { Select } from 'src/widgets/Select/ui/Select';

export const Calculation = () => {

	const [currentTab, setCurrentTab] = useState(null);

	const tabs = [
		{
			name: "Общие данные",
			id: 1,
			content: <GeneralData />,
		},
		{
			name: "Планировка",
			id: 2,
			content: <HouseLayout />
		},
		{
			name: "Детали и материалы",
			id: 3,
			content: <Details />
		},
		{
			name: "Получить расчет",
			id: 4,
			content: <GetCalculation />
		},
	];



	const handleTabClick = (e) => {
		setCurrentTab(e.target.id);
		console.log(e.target.id)
	}

	const handleNextClick = () => {
		setCurrentTab(tabs.findIndex((el) => el.id + 1))
		console.log(setCurrentTab(tabs.findIndex((el) => el.id === tabs.id)))
	}



	return (
		<div className={styles.calculation}>
			<div className={styles.calculation_inner}>
				<h1 className={styles.calculation_title}>Рассчитайте стоимость вашего дома</h1>
				<div className={styles.calculation_block}>
					<div className={styles.calculation_tabs}>
						{tabs.map((tabs, i) =>
							<Button
								key={i}
								id={tabs.id}
								disabled={currentTab === `${tabs.id}`}
								onClick={(handleTabClick)}
								projectType='calculation_tab'
								children={tabs.name}
							/>
						)}
					</div>
					<div className={styles.calculation_data}>
						{tabs.map((tabs, i) =>
							<div
								key={i}>
								{currentTab === `${tabs.id}`
									&&
									<div>
										{tabs.content}
									</div>}
							</div>
						)}
					</div>
					<div className={styles.calculation_next}>
						<Button
							onClick={handleNextClick}
							projectType='calculation_btn'
							children={'next'}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}



const CalculationForm = () => {


	return (
		<div>
			<form>

			</form>
		</div>
	)
}

const GeneralData = () => {


	const [rangeValue, setRangeValue] = useState(0)

	const onRangeValue = (e) => setRangeValue(e.target.value)


	return (
		<div className={styles.general}>
			<div className={styles.general_form}>
				<div className={styles.general_select}>
					<div className={styles.general_range}>
						<span>{rangeValue}</span>
						<span>м2</span>
						<Input
							onChange={onRangeValue}
							className={styles.general_range_value}
							type="range"
							min='0'
							max='2000' />
					</div>
				</div>
				<div className={styles.general_select}>
					<div className={styles.general_select_block}>
						<span>Цокольный этаж</span>
						<Select>
							<option
								className={styles.general_select_option}
								value="yes">
								Да
							</option>
							<option
								className={styles.general_select_option}
								value="no">
								Нет
							</option>
						</Select>
					</div>
				</div>
				<div className={styles.general_select}>
					<div className={styles.general_select_block}>
						<span>Этажность</span>
						<Select>
							<option
								className={styles.general_select_option}
								value="1">1
							</option>
							<option
								className={styles.general_select_option}
								value="2">2
							</option>
							<option
								className={styles.general_select_option}
								value="3">3
							</option>
						</Select>
					</div>
				</div>
				<div className={styles.general_select}>
					<div className={styles.general_select_block}>
						<span>Из чего строим</span>
						<Select>
							<option
								className={styles.general_select_option}
								value="ceramic">
								керамика
							</option>
							<option
								className={styles.general_select_option}
								value="gazi_block">
								газисиликотные блоки
							</option>
							<option
								className={styles.general_select_option}
								value="two_karkas">
								двутавровый каркас
							</option>
							<option
								className={styles.general_select_option}
								value="idn">
								не знаю
							</option>
						</Select>
					</div>
				</div>
				<div className={styles.general_select}>
					<div className={styles.general_select_block}>
						<span>Мансарда</span>
						<Select>
							<option
								className={styles.general_select_option}
								value="yes">
								Да
							</option>
							<option
								className={styles.general_select_option}
								value="no">
								Нет
							</option>
							<option
								className={styles.general_select_option}
								value="idn">
								Не знаю
							</option>
						</Select>
					</div>
				</div>
				<div className={styles.general_select}>
					<div className={styles.general_select_block}>
						<span>Гараж</span>
						<Select>
							<option
								className={styles.general_select_option}
								value="one_car"
							>1 машина
							</option>
							<option
								className={styles.general_select_option}
								value="two_car">
								2 машины
							</option>
							<option
								className={styles.general_select_option}
								value="idn">
								Не знаю
							</option>
						</Select>
					</div>
				</div>
			</div>
		</div>
	)
}

const HouseLayout = () => {
	return (
		<div className={styles.general}>
			<div className={styles.general_form}>
				<div className={styles.general_select}>
					<div className={styles.general_select_block}>
						<span>Спальня на первом этаже</span>
						<Select>
							<option
								className={styles.general_select_option}
								value="yes">
								Да
							</option>
							<option
								className={styles.general_select_option}
								value="no">
								Нет
							</option>
							<option
								className={styles.general_select_option}
								value="idn">
								Не знаю
							</option>
						</Select>
					</div>
				</div>
				<div className={styles.general_select}>
					<div className={styles.general_select_block}>
						<span>Терраса</span>
						<Select>
							<option
								className={styles.general_select_option}
								value="yes">
								Да
							</option>
							<option
								className={styles.general_select_option}
								value="no">
								Нет
							</option>
							<option
								className={styles.general_select_option}
								value="idn">
								Не знаю
							</option>
						</Select>
					</div>
				</div>
				<div className={styles.general_select}>
					<div className={styles.general_select_block}>
						<span>Второй свет</span>
						<Select>
							<option
								className={styles.general_select_option}
								value="yes">
								Да
							</option>
							<option
								className={styles.general_select_option}
								value="no">
								Нет
							</option>
							<option
								className={styles.general_select_option}
								value="idn">
								Не знаю
							</option>
						</Select>
					</div>
				</div>
				<div className={styles.general_select}>
					<div className={styles.general_select_block}>
						<span>Балкон</span>
						<Select>
							<option
								className={styles.general_select_option}
								value="yes">
								Да
							</option>
							<option
								className={styles.general_select_option}
								value="no">
								Нет
							</option>
							<option
								className={styles.general_select_option}
								value="idn">
								Не знаю
							</option>
						</Select>
					</div>
				</div>
				<div className={styles.general_select}>
					<div className={styles.general_select_block}>
						<span>Общее количество спален</span>
						<Input
							placeholder={'Количество спален'}
							projectType='calculator_room'
						/>
					</div>
				</div>
				<div className={styles.general_select}>
					<div className={styles.general_select_block}>
						<span>Камин</span>
						<Select>
							<option
								className={styles.general_select_option}
								value="yes">
								Да
							</option>
							<option
								className={styles.general_select_option}
								value="no">
								Нет
							</option>
							<option
								className={styles.general_select_option}
								value="idn">
								Не знаю
							</option>
						</Select>
					</div>
				</div>
			</div>
		</div>
	)
}


const Details = () => {
	return (
		<div className={styles.general}>
			<div className={styles.general_form}>
				<div className={styles.general_select}>
					<div className={styles.general_select_block}>
						<span>Материал отделки фасада</span>
						<Select>
							<option
								className={styles.general_select_option}
								value="FakeDiamond">
								Искусственный камень
							</option>
							<option
								className={styles.general_select_option}
								value="Brick lined">
								Кирпич облицованный
							</option>
							<option
								className={styles.general_select_option}
								value="WoodCladding">
								Облицовка деревом
							</option>
							<option
								className={styles.general_select_option}
								value="FiberCement">
								Сайдинг фиброцементный
							</option>
							<option
								className={styles.general_select_option}
								value="ThermalPanels">
								Термопанели
							</option>
							<option
								className={styles.general_select_option}
								value="plaster">
								Штукатурка
							</option>
							<option
								className={styles.general_select_option}
								value="idn">
								Не знаю
							</option>
						</Select>
					</div>
				</div>
				<div className={styles.general_select}>
					<div className={styles.general_select_block}>
						<span>Тип внутренней отделки</span>
						<Select>
							<option
								className={styles.general_select_option}
								value="eurostandart">
								Евростандарт
							</option>
							<option
								className={styles.general_select_option}
								value="idn">
								Не знаю
							</option>
						</Select>
					</div>
				</div>
				<div className={styles.general_select}>
					<div className={styles.general_select_block}>
						<span>Второй свет</span>
						<Select>
							<option
								className={styles.general_select_option}
								value="yes">
								Да
							</option>
							<option
								className={styles.general_select_option}
								value="no">
								Нет
							</option>
							<option
								className={styles.general_select_option}
								value="idn">
								Не знаю
							</option>
						</Select>
					</div>
				</div>

			</div>
		</div>
	)
}

const GetCalculation = () => {
	return (
		<div className={styles.general}>
			<div className={styles.general_form}>
				<div className={styles.general_select}>
					<div className={styles.general_select_block}>
						<span>Начало строительства</span>
						<Select>
							<option
								className={styles.general_select_option}
								value="FakeDiamond">
								Готов сейчас обсудить условия
							</option>
							<option
								className={styles.general_select_option}
								value="Brick lined">
								В ближайшие полгода
							</option>
							<option
								className={styles.general_select_option}
								value="WoodCladding">
								В ближайший год
							</option>
							<option
								className={styles.general_select_option}
								value="FiberCement">
								Не знаю
							</option>
						</Select>
					</div>
				</div>
				<div className={styles.general_select}>
					<div className={styles.general_select_block}>
						<span>Ваш телефон</span>
						<Input
							type='tel'
							placeholder={"+7 (__) ___-__-__"}
							pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
							projectType='calculator_room'
						/>
					</div>
				</div>
				<div className={styles.general_select}>
					<div className={styles.general_select_block}>
						<span>Ваше имя</span>
						<Input
							placeholder={'Имя'}
							projectType='calculator_room'
						/>
					</div>
				</div>
				<div className={styles.general_select}>
					<div className={styles.general_select_block}>
						<span>Ваша фамилия</span>
						<Input
							placeholder={'Фамилия'}
							projectType='calculator_room'
						/>
					</div>
				</div>
				<div className={styles.general_select}>
					<div className={styles.general_select_block}>
						<span>Ваш email</span>
						<Input
							placeholder={'Введите Email'}
							projectType='calculator_room'
						/>
					</div>
				</div>
				<div className={styles.general_select}>
					<div className={styles.general_select_block}>
						<span>Ваш комментарий</span>
						<textarea
							placeholder={'Введите текст'}
							className={styles.calculator_room_text}
						>
						</textarea>
					</div>
				</div>
			</div>
		</div>
	)
}