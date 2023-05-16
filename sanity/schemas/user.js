export default{
name: "user", 
type: "document",
title: "Bruker", 
fields: [
  {
    name: "username",
    title: "Brukernavn",
    type: "string",
  }, 
  {
    name: "email",
    title: "Email",
    type: "string"
  },
  {
    name: "mygames",
    title: "Mine spill",
    type: 'array',
    of: [{type: 'reference',
     to: [
        {type: 'games'}
    ]}]
  },
  {
    name: "favourites",
    title: "Favoritter",
    type: 'array', 
    of: [{type: 'reference',
    to: [
        {type: 'games'}
    ]}]
  },
]
}