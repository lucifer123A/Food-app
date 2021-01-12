import axios from 'axios'

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer rnkslrDROTMTgpuBCpvWbco4VkOh6ElMv0nxKlPm5mTODT_H0skBJk43xZktpmCy1lvPwJztCFspwqfAOHl4sWepIE0HetLPg9oFS3RmMsxVU0YNZsu8pYlunbL6X3Yx'
    }
})
