import fetch from "cross-fetch";
export const require = (url, option) => {
    if (option === undefined) {
        option = {
            method: "GET",
        }
    }
    if (option.body) {
        option.body = JSON.stringify(option.body)
    }
    let params = {
        ...option,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        mode: 'cors',
    };
    console.log("option为空", params);

    return fetch(url, {
        ...params
        //cache: 'default'
    }).then(response => response.json())
};
