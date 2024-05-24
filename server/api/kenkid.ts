export default defineEventHandler(async (event) => {
    // const {name} = getQuery (event)
    // const {age} = await readBody(event)
    const { data } : any = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_jZeozPOJYTgATojgYVW7yjoCG5T93lyuxfNMn62m')

    return data
})
