export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image2',
      title: 'Image2',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'buttonText',
      title: 'ButtonText',
      type: 'string',
    },
    {
      name: 'product',
      title: 'Product',
      type: 'string',
    },
    {
      name: 'midText',
      title: 'MidText',
      type: 'string',
    },

    {
      name: 'discount',
      title: 'Discount',
      type: 'string',
    },
    {
      name: 'saleTime',
      title: 'SaleTime',
      type: 'string',
    },
  ],
}