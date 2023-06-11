import S from 'fluent-json-schema'

export const createTeamsSchema = {
  body: S.object().prop(
    'teams',
    S.array()
      .items(
        S.object()
          .prop('name', S.string())
          .prop('members', S.array().items(S.string()))
          .prop('quiz_id', S.integer().minimum(0).required()),
      )
      .minItems(2)
      .maxItems(4)
      .required(),
  ),
}
