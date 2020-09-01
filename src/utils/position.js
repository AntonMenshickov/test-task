export default async function (id) {
    const url = new URL("http://localhost:3000/" + id); // using local proxy server to access Github api avoid theit cors policity
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