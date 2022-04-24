export class Notes {
  constructor(
    public id: number,
    public todoImg: string,
    public todoName: string,
    public todoCreated: string,
    public todoCategory: string,
    public todoContent: string,
    public todoDates: string,
    public active: boolean,
    public archive: boolean,
  ) {}
}
