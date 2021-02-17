export const state = () => ({
    videoEnabled: false,
    theme: 'default',
    siteName: 'Rati Digital',
    url: 'https://ratidigital.in',
    title: 'PHP, Node.js, Javascript, Typescript, HTML, CSS, Database, Cloud, redis, Serverless and much more. | Rati Digital',
    subtitle: 'PHP, Node.js, Javascript, Typescript, HTML, CSS, Database, Cloud, redis, Serverless and much more.',
    featureImage: 'https://ratidigital.in/uploads/anil-sharma.jpg',
    quote: '',
    author: '',
    hashtags: "#ratidigital",
    handle: "@realanilsharma",
    articlePublishedTime: null,
})

//setting data [ mutations]
export const mutations = {
    set(state, data) {
        state = Object.assign(state, data)
    }
}
// action to be called 
export const actions = {
    setSEO(context, payload) {
        context.commit('set', payload)
    },
    setData(context, payload) {
        context.commit('set', payload)
    }
}

