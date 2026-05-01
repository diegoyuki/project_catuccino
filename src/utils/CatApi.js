class CatApi {
  constructor({ baseUrl, apiKey }) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getInitialCats() {
    return fetch(`${this._baseUrl}/images/search?limit=30&has_breeds=1`, {
      headers: {
        "x-api-key": this._apiKey,
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }

  searchCatsByBreed(breedId) {
    return fetch(`${this._baseUrl}/images/search?breed_ids=${breedId}&limit=10`, {
      headers: {
        "x-api-key": this._apiKey,
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }
}

const catApi = new CatApi({
  baseUrl: "https://api.thecatapi.com/v1",
  apiKey: "live_a6vZWdvej9m8K268iTn1KpfILRDVEPMsthGoAugEuuHgO1zKbDWCory9uEHkv7Ad",
});

export default catApi;