import { Data } from '../lib/types';

const mockData = [
  {
    name: 'Shop Cool',
    id: 1,
    prices: {
      "15L": 10.3,
      "5L": 6,
      "3L": 4,
      "1L": 1.4
    }
  },
  {
    name: 'Shop not Cool',
    id: 2,
    prices: {
      "15L": 12,
      "5L": 17,
      "3L": 4.5,
      "1L": 1.2
    }
  }
] as Data

export default mockData;