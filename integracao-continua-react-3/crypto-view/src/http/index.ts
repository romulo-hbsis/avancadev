import axios from 'axios';

const apiKey = '77a8cd6b8839e2cdf320035c0c5970c2734d6dbe15a811acd2c4787f89518ff0'

export const cryptoHttp = axios.create({
    baseURL: 'https://min-api.cryptocompare.com/data',
    headers: {
        authorization: `Apikey ${apiKey}`
    }
});