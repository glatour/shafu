export class Must {
  
  public id: number;

  constructor (
    public title: string,
    public content: string
  ) { }

  public static fromJson(json) : Must {
    let must = new Must(json.title, json.content);
    must.id = json.id;
    return must;
  }
}
