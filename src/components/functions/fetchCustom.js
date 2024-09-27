import getTokenCSRF from "./cookiesCSRF";

async function fetchCustom(method, endpoint, body){
    const csrftoken = getTokenCSRF('csrftoken')
    console.log(csrftoken);

    const response = await fetch(`https://mxcharlie.pythonanywhere.com/${endpoint}`, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken,
        },
        credentials: 'include',
        body: JSON.stringify(body),
        });

    const data = await response.json();
    if (data.status === 200) {
        console.log('Information correctly received')
        return data.info;
    } else {
        alert('Error, please try again');
    }
}

export default fetchCustom;