const httpGet=async <T>(url:string):Promise<T>=>{
    const r=await fetch(url);
    return await r.json();
}


let coinsPromise:Promise<{data:{symbol:string,id:string}[]}>|undefined;
/**
 * Returns information about crypto coins by their symbol.
 * @symbol The symbol of the coin to get information about. For example BitCoin's symbol is BTC and Ethereum's is ETH
 * @convoFn
 */
export const getCryptoTokenInfo=async (symbol:string)=>{

    const coins=await (coinsPromise??(coinsPromise=httpGet('https://api.coinlore.net/api/tickers/?limit=300')));

    symbol=symbol.toUpperCase();
    const coin=coins?.data?.find(c=>c.symbol===symbol)??`No token found by symbol - ${symbol}`
    console.log('hio 👋 👋 👋',coin,coins);
    return coin;
}