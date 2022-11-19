import * as nearAPI from "near-api-js";

const WalletConnect = () => {
    const { keyStores } = nearAPI;
    const myKeyStore = new keyStores.BrowserLocalStorageKeyStore();
}

export default WalletConnect;