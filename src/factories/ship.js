const Ship = (shipID, length, sunk = false) => {
  const HP = Array.from(Array(length).keys()).map((x) => x + `,${shipID}`);
  const hit = (hitLocation) => (HP[hitLocation] = 'hit');
  const isSunk = (HP) => HP.every((val) => val === 'hit');
  return { shipID, length, HP, sunk, hit, isSunk };
};

export { Ship };
