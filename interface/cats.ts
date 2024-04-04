export interface Cat {
  url: String;
  id: String;
}

export interface CatContextType {
  catsList: Cat[];
  getCats: Function;
}
