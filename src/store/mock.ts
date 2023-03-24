import { List } from "@/types";
import { v4 as uuidv4 } from "uuid";

export const sampleData: List[] = [
  {
    id: uuidv4(),
    title: "First List",
    tasks: [
      {
        id: uuidv4(),
        text: "First - todo",
        done: false
      },
      {
        id: uuidv4(),
        text: "Second - todo",
        done: true
      }
    ]
  },
  {
    id: uuidv4(),
    title: "Second List",
    tasks: [
      {
        id: uuidv4(),
        text: "First - todo",
        done: false
      }
    ]
  }
]