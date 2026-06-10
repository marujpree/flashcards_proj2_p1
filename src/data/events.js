const FIFA_FIXTURES_URL = 'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/scores-fixtures'

const events = [
  {
    id: 1,
    date: '2026-06-11',
    dayLabel: 'June 11 — Opening Day',
    link: FIFA_FIXTURES_URL,
    matches: [
      { time: '3:00 PM ET', home: 'Mexico', away: 'South Africa', venue: 'Estadio Azteca, Mexico City', group: 'Group A' },
      { time: '10:00 PM ET', home: 'South Korea', away: 'Czechia', venue: 'Estadio Akron, Guadalajara', group: 'Group A' }
    ]
  },
  {
    id: 2,
    date: '2026-06-12',
    dayLabel: 'June 12',
    link: FIFA_FIXTURES_URL,
    matches: [
      { time: '3:00 PM ET', home: 'Canada', away: 'Bosnia & Herzegovina', venue: 'BMO Field, Toronto', group: 'Group B' },
      { time: '9:00 PM ET', home: 'USA', away: 'Paraguay', venue: 'SoFi Stadium, Inglewood, CA', group: 'Group D' }
    ]
  },
  {
    id: 3,
    date: '2026-06-13',
    dayLabel: 'June 13',
    link: FIFA_FIXTURES_URL,
    matches: [
      { time: '3:00 PM ET', home: 'Qatar', away: 'Switzerland', venue: "Levi's Stadium, Santa Clara, CA", group: 'Group B' },
      { time: '6:00 PM ET', home: 'Brazil', away: 'Morocco', venue: 'MetLife Stadium, E. Rutherford, NJ', group: 'Group C' },
      { time: '9:00 PM ET', home: 'Haiti', away: 'Scotland', venue: 'Gillette Stadium, Foxborough, MA', group: 'Group C' },
      { time: '12:00 AM ET', home: 'Australia', away: 'Türkiye', venue: 'BC Place, Vancouver', group: 'Group D' }
    ]
  },
  {
    id: 4,
    date: '2026-06-14',
    dayLabel: 'June 14',
    link: FIFA_FIXTURES_URL,
    matches: [
      { time: '1:00 PM ET', home: 'Germany', away: 'Curaçao', venue: 'NRG Stadium, Houston, TX', group: 'Group E' },
      { time: '4:00 PM ET', home: 'Netherlands', away: 'Japan', venue: 'AT&T Stadium, Arlington, TX', group: 'Group F' },
      { time: '7:00 PM ET', home: 'Ivory Coast', away: 'Ecuador', venue: 'Lincoln Financial Field, Philadelphia, PA', group: 'Group E' },
      { time: '10:00 PM ET', home: 'Sweden', away: 'Tunisia', venue: 'Estadio BBVA, Monterrey', group: 'Group F' }
    ]
  },
  {
    id: 5,
    date: '2026-06-15',
    dayLabel: 'June 15',
    link: FIFA_FIXTURES_URL,
    matches: [
      { time: '12:00 PM ET', home: 'Spain', away: 'Cape Verde', venue: 'Mercedes-Benz Stadium, Atlanta, GA', group: 'Group H' },
      { time: '3:00 PM ET', home: 'Belgium', away: 'Egypt', venue: 'Lumen Field, Seattle, WA', group: 'Group G' },
      { time: '6:00 PM ET', home: 'Saudi Arabia', away: 'Uruguay', venue: 'Hard Rock Stadium, Miami Gardens, FL', group: 'Group H' },
      { time: '9:00 PM ET', home: 'Iran', away: 'New Zealand', venue: 'SoFi Stadium, Inglewood, CA', group: 'Group G' }
    ]
  },
  {
    id: 6,
    date: '2026-06-16',
    dayLabel: 'June 16',
    link: FIFA_FIXTURES_URL,
    matches: [
      { time: '3:00 PM ET', home: 'France', away: 'Senegal', venue: 'MetLife Stadium, E. Rutherford, NJ', group: 'Group I' },
      { time: '6:00 PM ET', home: 'Iraq', away: 'Norway', venue: 'Gillette Stadium, Foxborough, MA', group: 'Group I' },
      { time: '9:00 PM ET', home: 'Argentina', away: 'Algeria', venue: 'Arrowhead Stadium, Kansas City, MO', group: 'Group J' },
      { time: '12:00 AM ET', home: 'Austria', away: 'Jordan', venue: "Levi's Stadium, Santa Clara, CA", group: 'Group J' }
    ]
  },
  {
    id: 7,
    date: '2026-06-17',
    dayLabel: 'June 17',
    link: FIFA_FIXTURES_URL,
    matches: [
      { time: '1:00 PM ET', home: 'Portugal', away: 'Congo DR', venue: 'NRG Stadium, Houston, TX', group: 'Group K' },
      { time: '4:00 PM ET', home: 'England', away: 'Croatia', venue: 'AT&T Stadium, Arlington, TX', group: 'Group L' },
      { time: '7:00 PM ET', home: 'Ghana', away: 'Panama', venue: 'BMO Field, Toronto', group: 'Group L' },
      { time: '10:00 PM ET', home: 'Uzbekistan', away: 'Colombia', venue: 'Estadio Azteca, Mexico City', group: 'Group K' }
    ]
  },
  {
    id: 8,
    date: '2026-06-18',
    dayLabel: 'June 18',
    link: FIFA_FIXTURES_URL,
    matches: [
      { time: '12:00 PM ET', home: 'Czechia', away: 'South Africa', venue: 'Mercedes-Benz Stadium, Atlanta, GA', group: 'Group A' },
      { time: '3:00 PM ET', home: 'Switzerland', away: 'Bosnia & Herzegovina', venue: 'SoFi Stadium, Inglewood, CA', group: 'Group B' },
      { time: '6:00 PM ET', home: 'Canada', away: 'Qatar', venue: 'BC Place, Vancouver', group: 'Group B' },
      { time: '9:00 PM ET', home: 'Mexico', away: 'South Korea', venue: 'Estadio Akron, Guadalajara', group: 'Group A' }
    ]
  },
  {
    id: 9,
    date: '2026-06-19',
    dayLabel: 'June 19',
    link: FIFA_FIXTURES_URL,
    matches: [
      { time: '3:00 PM ET', home: 'USA', away: 'Australia', venue: 'Lumen Field, Seattle, WA', group: 'Group D' },
      { time: '6:00 PM ET', home: 'Scotland', away: 'Morocco', venue: 'Gillette Stadium, Foxborough, MA', group: 'Group C' },
      { time: '8:30 PM ET', home: 'Brazil', away: 'Haiti', venue: 'Lincoln Financial Field, Philadelphia, PA', group: 'Group C' },
      { time: '11:00 PM ET', home: 'Türkiye', away: 'Paraguay', venue: "Levi's Stadium, Santa Clara, CA", group: 'Group D' }
    ]
  },
  {
    id: 10,
    date: '2026-06-20',
    dayLabel: 'June 20',
    link: FIFA_FIXTURES_URL,
    matches: [
      { time: '1:00 PM ET', home: 'Netherlands', away: 'Sweden', venue: 'NRG Stadium, Houston, TX', group: 'Group F' },
      { time: '4:00 PM ET', home: 'Germany', away: 'Ivory Coast', venue: 'BMO Field, Toronto', group: 'Group E' },
      { time: '8:00 PM ET', home: 'Ecuador', away: 'Curaçao', venue: 'Arrowhead Stadium, Kansas City, MO', group: 'Group E' },
      { time: '12:00 AM ET', home: 'Tunisia', away: 'Japan', venue: 'Estadio BBVA, Monterrey', group: 'Group F' }
    ]
  }
]

export default events
