import S from 'fluent-json-schema'

export const createQuizSchema = {
  body: S.object().prop('name', S.string().required()),
}
