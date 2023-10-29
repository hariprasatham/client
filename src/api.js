import userRequest from "./user_request"
class API {
    addEmail = async (data) => {
        try{
            const res = userRequest.post("news-letter", data)
            return res
        }catch (err){
            return err
        }
    }
}

export default API;