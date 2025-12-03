
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
            {dataForFilter.map(item => (
                <option key={item.code} value={item.code}>
                    {item.name}
                </option>
            ))}
        </select>
    )
}