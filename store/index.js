import { snakeCase, kebabCase } from 'lodash'
import csv2json from "csvjson-csv2json";
const convertCSVtoJSON = (input) => {
    return csv2json(input, { parseJSON: true });
}

export const state = () => ({
    inventory: null
})


export const mutations = {
    setInventory: (state, payload) => {
        state.inventory = payload
    }
}

export const actions = {
    async fetchInventory({ commit }) {

        try {
            const tires = await this.$axios.$get(
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vToS3aMA50VNEX4daRp6irvmjRMobUiToSoMp-bajTbmY_7vCRsjda7pJvIldjImN02ze10zgiiVkjo/pub?gid=0&single=true&output=csv",
            );
            const tiresJson = convertCSVtoJSON(tires);
            const objTitles = Object.entries(tiresJson[0]).map(col => {
                if (col[1].length) return snakeCase(col[1])
                return col[0]
            })
            const tiresObj = tiresJson.map(row => {
                let obj = {}
                objTitles.map((col, index) => {
                    obj = { ...obj, [col]: index == 0 ? Object.values(row)[0] : row[`__${index}`] }
                })
                return obj
            }).slice(1)
            console.log("Successfully fetched inventory");
            commit('setInventory', tiresObj)
        } catch (error) {
            console.log(error);
        }
    }
}

