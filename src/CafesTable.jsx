import { useEffect, useState } from "react";
import FilterCafes from "./FilterCafes.jsx";

export default function CafesTable() {
    const [cafes, setCafes] = useState([]);
    const [selectedSubway, setSelectedSubway] = useState("All");

    useEffect(() => {
        fetch('/cafes')
            .then(res => res.json())
            .then(data => setCafes(data.cafes || []))
            .catch(err => {
                console.error('Failed to fetch cafes:', err);
        });
    }, []);

    const filteredCafes = selectedSubway === "All"
        ? cafes
        : cafes.filter(cafe => cafe.subwayCode === selectedSubway);

    const handleFilterChange = (value) => {
        setSelectedSubway(value);
    };

    return (
        <div id="container" className="container m-3">
            <div className="cafesTable">
                <FilterCafes value={selectedSubway} onChange={handleFilterChange} />
                <ul className="cardsList">
                    {filteredCafes.map(cafe => (
                        <li key={cafe.id} className="card">
                            <img
                                src={cafe.img?.trim() || 'https://via.placeholder.com/150'}
                                alt={cafe.name}
                            />
                            <h2>{cafe.name}</h2>
                            <p>{cafe.desc}</p>
                            <p>{cafe.address}</p>
                            <p>Subway: {cafe.subwayCode}</p>
                            <p>{cafe.workTime}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}