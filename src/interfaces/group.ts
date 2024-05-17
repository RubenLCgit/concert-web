export interface Group {
  Id: number,
  Name: string,
  Password: string,
  CreatedOn: Date,
  ExplicitContent: boolean,
  Genre: string,
}

export interface CreateGroup { 
  Name: string,
  Password: string,
  ExplicitContent: boolean,
  Genre: string
}

export interface GroupUpdate {
  Name: string,
  Password: string,
  ExplicitContent: boolean,
  Genre: string
}