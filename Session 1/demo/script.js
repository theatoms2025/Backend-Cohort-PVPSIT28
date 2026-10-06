const figlet = require('figlet');
const axios = require("axios");

async function display(str) {
    const text = await figlet.text(str);
    console.log(text);
}

let url = "https://catfact.ninja/fact";

async function getFact() {
    try {
        let res = await axios.get(url);
        console.dir(res.data.fact)
    } catch(err) {
        console.err("error");
    }
}

getFact()

