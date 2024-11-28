import { commonAPI } from "./commonAPI"
import { server_url } from "./server_url"



//addvideos
export const addVideoAPI=async(video)=>{
    return await commonAPI("POST",`${server_url}/allVideos`,video)
}


//getvideoapi
export const getAVideoAPI=async()=>{
    return await commonAPI("GET",`${server_url}/allVideos`,"")

}


//getAvideo

export const getAllVideoAPI=async()=>{
    return await commonAPI("GET",`${server_url}/allVideos`,"")
}
//deletevideo

export const  deleteVideoAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/allVideos/${id}`,{})

}


//addhistoryapi
export const addHistoryAPI=async(video)=>{
    return await commonAPI("POST",`${server_url}/history`,video)
}

//getHISTORY
export const getHistoryAPI=async()=>{
    return await commonAPI("GET",`${server_url}/history`,"")
}


//deletehistory

export const  deleteHistoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/history/${id}`,{})

}
//addcatagoryapi
export const addCategoryuAPI=async(category)=>{
    return await commonAPI("POST",`${server_url}/category`,category)
}
//getvideoapi
export const getCategoryAPI=async()=>{
    return await commonAPI("GET",`${server_url}/category`,"")

}
//deletecategory

export const  deleteCategoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/category/${id}`,{})

}
//updatecategory
export const updataCategoryAPI=async(id,categoryDetails)=>{
    return await commonAPI("PUT",`${server_url}/category/${id}`,categoryDetails)
}



