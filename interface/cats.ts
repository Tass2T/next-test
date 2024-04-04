export interface Cat {
  url: String;
  id: String;
  vote: Number;
}

export interface CatContextType {
  catsList: Cat[];
  getCats: Function;
  loading: Boolean;
  getTwoRandomCats: Function;
}
