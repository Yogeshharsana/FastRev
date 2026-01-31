export type Subject = {
  id: string;
  name: string;
  order: number;
};

export type Chapter = {
  id: string;
  name: string;
  subjectId: string;
  order: number;
};

export type Topic = {
  id: string;
  title: string;
  chapterId: string;
  subjectId: string;
  duration: number;
  order: number;
  isPaid: boolean;
  type: "concept" | "question";
  videoUrl?: string;
  notes?: string;
};
