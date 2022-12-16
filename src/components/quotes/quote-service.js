import axios from 'axios';

const QUOTES_API_DATA = {
    method: 'GET',
    url: 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote',
    params: {token: 'ipworld.info'},
    headers: {
        'X-RapidAPI-Key': 'b7051ceb11mshc978566c429fc32p1459a1jsnec7785041c59',
        'X-RapidAPI-Host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'

    }
};

export const getQuote = async () => {
    const response =  await axios.request(QUOTES_API_DATA) //end loop to prevent infinite api calls
    console.log("Service call response for quotes data");
    console.log(response.data);
    console.log("quote text",response.data.text);
    return response.data;
}
