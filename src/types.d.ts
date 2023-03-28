export type ID = string

export interface List { 
  id: ID,
  title: string,
  tasks: Task[]
}

export interface Task {
  listId: ID,
  id: ID,
  text: string,
  done: boolean
}

export type TaskRaw = Omit<Task, "listId">