export class Must {

  public id: string;
  public creationDate: Date;
  public modificationDate: Date;

  constructor(
    public title: string = '',
    public content: string = ''
  ) { }

  public static fromJson( json ): Must {
    let must = new Must( json.title, json.content );
    must.id = json.id;
    must.creationDate = json.creationDate;
    must.modificationDate = json.modificationDate;
    return must;
  }
}
