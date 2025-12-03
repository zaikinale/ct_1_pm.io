
const dataForFilter = [
	{
		name: "Арбатская",
		code: "Arbat",
	},
	{
		name: "Александровский сад",
		code: "Alexanders Garden",
	},
	{
		name: "Московская",
		code: "Moscow",
	},
	{
		name: "Парк Культуры",
		code: "Culture",
	},
	{
		name: "Театральная",
		code: "Theater",
	},
];

export default function FilterCafes() {
    
    return (
        <select name="subway" id="subway">
	        <option value="All">Все</option>
            <option value="Московская">Московская</option>
			<option value="Арбат">Арбат</option>
		    <option value="Парк Культуры">Парк Культуры</option>
			<option value="Красная Площадь">Красная Площадь</option>
			<option value="Театральная">Театральная</option>
        </select>
    )
}