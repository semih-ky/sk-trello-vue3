import { List } from "@/types";
import { v4 as uuidv4 } from "uuid";

const LIST_ID_1 = uuidv4();
const LIST_ID_2 = uuidv4();

export const sampleData: List[] = [
  {
    id: LIST_ID_1,
    title: "First List",
    tasks: [
      {
        listId: LIST_ID_1,
        id: uuidv4(),
        text: "First - todo",
        done: false
      },
      {
        listId: LIST_ID_1,
        id: uuidv4(),
        text: "Second - todo",
        done: true
      }
    ]
  },
  {
    id: LIST_ID_2,
    title: "Second List",
    tasks: [
      {
        listId: LIST_ID_2,
        id: uuidv4(),
        text: "First - todo",
        done: false
      }
    ]
  }
]