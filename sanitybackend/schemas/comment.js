export default {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        {
            name: 'comment',
            title: 'comment',
            type: 'string',
        },
        {
            name: 'postedBy',
            title: 'Posted By',
            type: 'reference',
            to: [{ type: 'user' }],
        },
      
    ],
  };