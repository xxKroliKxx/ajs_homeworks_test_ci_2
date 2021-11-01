export default function SortByHealthLevel(objectArr) {
  objectArr.sort((a, b) => b.health - a.health);
}

SortByHealthLevel(
  [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ],
);
