export default {
  name: 'addbanner',
  title: 'Add Banner',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLenght: 90,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
  ],
}
