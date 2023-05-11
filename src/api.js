

import axios from 'axios';

export default {
    getData: async (url) => {
        var data = await axios.get(url).then((res)=>{console.log(res);});
        return data;
    }
}