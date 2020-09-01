export default async function (description, location, fullTime = false, page = 0) {
    const url = new URL("http://localhost:3000");
    const params = { fullTime, page };
    if (description) params.description = description;
    if (location) params.location = location
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    const responce = await fetch(url, {
        method: 'GET',
    })
    let json = [];
    try {
        json = await responce.json();
    } catch (e) {
        return [];
    }
    return json;
}