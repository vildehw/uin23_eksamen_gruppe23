export default {
    name: 'games', 
    type: 'document', 
    title: 'Spill', 
    fields: [
        {
            name: 'game_title',
            type: 'string',
            title: 'Spillnavn',
        },  
        {
            name: 'slug', 
            type: 'slug', 
            title: 'URL-tittel', 
            options: {
                source: 'game_title', 
                slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0,150) 
            }
        },
        {
            name: 'api_id', 
            type: 'number',
            title: 'API-id',
        }, 
        {
            name: 'playtime',
            type: 'number',
            title: 'Spilltid',
        }, 
        {
            name: 'genre', 
            title: 'Sjanger',
            type: 'array',
            of: [{type: 'reference',
             to: [
                {type: 'genres'}
            ]}]
        }, 
        {
            name: 'image_url',
            type: 'url',
            title: 'Bilde URL'
          }
    ]
} //kilde: kode fra forelesning 17.03