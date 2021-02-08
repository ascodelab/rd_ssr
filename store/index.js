export const state = () => ({
    theme: 'default',
    url: 'http://localhost:8080/',
    title: 'asdads',
    subtitle: 'asdadssas',
    featureImage: 'http://localhost:8080/uploads/anil-sharma.jpg',
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
    }
}

