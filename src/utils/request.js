export default async function (description, location, fullTime = false, page = 0) {
    const url = new URL("https://jobs.github.com/positions.json");
    const params = { fullTime, page };
    if (description) params.description = description;
    if (location) params.location = location
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    return fetch(url, {
        method: 'GET',
        mode: 'no-cors'
    });
}