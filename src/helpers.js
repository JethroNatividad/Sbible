import axios from 'axios'
const BASE_API = 'https://api.scripture.api.bible'
// fetches data from the api
// sample data  'Bibles' '/v1/bibles?language=eng'
//                 v         v
//                 v         v    this
//                 v         v     v
const fetchData = (name, endpoint, c) => {
    // get request will look like this 
    // 'https://api.scripture.api.bible/v1/bibles?language=eng'
    axios.get(`${BASE_API}${endpoint}`, {
        headers: {
            //If you steal this, you are gay
            "api-key": '530486e6f07ce795f80f622c3f223cea'
        }
    })
        .then(res => {
            // check if name is Verse, because in Verse.js, we only take the content from the data
            name === 'Verse' 
            //                                  see this
            //                                     v
            ? c.setState({ [name]: res.data.data.content, 'Loading': false })
            // on others, we take everything
            : c.setState({ [name]: res.data.data, 'Loading': false })

        })
        .catch(err => {
            alert('Something went wrong')
            alert(err)
        })
}
export {fetchData}