const isObject = (obj) => typeof obj === 'object' && !Array.isArray(obj)

const expectObj = (key, data = {}) => {
	if (!isObject(data)) {
		throw new Error(`${key} should always be of type object {} and not ${typeof data}`)
	}
}

export const only = (condition) => (fn) => (current, input) => {
	if (condition(current, input)) return fn(current, input)
}

export const pipe =
	(...fns) =>
	async (input = {}) => {
		expectObj('initial input', input)

		let index = 0
		let current = input

		try {
			for (const fn of fns) {
				const partial = await fn(current, input)

				const isLast = index === fns.length - 1

				if (isLast) {
					if (partial === undefined) return current
					return partial
				}

				expectObj('partial', partial)

				index++

				current = { ...current, ...(partial || {}) }
			}
		} catch (error) {
			return error
		}
	}
