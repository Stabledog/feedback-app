

export interface FeedbackItemT {
    id: number,
    rating: number,
    text: string
};

type FeedbackDataT = FeedbackItemT[];

export const FeedbackData: FeedbackDataT =  [
  {
    id: 1,
    rating: 10,
    text: 'Lorem one ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
  },
  {
    id: 2,
    rating: 9,
    text: 'Lorem two ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
  },
  {
    id: 3,
    rating: 8,
    text: 'Lorem three ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
  },
]


