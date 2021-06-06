import Player from '../components/Factories/playerFactory';

describe('player functions', () => {
	// instantiate variable to avoid scoping issues
	let player;
	let testBoard;
	beforeEach(() => {
		// instantiate player
		player = new Player('Ethan Lee');

		// create and fill mock opponent board
		testBoard = {
			oppBoard: [],
			receiveShot: jest.fn((loc) => {
				testBoard.oppBoard[loc] = 'miss';
				return true;
			}),
			opponentBoard: jest.fn(() => {
				return testBoard.oppBoard;
			}),
		};
		const arr = [];
		for (let i = 0; i < 100; i++) {
			arr.push('empty');
		}
		testBoard.oppBoard = arr;
	});
	it('creates a player with a name', () => {
		expect(player.name).toBe('Ethan Lee');
	});
	it('fires a shot to the gameboard', () => {
		player.fireShot(25, testBoard);
		expect(testBoard.receiveShot.mock.calls.length).toBe(1);
	});
	it('rejects shots fired at locations already fired upon', () => {
		testBoard.oppBoard[10] = 'miss';
		player.fireShot(25, testBoard);
		player.fireShot(10, testBoard);
		expect(testBoard.receiveShot.mock.calls.length).toBe(1);
	});
	it('can fire random shots', () => {
		player.fireRandomShot(testBoard);
		player.fireRandomShot(testBoard);
		player.fireRandomShot(testBoard);
		expect(testBoard.receiveShot.mock.calls.length).toBe(3);
	});
	it('does not fire shots on cells already shot', () => {
		for (let i = 0; i < 100; i++) {
			player.fireRandomShot(testBoard);
		}
		expect(testBoard.opponentBoard().some((cell) => cell === 'empty')).toBe(
			false
		);
	});
});
