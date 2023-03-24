export type ID = string

export interface List { 
  id: ID,
  title: string,
  tasks: Task[]
}

export interface Task {
  id: ID,
  text: string,
  done: boolean
}