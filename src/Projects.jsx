import React, { useState } from 'react'

export const Projects = () => {

const projects = [

{
image:"https://noblestudios.com/wp-content/uploads/ai-travel-planner-1-scaled.webp",
title:"AI TRAVEL ITINARY PLANNER",
category:"AI Project"
},

{
image:"https://thumbs.dreamstime.com/b/two-friends-riding-green-scooter-together-young-men-happily-driver-wears-red-t-shirt-brown-shorts-passenger-402063843.jpg",
title:"COLLEGE GO",
category:"App",
github:"https://github.com/mohammedyaseen6546/collegeGo"
},

{
image:"https://img.magnific.com/free-vector/fitness-concept-illustration_1284-7547.jpg",
title:"FITNESS MEAL PLANNER",
category:"Health Project"
},

{
image:"https://media.geeksforgeeks.org/wp-content/uploads/20240207113731/Portfolio-Website-Project-Banner.webp",
title:"PORTFOLIO WEBSITE",
category:"React Project"
},

{
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSylRJBi8cuJMnFpY2Tw3QOPGToMGtY2qHQ1w&s",
title:"SDHUB WEBSITE CLONE",
category:"React Project"
}

]

const [start,setStart]=useState(0)

function nextSlide(){

if(start+4 < projects.length){

setStart(start+4)

}

}

function prevSlide(){

if(start-4 >=0){

setStart(start-4)

}

}

return (

<div
  id="projects"
  className="px-10 py-15 bg-gray-100"
>

<div>

<p className="ml-95 text-cyan-500 text-lg font-semibold uppercase tracking-[6px]">
Projects
</p>

<p className=" ml-95 mt-3 text-4xl font-bold text-slate-900 mt-4 tracking-tight">
  Latest <span className="text-cyan-500">Projects</span>

</p>



<div className="w-25 mt-5 h-1 ml-95 bg-blue-400 mt-3">
</div>

</div>


<div className="flex justify-evenly  mt-15">

{projects.slice(start,start+4).map((project,index)=>(

<div
key={index}
className="w-[320px]"
>

<a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src={project.image}
    className="w-50 h-50 rounded-lg hover:scale-105 duration-300"
  />
</a>



<p className=" font-bold mt-4">
{project.title}
</p>

<p className="text-gray-500 text-lg">
{project.category}
</p>

</div>

))}

</div>


<div className="flex justify-center gap-6 mt-12">

<button
onClick={prevSlide}
className=" px-4 py-2 rounded-full font-bold text-2xl hover:bg-red-600 hover:text-white transition duration-300"
>

{"<"}

</button>


<button
onClick={nextSlide}
className=" px-4 py-2 rounded-full text-2xl font-bold hover:bg-green-600 hover:text-white transition duration-300"
>

{">"}

</button>

</div>

</div>

)

}