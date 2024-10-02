import { Button } from "@/components/ui/button"
import Upload from "./upload"
import cloudinary from "cloudinary"
import View from "./view"

interface Img {
  public_id: string,
tags: string[]
}

const Page = async() => {
  let resp = await cloudinary.v2.search
  .expression('resource_type:image ')
  .sort_by('public_id','desc')
  .max_results(50)
  .with_field("tags")
  .execute() as{ resources:Img[]} ;
  
  return (
    <>
    <div>
      
    <div className=" py-4 px-5 flex items-center justify-between">
        <h2 className="text-3xl font-semibold tracking-tight">
   Gallery</h2>
  <Upload/>
  </div>
  <div className="grid grid-cols-4 gap-4 p-3 ">
  {resp.resources.map((item, i) => (
       <div key={i}>
          <View src={item.public_id} tag={item.tags} />
        </div>
      ))}
           </div>
      </div>
  
  ,</>
  )
}

export default Page