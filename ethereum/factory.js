import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x2297C59Dd145bCb8E7e22C77035A297E503e7cfD'
);

export default instance;
