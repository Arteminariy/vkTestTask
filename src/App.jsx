import { useState } from 'react';
import {
	AppRoot,
	SplitLayout,
	SplitCol,
	View,
	Panel,
	PanelHeader,
	Header,
	Group,
	FormItem,
	CustomSelect,
	FormLayout,
	DateInput,
	Textarea,
	Button,
	Div,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
	const [selectedFloor, setSelectedFloor] = useState('');
	const [selectedTower, setSelectedTower] = useState('');
	const [selectedRoom, setSelectedRoom] = useState('');
	const [comment, setComment] = useState('');
	const [time, setTime] = useState(() => new Date());

	const selectedFloors = [];
	const selectedTowers = [
		{
			label: 'А',
			value: 'А',
		},
		{
			label: 'Б',
			value: 'Б',
		},
	];
	const selectedRooms = [];
	for (let i = 3; i <= 27; i++) {
		selectedFloors.push({
			label: i.toString(),
			value: i,
		});
	}
	for (let i = 1; i <= 10; i++) {
		selectedRooms.push({
			label: i.toString(),
			value: i,
		});
	}
	const handleSubmit = () => {
		if (selectedTower && selectedFloor && selectedRoom && comment) {
			console.log(
				JSON.stringify({
					tower: selectedTower,
					floor: selectedFloor,
					room: selectedRoom,
					time: time,
					comment: comment,
				})
			);
		} else {
			console.log('Незаполненны данные');
		}
	};

	const cleanForm = () => {
		setSelectedTower('');
		setSelectedFloor('');
		setSelectedRoom('');
		setComment('');
		setTime(() => new Date());
		console.log('Очищенно');
	};

	return (
		<AppRoot>
			<SplitLayout header={<PanelHeader separator={false} />}>
				<SplitCol autoSpaced>
					<View activePanel="main">
						<Panel id="main">
							<PanelHeader>Выбор переговорки</PanelHeader>
							<Group
								header={
									<Header mode="secondary">
										Выбор переговорки
									</Header>
								}
							>
								<FormLayout>
									<FormItem top="Выбор башни">
										<CustomSelect
											placeholder="Не выбран"
											options={selectedTowers}
											selectType={selectedTower}
											value={selectedTower}
											defaultValue="Не выбран"
											onChange={(e) =>
												setSelectedTower(e.target.value)
											}
											allowClearButton
										/>
									</FormItem>
									<FormItem top="Выбор этажа">
										<CustomSelect
											placeholder="Не выбран"
											options={selectedFloors}
											selectType={selectedFloor}
											value={selectedFloor}
											defaultValue="Не выбран"
											onChange={(e) =>
												setSelectedFloor(e.target.value)
											}
											allowClearButton
										/>
									</FormItem>
									<FormItem top="Выбор переговорки">
										<CustomSelect
											placeholder="Не выбран"
											options={selectedRooms}
											selectType={selectedRoom}
											value={selectedRoom}
											defaultValue="Не выбран"
											onChange={(e) =>
												setSelectedRoom(e.target.value)
											}
											allowClearButton
										/>
									</FormItem>
									<FormItem top="Выбор даты сходки">
										<DateInput
											value={time}
											onChange={setTime}
											enableTime={true}
											disablePast={true}
											closeOnChange={true}
										/>
									</FormItem>
									<FormItem top="Комментарий">
										<Textarea
											placeholder="Сходка сеньоров в законе"
											defaultValue=""
											value={comment}
											onChange={(e) =>
												setComment(e.target.value)
											}
										/>
									</FormItem>
									<Div>
										<Button
											size="l"
											type="submit"
											onClick={(e) => {
												e.preventDefault();
												handleSubmit();
											}}
										>
											Отправить
										</Button>
										<Button
											style={{ marginLeft: '20px' }}
											size="l"
											onClick={() => cleanForm()}
										>
											Очистить
										</Button>
									</Div>
								</FormLayout>
							</Group>
						</Panel>
					</View>
				</SplitCol>
			</SplitLayout>
		</AppRoot>
	);
};
export default App;
