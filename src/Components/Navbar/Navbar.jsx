import { useState } from "react";
import { Link } from "react-router-dom";
import ABI from "./ABI.json";
import Web3 from "web3";
function Navbar({ saveState }) {
  const [connected, setConnected] = useState(true);
  const init = async () => {
    try {
      const web3 = new Web3(window.ethereum);
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const contract = new web3.eth.Contract(
        ABI,
        "0xa1a87147d06C4fFB4F70599f03E2D95d6209E6C3"
      );
      saveState({ web3: web3, contract: contract }, accounts[0]);
      setConnected(false);
      console.log(contract);
    } catch (err) {
      console.log(err);
    }
  };

  const styles = {
    minHeight: "10vh",
  };
  return (
    <header class="text-gray-400 bg-gray-900 body-font">
      <div
        class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
        style={styles}
      >
        <Link
          to="/"
          class="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <svg fill="#6366f1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" viewBox="0 0 63 64" xml: space="preserve" width="100px" height="100px" style={{ height: '35px', width: '35px' }}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="crowdfunding-investment-business-finance-money"> <path d="M52.895,32.553C52.725,32.214,52.379,32,52,32h-2h-8H12h-2c-0.379,0-0.725,0.214-0.895,0.553l-5,10 c-0.155,0.31-0.138,0.678,0.044,0.973C4.332,43.82,4.653,44,5,44h4v15c0,2.757,2.243,5,5,5h28h6c2.757,0,5-2.243,5-5V44h4 c0.347,0,0.668-0.18,0.851-0.474c0.182-0.295,0.199-0.663,0.044-0.973L52.895,32.553z M10.618,34H12h28.382l-4,8H6.618L10.618,34z M11,59V44h26c0.379,0,0.725-0.214,0.895-0.553L41,37.236V62H14C12.346,62,11,60.654,11,59z M51,59c0,1.654-1.346,3-3,3h-5V37.236 l3.105,6.211C46.275,43.786,46.621,44,47,44h4V59z M47.618,42l-4-8H50h1.382l4,8H47.618z"></path> <path d="M26,46c-3.309,0-6,2.691-6,6c0,2.164,1.167,4.142,3.021,5.203C23.115,57.658,23.517,58,24,58h4 c0.483,0,0.885-0.342,0.979-0.797C30.833,56.142,32,54.164,32,52C32,48.691,29.309,46,26,46z M27.599,55.662 c-0.17,0.074-0.312,0.192-0.415,0.338H27v-3h1v-2h-4v2h1v3h-0.184c-0.103-0.146-0.245-0.264-0.415-0.338 C22.942,55.023,22,53.586,22,52c0-2.206,1.794-4,4-4s4,1.794,4,4C30,53.586,29.058,55.023,27.599,55.662z"></path> <rect x="24" y="59" width="4" height="2"></rect> <rect x="16" y="51" width="2" height="2"></rect> <rect x="34" y="51" width="2" height="2"></rect> <rect x="18.636" y="44.636" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -26.5183 27.2512)" width="2" height="2"></rect> <rect x="31.364" y="57.364" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -31.7904 39.9792)" width="2" height="2"></rect> <rect x="18.636" y="57.364" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -35.5183 30.9792)" width="2" height="2"></rect> <rect x="31.364" y="44.636" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -22.7903 36.2513)" width="2" height="2"></rect> <path d="M16,30c2.757,0,5-2.243,5-5s-2.243-5-5-5s-5,2.243-5,5S13.243,30,16,30z M16,22c1.654,0,3,1.346,3,3s-1.346,3-3,3 s-3-1.346-3-3S14.346,22,16,22z"></path> <path d="M45,30c2.757,0,5-2.243,5-5s-2.243-5-5-5s-5,2.243-5,5S42.243,30,45,30z M45,22c1.654,0,3,1.346,3,3s-1.346,3-3,3 s-3-1.346-3-3S43.346,22,45,22z"></path> <path d="M15,18h2c0-6.617-5.383-12-12-12v2C10.514,8,15,12.486,15,18z"></path> <path d="M44,18h2c0-7.168,5.832-13,13-13V3C50.729,3,44,9.729,44,18z"></path> <path d="M30,13h2c0-7.168-5.832-13-13-13v2C25.065,2,30,6.935,30,13z"></path> <path d="M39,12c0-4.411,3.589-8,8-8V2c-5.514,0-10,4.486-10,10H39z"></path> <path d="M5,15c2.757,0,5,2.243,5,5h2c0-3.86-3.14-7-7-7V15z"></path> <path d="M22,16h2C24,7.178,16.822,0,8,0v2C15.72,2,22,8.28,22,16z"></path> <rect x="1" y="6" width="2" height="2"></rect> <rect x="1" y="13" width="2" height="2"></rect> <rect x="4" width="2" height="2"></rect> <rect width="2" height="2"></rect> <rect x="22" y="18" width="2" height="2"></rect> <rect x="37" y="14" width="2" height="2"></rect> <rect x="61" y="3" width="2" height="2"></rect> <path d="M38,2V0c-3.309,0-6,2.691-6,6h2C34,3.794,35.794,2,38,2z"></path> <rect x="39" y="18" width="2" height="2"></rect> <rect x="30" y="15" width="2" height="2"></rect> <path d="M30,20.101c-2.279,0.465-4,2.484-4,4.899c0,2.757,2.243,5,5,5s5-2.243,5-5c0-2.414-1.721-4.434-4-4.899V19h-2V20.101z M34,25c0,1.654-1.346,3-3,3s-3-1.346-3-3s1.346-3,3-3S34,23.346,34,25z"></path> </g> <g id="Layer_1"> </g> </g></svg>
          <span class="ml-1 text-xl">CrowdSupport</span>
        </Link>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/register" class="mr-5 hover:text-white">
            Create Campaign
          </Link>
          <Link to="/post" class="mr-5 hover:text-white">
            Explore
          </Link>
          <Link to="/donation" class="mr-5 hover:text-white">
            Get Donation
          </Link>
        </nav>
        <button
          class="inline-flex items-center bg-indigo-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          onClick={init}
          disabled={!connected}
        >
          {" "}
          {connected ? "Connect Metamask" : "Connected"}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
