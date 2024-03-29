import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'
import user from './user'
import comment from './comment'
import post from './post'
import postedBy from './postedBy'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    user,
    comment,
    post,
    postedBy
  ]),
})
