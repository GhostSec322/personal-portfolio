import { EXPERIENCES } from "../constants"

const Experience = () => {
  return (
    <div className="border-b border-netural-900 pb-4">
        <h1 className="my-20 text-center text-4xl">Experience</h1>
        <div>
            {EXPERIENCES.map((Experience,index)=>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                    <p className="mb-2 text-sm text-netural-400">{Experience.year}</p>
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">{Experience.role} - <span className="text-sm text-green-200">{Experience.company}</span></h6>
                    <p className="mb-4 text-neutral-400 leading-relaxed">{Experience.description}</p>
                    {Experience.technologies.map((tech,index)=>(
                        <span key={index}className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-green-200 ">{tech}</span>
                    ))}
                    </div>
                  
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience
