import { useState } from "react";
import cafeData from '../__fixtures__/cafes.js';

export default function CafesTable() {
    const cafesPoints = cafeData.cafes;

    return (
        <div id="container" className="container m-3">
            <div className="cafesTable">
                <ul className="cardsList">
                    {cafesPoints.map(cafe => (
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