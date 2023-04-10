import S from 'fluent-json-schema'

export const schema = {
	body: S.object()
		.prop('name', S.string())
		.prop('teamCount', S.number().minimum(2).maximum(4))
		.prop(
			'teams',
			S.array()
				.items(S.object().prop('name', S.string()).prop('members', S.array().items(S.string())))
				.minItems(2)
				.maxItems(4)
		)
}
