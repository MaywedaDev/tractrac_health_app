export const Data = [
    {
      id: 1,
      illness: 'MALARIA',
      userGain: 46800,
      userLost: 823
    },
    {
      id: 2,
      illness: 'COLD',
      userGain: 37400,
      userLost: 345
    },
    {
      id: 3,
      illness: "THYPHOID",
      userGain: 18700,
      userLost: 555
    },
    {
      id: 4,
      illness: "OTHERS",
      userGain: 84240,
      userLost: 4555
    }
  ];

  const data = {
    labels: ['Red', 'Orange', 'Blue'],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
        {
          label: 'Popularity of colours',
          data: [55, 23, 96],
          // you can set indiviual colors for each bar
          backgroundColor: [
            'rgba(255, 255, 255, 0.6)',
            'rgba(255, 255, 255, 0.6)',
            'rgba(255, 255, 255, 0.6)'
          ],
          borderWidth: 1,
        }
    ]
}