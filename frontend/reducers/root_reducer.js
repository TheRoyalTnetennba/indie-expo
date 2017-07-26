import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CampaignReducer from './campaign_reducer';
import CategoryReducer from './category_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  campaigns: CampaignReducer,
  session: SessionReducer,
  categories: CategoryReducer,
  searchResults: SearchReducer,
});

export default RootReducer;
