export type Task = {
  name: string,
  price: string,
  contains: string,
  tests: string,
  dataCreated: string,
  endPointDate: string,
  id: string
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