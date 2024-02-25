export type Task = {
  id: string,
  creater_id: string,
  topic: string,
  description: string,
  dataCreated: string,
  deadline: string
}
export type Course = {
  id: string,
  name: string,
  description: string
}
export type Solution = {
  id: string,
  author_Id: string,
  reference: string,
  problem_id: string,
  approve: boolean
}