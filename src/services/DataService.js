import axios from "axios";

export async function callServerApi(data) {
    const result = await axios.post('http://localhost:5566/reg-user', data);
    return result;
}

export async function callServerApiGetUserAcc(data) {
    const result = await axios.get('http://localhost:5566/get-reg-user?phone='+data.phone);
    return result;
}

export async function callServerApiGetUserConsign(data) {
    const result = await axios.get('http://localhost:5566/get-user-consign', data);
    return result;
}


export async function callServerApiSendUserMsg(data) {
    const result = await axios.post('http://localhost:5566/user-msg', data);
    return result;
}


export async function callServerApiSendUserConsign(data) {
    const result = await axios.post('http://localhost:5566/user-consign', data);
    return result;
}

export function getBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result);
        }
        fileReader.onerror = (err) => {
            reject(err);
        }
    })
}