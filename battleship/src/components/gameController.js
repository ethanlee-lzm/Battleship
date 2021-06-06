import Gameboard from './Factories/gameboardFactory';
import Player from './Factories/playerFactory';
import Ship from './Factories/shipFactory';
import React, { useState, useEffect } from 'react';

export default function GameController() {
	const [timeline, setTimeline] = useState(null);
	const [turn, setTurn] = useState(null);
	return <div>Hi, I'm the Game Controller!</div>;
}