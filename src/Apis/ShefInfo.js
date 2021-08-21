import React from "react";
import Api_url from "./api_url";
import axios from "axios";

class shefInfo {

    async getShefs(props) {
        try {
            const result = await axios.get(Api_url + "/chef/", {})
            return result;

        } catch (error) {
            console.log(error, "error");
        }
    }



    async addChef(chefData) {

        try {
            const chef = await axios.post(Api_url + "/chef/", chefData, {
                // headers: {
                //     'Content-Type': 'application/x-www-form-urlencoded',
                //     'Accept': 'application/json'
                // },
            });

            return chef;
        } catch (error) {
            console.log(error, "test error");
        }
    }
}

export default shefInfo;