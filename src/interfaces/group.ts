export interface Group {
  id: number,
  name: string,
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
  explicitContent: boolean,
  genre: string
}