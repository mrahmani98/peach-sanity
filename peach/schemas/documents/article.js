export default {
  title: 'Article',
  name: 'article',
  type: 'document',
  initialValue: {
    type: 'article',
  },
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Reading Time',
      description: 'Approximative time needed to read the article in minutes.',
      name: 'readingTime',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
    {
      title: 'Premium Only',
      name: 'premium',
      type: 'boolean',
    },
    {
      title: 'Type',
      name: 'type',
      type: 'string',
      options: {
        list: [
          { title: 'Article', value: 'article' },
          { title: 'Santé', value: 'sante' },
        ],
        layout: 'radio',
      },
    },
    {
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      title: 'Is Active',
      name: 'isActive',
      type: 'boolean',
    },
  ],
};
