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
    name: "games",
    title: "Spill",
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
  {
    name: "wishlist",
    title: "Ønskeliste",
    type: 'array',
    of: [{type: 'games'}]
  }
]
}