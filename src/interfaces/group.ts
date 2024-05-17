export interface Group {
  id: number,
  name: string,
  password: string,
  createdOn: Date,
  explicitContent: boolean,
  genre: string,
}

export interface CreateGroup { 
  name: string,
  password: string,
  explicitContent: boolean,
  genre: string
}

export interface GroupUpdate {
  name: string,
  password: string,
  explicitContent: boolean,
  genre: string
}