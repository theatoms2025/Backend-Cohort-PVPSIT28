let url = "https://catfact.ninja/fact";

async function getFact() {
    let res = await fetch(url);
    if (!res.ok) {
        return;
    }

    let data = await res.json();
    console.log(data.fact);
}

getFact();