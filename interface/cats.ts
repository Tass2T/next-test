export interface Cat {
  url: string;
  id: string;
  vote: number;
}

export interface CatContextType {
  catsList: Cat[];
  getCats: Function;
  loading: Boolean;
  getTwoRandomCats: Function;
  addOneVoteToACat: Function;
}
