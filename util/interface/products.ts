export type ProductInterface = {
	_createdAt: string
	_id: string
	_rev: string
	_type: string
	_updatedAt: string
	description: string
	image: {
		_type: string
		asset: {
			_type: string
			_ref: string
		}
	}
	name: string
	price: number
	slug: { _type: string; current: string }
}
