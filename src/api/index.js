import axios from 'axios'

const instance = axios.create({
    timeout: 5000
})

const fetch = options => new Promise((resolve, reject) => {
    instance.request(options).then((result = {}) => {
        if (result.data && result.data.code === 0) {
            resolve(result.data)
        } else {
            if (options.handleFail) {
                reject(result.data)
            } else {
                alert(result.data.message)
            }
        }
    }).catch(() => {
        alert('网络错误！')
    })
})

export const test = () => fetch({
    url: '/test',
    method: 'get'
})

export const getData = (params) => fetch({
    url: '/data',
    method: 'get',
    params
})
