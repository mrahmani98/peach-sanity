import React from 'react';

export default {
  title: 'Article',
  name: 'article',
  type: 'document',
  initialValue: {
    type: 'article',
    isActive: true,
    premium: false,
  },
  preview: {
    select: {
      title: 'title',
      media: 'image',
      active: 'isActive',
      premium: 'premium',
    },
    prepare({ title, media, active, premium }) {
      let test = '';
      if (active) test += '🟩';
      else test += '🟥';
      if (premium) test += ' 💰';
      return {
        title: title,
        subtitle: test,
        media: media,
      };
    },
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
          { title: 'Témoignage', value: 'temoignage' },
          { title: 'Story', value: 'story' },
          { title: 'Interview', value: 'interview' },
        ],
        layout: 'radio',
      },
    },
    {
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Is Active',
      name: 'isActive',
      type: 'boolean',
    },
  ],
};
