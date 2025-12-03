import { useEffect ,useState } from "react";
// import cafeData from '../__fixtures__/cafes.js';
import FilterCafes from "./FilterCafes.jsx";

export default function CafesTable() {
    // const cafesPoints = cafeData.cafes;
    const [cafes, setCafes] = useState([]);

    useEffect(() => {
        fetch('/cafes')
            .then(res => res.json())
            .then(data => setCafes(data.cafes || []))
            .catch(err => {
                console.error('Failed to fetch cafes:', err);
            });
    }, []);

    return (
        <div id="container" className="container m-3">
            <div className="cafesTable">
                <div class="controls">
			        <FilterCafes />
		        </div>
                <ul className="cardsList">
                    {cafes.map(cafe => (
                        <li key={cafe.id} className="card">
                            <img
                                src={cafe.img !== '' ? cafe.img : 'https://via.placeholder.com/150'}
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