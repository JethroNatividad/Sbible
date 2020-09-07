import axios from 'axios'
const BASE_API = 'https://api.scripture.api.bible'
const fetchData = (name, endpoint, c) => {
    axios.get(`${BASE_API}${endpoint}`, {
        headers: {
            "api-key": '530486e6f07ce795f80f622c3f223cea'
        }
    })
        .then(res => {
            name === 'Verse' 
            ? c.setState({ [name]: res.data.data.content, 'Loading': false })
            : c.setState({ [name]: res.data.data, 'Loading': false })

        })
        .catch(err => {
            alert('Something went wrong')
            alert(err)
        })
}
/* fetchBibles = () => {
    axios.get(`${this.props.BASE_API}/v1/bibles?language=eng`, {
        headers: {
            "api-key": '530486e6f07ce795f80f622c3f223cea'
        }
    })
        .then(res => {
            this.setState({ Bibles: res.data.data, Loading: false })
        })
        .catch(err => {
            alert('Something went wrong')
        })
} */
export {fetchData}