const url = 'http://localhost:3333/api/';
const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };

const concatParams = (params = []) => {
    const resultArray = [];
    params.forEach(item => {
        resultArray.push(`${item.key}=${item.value}`)
    });

    return resultArray.join('&');
}

export const getData = async (category = '', params = []) => {
    let link = url + category;
    
    if (params && params.length > 0) {
        link += '?' + concatParams(params);
    }

    const result = await fetch(link, { headers: headers });
    const data = await result.json();

    return data;
}

// DRUGI DEO
// export const saveData = async (category = '', method = '', data) => {
//     const link = url + category;
    
//     const result = await fetch(link, {
//         headers: headers,
//         method: method,
//         body: JSON.stringify(data)
//     });

//     const dataResult = await result.json();

//     return dataResult;
// }

// export const deleteData = async (category = '', id) => {
//     const link = `${url}${category}?id=${id}`;
//     const result = await fetch(link, { method: 'DELETE', headers: headers });
//     const dataResult = await result.json();

//     return dataResult;
// }