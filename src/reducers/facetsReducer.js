import * as actions from '../actions/actionTypes';

const initState = {
    propertyType: 'Select Property Type',
    qualificationType: 'Qualified and Unqualified',
    minSaleAmount: '0',
    maxSaleAmount: '10000000',
    minAcreage: '0',
    maxAcreage: '500',
    minSquareFeet: '0',
    maxSquareFeet: '100000',
    majorAreas: ['Any'],
    propertyUses: ['Any'],
    economicAreas: ['Any'],
    neighborhoods: ['Any'],
    architecturalTypes: ['Any']
}

export default function facetsReducer(state = initState, action) {
  switch (action.type) {
    case actions.UPDATE_MIN_SALE_DATE:
      return Object.assign({}, state, {minSaleDate: action.minSaleDate});
    case actions.UPDATE_MAX_SALE_DATE:
      return Object.assign({}, state, {maxSaleDate: action.maxSaleDate});
    case actions.UPDATE_SALES_QUALIFICATION_TYPE:
      return Object.assign({}, state, {qualificationType: action.qualificationType});
    case actions.UPDATE_PROPERTY_TYPE:
      return Object.assign({}, state, {propertyType: action.propertyType});
    case actions.UPDATE_MIN_SALE_AMOUNT:
      return Object.assign({}, state, {minSaleAmount: action.minSaleAmount});
    case actions.UPDATE_MAX_SALE_AMOUNT:
      return Object.assign({}, state, {maxSaleAmount: action.maxSaleAmount});
    case actions.UPDATE_MIN_ACREAGE:
      return Object.assign({}, state, {minAcreage: action.minAcreage});
    case actions.UPDATE_MAX_ACREAGE:
      return Object.assign({}, state, {maxAcreage: action.maxAcreage});
    case actions.UPDATE_MIN_SQUARE_FEET:
      return Object.assign({}, state, {minSquareFeet: action.minSquareFeet});
    case actions.UPDATE_MAX_SQUARE_FEET:
      return Object.assign({}, state, {maxSquareFeet: action.maxSquareFeet});
      case actions.UPDATE_MAJOR_AREA:
        return Object.assign({}, state, {majorAreas: action.majorAreas});
    case actions.UPDATE_PROPERTY_USE:
      return Object.assign({}, state, {propertyUses: action.propertyUses});
    case actions.UPDATE_ECONOMIC_AREA:
        return Object.assign({}, state, {economicAreas: action.economicAreas});
    case actions.UPDATE_NEIGHBORHOOD:
      return Object.assign({}, state, {neighborhoods: action.neighborhoods});
    default:
      return state;
  }
}
