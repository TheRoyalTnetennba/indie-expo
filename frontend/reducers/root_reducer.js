import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CampaignReducer from './campaign_reducer';

const RootReducer = combineReducers({
  campaigns: CampaignReducer,
  session: SessionReducer,
});

export default RootReducer;
