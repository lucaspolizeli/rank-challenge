import axios from 'axios';

class SearchAPI {
  static async getProducts(keyword) {
    const ebayUrl = [
      process.env.EBAY_URL,
      '?OPERATION-NAME=findItemsByKeywords',
      '&SERVICE-VERSION=1.0.0',
      `&SECURITY-APPName=${process.env.EBAY_APP_KEY}`,
      `&keywords=${keyword}`,
      '&paginationInput.entriesPerPage=3',
      '&RESPONSE-DATA-FORMAT=JSON'
    ];

    const ebaySearch = await axios.get(ebayUrl.join(''));

    return ebaySearch.data.findItemsByKeywordsResponse[0].searchResult[0].item || [];
  }
}

export default new SearchAPI();
