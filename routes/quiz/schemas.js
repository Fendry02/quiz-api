import S from 'fluent-json-schema'

export const createQuizSchema = {
  body: S.object().prop('name', S.string().required()),
}

export const updateQuizSchema = {
  body: S.object()
    .prop('teamCount', S.number().minimum(2).maximum(4).required())
    .prop(
      'teams',
      S.array()
        .items(S.object().prop('name', S.string()).prop('members', S.array().items(S.string())))
        .minItems(2)
        .maxItems(4)
        .required(),
    )
    .prop('quizId', S.integer().minimum(0).required()),
}
