
import {createClient} from '@sanity/client' 

export const client = createClient({
    projectId: 'uqebdm46', 
    dataset: 'production', 
    useCdn: true, 
    apiVersion: '2021-10-21',
})

export const writeClient = createClient({
    token: "sktdUebb0z1KUsbVqZnQojxZoj6TpgxfS1umPBtB7K1laNan6xpe7kE8Ymgty3rrx0JnZK5YXinWWPdQ8I65L2pNEIleMu4TWOMf13IkXy3xF7og4m0eiLhiQBRiDUczWz6eHOxPvQZ52QkDLfbvr0UQMJAg8iMjAE644Vii7KRCBizhYuXc",
    projectId: 'uqebdm46', 
    dataset: "production"
})