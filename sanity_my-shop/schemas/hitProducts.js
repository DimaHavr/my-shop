export default {
  name: 'hitProducts',
  title: 'hitProducts',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'vendor',
      title: 'Vendor',
      type: 'string',
    },
    {
      name: 'country_of_origin',
      title: 'Country of origin',
      type: 'string',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    {
      name: 'color_params',
      title: 'Color params',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'size_params',
      title: 'Size params',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
