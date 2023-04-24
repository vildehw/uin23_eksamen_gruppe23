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
            name: 'hours_played',
            type: 'number',
            title: 'Antall timer spilt',
        }, 
        {
            name: 'genre', 
            title: 'Sjanger',
            type: 'reference',
            to: [{type: 'genres'}]
        }
    ]
}