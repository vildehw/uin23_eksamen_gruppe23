import sanityClient, { SanityClient } from '@sanity/client' 

const options = {
    projectId: "uqebdm46",
    dataset: "production" 
} 

const client = SanityClient({

    ...options,
    apiVersion: '2021-08-31', 
    useCdn: true

});

export default client;