

export const CATEGORY_FILTER='CATEGORY_FILTER'
export const SORT_CRITERIA='SORT_CRITERIA'

export const setCategoryFilter=(category)=>{
    return{
        type:CATEGORY_FILTER,
        payload:category
    }
}
export const setSortCriteria=()=>{
    return{
        type:SORT_CRITERIA,
    
    }
}