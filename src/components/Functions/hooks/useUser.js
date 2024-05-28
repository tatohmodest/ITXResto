import  { useCallback, useState } from 'react'

function useRequest() {
  const [isLoading, setIsLoading] = useState(false)
  const [error , setError] = useState(null)
  const [data, setData] = useState(null)



  const Fetching = useCallback(async (responses) => {
         setIsLoading(true)
    
    try{
    //response
         const response = await fetch(responses.url,{

            //collecting Request and response data through http

            method:responses.method ? responses.method:'GET',
            body: responses.body ? JSON.stringify(responses.body): null,
            headers: responses.headers ? responses.headers:{}
         })

         //checking if response is Good or ok
         if (!response.ok) {
            throw new Error("Something went wrong")
         }

        const data = await response.json();
        
          //holding data for usage
          setData(data)
        }
        catch (error){
           setError(error.message)
        }
        finally{
            setIsLoading(false)
        }


  },[])

 


  return {data, error, isLoading, Fetching}
}

export default useRequest;