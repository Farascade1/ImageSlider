import { useState } from "react"


function ImageSlider(){

const [index, setIndex] = useState(0)
const handleNextImage = () => {
    if(index < images.length -1)
    setIndex(index +1)
}
const handlePrevImage = () => {
    if(index > 0)
    setIndex(index -1)
}

    const images = [
       "https://img.freepik.com/free-photo/junior-developer-sitting-down-desk-showing-laptop-with-source-code-senior-dev-asking-opinion-programer-writing-algorithm-interrupted-by-colleague-wanting-help-with-fixing-errors_482257-41823.jpg?ga=GA1.1.1808922816.1714979734&semt=sph",
        "https://img.freepik.com/premium-photo/african-americans-developer-coding-software-project-screen-tastemaker_31965-408897.jpg?ga=GA1.1.1808922816.1714979734&semt=sph",
        "https://img.freepik.com/free-photo/junior-developer-sitting-down-desk-showing-laptop-with-source-code-senior-dev-asking-opinion-programer-writing-algorithm-interrupted-by-colleague-wanting-help-with-fixing-errors_482257-41823.jpg?ga=GA1.1.1808922816.1714979734&semt=sph",
"https://images.pexels.com/photos/17443857/pexels-photo-17443857/free-photo-of-a-book-store-with-many-books-on-shelves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://img.freepik.com/free-photo/team-coworkers-comparing-source-codes-running-laptop-screen-computer-monitor-it-development-office-software-developers-collaborating-data-coding-group-project-while-sitting-desk_482257-41846.jpg?ga=GA1.1.1808922816.1714979734&semt=sph"

    ]

    return <div className="text-center">
    <div className="flex justify-center">


         <div className=" flex justify-center rounded-[8px] mt-10 bg-primaryColor w-[300px] sm:w-[700px] sm:h-[370px] ">
            <img className=" w-[300px] h-[370px] sm:w-[700px] sm:h-[370px] rounded-[6px]" src={images[index]} alt="" />
         </div>
</div>
<button onClick={handleNextImage} className="bg-primaryColor px-10 rounded  sm:px-16 py-2 sm:py-4 m -5 text-white  sm:text-3xl mt-5 mr-2">Next</button>
<button onClick={handlePrevImage} className= "bg-primaryColor px-10 rounded sm:px-16 py-2 sm:py-4 m -5 text-white  sm:text-3xl">Prev</button>
    </div>
}

export default ImageSlider