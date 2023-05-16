
import {createClient} from '@sanity/client' 

export const client = createClient({
    projectId: 'uqebdm46', 
    dataset: 'production', 
    useCdn: true, 
    apiVersion: '2021-10-21',
})