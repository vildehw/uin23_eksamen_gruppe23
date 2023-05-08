export default {
    name: 'genres', 
    type: 'document', 
    title: 'Sjanger', 
    fields: [
        {
            name: 'genre_title', 
            type: 'string', 
            title: 'Sjangertittel'
        },  
        {
            name: 'genre_slug', 
            type: 'slug', 
            title: 'URL-tittel', 
            options: {
                source: 'genre_title', 
                slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0,150)
            }
        },
        
    ]
}