import * as actions from './actionTypes';
import axios from 'axios';

export function toggleModal(modalIsOpen){
    return {type: actions.TOGGLE_MODAL, modalIsOpen};
}

export function toggleStartMessage(startMessageIsOpen){
    return {type: actions.TOGGLE_START_MESSAGE, startMessageIsOpen};
}

export function toggleTable(tableIsOpen){
    return {type: actions.TOGGLE_TABLE, tableIsOpen};
}

export function updateMinSaleDate(minSaleDate){
    return {type: actions.UPDATE_MIN_SALE_DATE, minSaleDate};
}

export function updateMaxSaleDate(maxSaleDate){
    return {type: actions.UPDATE_MAX_SALE_DATE, maxSaleDate};
}

export function updateSalesQualification(qualificationType){
    return {type: actions.UPDATE_SALES_QUALIFICATION_TYPE, qualificationType};
}

export function updatePropertyType(propertyType){
    return {type: actions.UPDATE_PROPERTY_TYPE, propertyType};
}

export function updateMinSaleAmount(minSaleAmount){
    return {type: actions.UPDATE_MIN_SALE_AMOUNT, minSaleAmount};
}

export function updateMaxSaleAmount(maxSaleAmount){
    return {type: actions.UPDATE_MAX_SALE_AMOUNT, maxSaleAmount};
}

export function updateMinAcreage(minAcreage){
    return {type: actions.UPDATE_MIN_ACREAGE, minAcreage};
}

export function updateMaxAcreage(maxAcreage){
    return {type: actions.UPDATE_MAX_ACREAGE, maxAcreage};
}

export function updateMinSquareFeet(minSquareFeet){
    return {type: actions.UPDATE_MIN_SQUARE_FEET, minSquareFeet};
}

export function updateMaxSquareFeet(maxSquareFeet){
    return {type: actions.UPDATE_MAX_SQUARE_FEET, maxSquareFeet};
}

export function updateMajorArea(majorAreaList){
    return {type: actions.UPDATE_MAJOR_AREA, majorAreas: createOptionsList(majorAreaList)};
}

export function updatePropertyUse(propertyUseList){
    return {type: actions.UPDATE_PROPERTY_USE, propertyUses: createOptionsList(propertyUseList)};
}

export function updateEconomicArea(economicAreaList){
    return {type: actions.UPDATE_ECONOMIC_AREA, economicAreas: createOptionsList(economicAreaList)};
}

export function updateNeighborhood(neighborhoodList){
    return {type: actions.UPDATE_NEIGHBORHOOD, neighborhoods: createOptionsList(neighborhoodList)};
}

export function updateArchitecturalType(architecturalTypeList){
    return {type: actions.UPDATE_ARCHITECTURAL_TYPE, architecturalTypes: createOptionsList(architecturalTypeList)};
}

export function updateBufferDistance(bufferDistance){
    return {type: actions.UPDATE_BUFFER_DISTANCE, bufferDistance};
}

export function updateBufferAddress(bufferAddress){
    return {type: actions.UPDATE_BUFFER_ADDRESS, bufferAddress};
}

export function updateRecordCountButtonSuccess(recordCount){
    return {type: actions.UPDATE_COUNT_SUCCESS, recordCount};
}

export function updateTableRecordsSuccess(recordData){
    return {type: actions.UPDATE_RECORDS_SUCCESS, recordData};
}

export function updateRecordCountButton(facetData, accounts, modalIsOpen){
    return function(dispatch){
        axios.post('http://localhost:3000/query/records', {facetData, accounts, modalIsOpen})
        .then(res => {
            dispatch(updateTableRecordsSuccess(res.data))
            dispatch(updateRecordCountButtonSuccess(res.data.map(x=>x.ACCOUNTNO)))
        })
        .catch(error => {
            throw(error);
        })
    }
}

//Helper functions
function createOptionsList(options){
    let optionsList = [];
    [].forEach.call(options, (option)=>{
        if(option.selected){
            optionsList.push(option.value)
        }
    });
    return optionsList
}

// export function fetchArchtypeSuccess(archTypeOptions){
//     return {type: actions.LOAD_ARCHTYPE_OPTIONS_SUCCESS, archTypeOptions};
// }
//
// export function fetchArchtype(){
//     return function(dispatch){
//         axios.post(`http://localhost:3000/query/retrieve/building`)
//         .then(res => {
//             dispatch(fetchArchtypeSuccess([{value: "Any", label: "Any"}].concat(res.data.map(opt => {
//                 return {value: opt['type'], label: opt['type']}
//             })
//         )))
//     })
//     .catch(error => {
//         throw (error)
//     });
// }
// }
//
// function shouldFetchArchType(state) {
//   const opts = state.archTypeOptions;
//   if (!opts) {
//     return true;
//   } else {
//       return false;
//   }
// }

// export function fetchArchTypesIfNeeded() {
//   return (dispatch, getState) => {
//     if (shouldFetchArchType(getState(), subreddit)) {
//       return dispatch(fetchPosts(subreddit))
//     }
//   }
// }

// export function fetchNeighborhoodSuccess(neighborhoodOptions){
//     return {type: actions.LOAD_NEIGHBORHOOD_OPTIONS_SUCCESS, neighborhoodOptions};
// }
//
// export function fetchNeighborhood(){
//     return function(dispatch){
//         axios.post(`http://localhost:3000/query/retrieve/neighborhood`)
//         .then(res => {
//             dispatch(fetchNeighborhoodSuccess([{value: "Any", label: "Any"}].concat(res.data.map(opt => {
//                 return {value: opt['NBHD_DESC'], label: opt['NBHD_DESC']}
//             })
//         )))
//     })
//     .catch(error => {
//         throw (error)
//     });
// }
// }

// function shouldFetchNeighborhoods(state) {
//   const hoods = state.neighborhoodOptions;
//   if (!hoods) {
//     return true
// } else {
//     return false
// }
// }
