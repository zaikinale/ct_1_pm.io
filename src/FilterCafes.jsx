
const dataForFilter = [
    {
        name: 'Все',
        code: 'All',
    },
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

export default function FilterCafes({ value, onChange }) {
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div className="controls">
            <select name="subway" id="subway" value={value} onChange={handleChange}>
                {dataForFilter.map(item => (
                    <option key={item.code} value={item.code}>
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    );
}