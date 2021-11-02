import SortByHealthLevel from '../js/app';

test('sort test', () => {
  const arrTest = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const arrRight = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  SortByHealthLevel(arrTest);
  expect(arrTest).toEqual(arrRight);
});

test('sort test not tobe', () => {
    const arrTest = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ];
    const arrRight = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ];

    SortByHealthLevel(arrTest);
    expect(arrTest).not.toBe(arrRight);
});
