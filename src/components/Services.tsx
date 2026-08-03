import { motion } from "framer-motion";

import {
  Gem,
  Diamond,
  Sparkles,
  ShieldCheck,
  Wrench,
  Gift,
} from "lucide-react";


function Services() {


  const services = [

    {
      icon:Gem,
      title:"Gold Jewellery",
      description:
      "Luxury handcrafted gold jewellery designed with timeless elegance."
    },

    {
      icon:Diamond,
      title:"Diamond Jewellery",
      description:
      "Elegant diamond collections selected for brilliance and quality."
    },

    {
      icon:Sparkles,
      title:"Bridal Jewellery",
      description:
      "Royal bridal masterpieces created for unforgettable celebrations."
    },

    {
      icon:ShieldCheck,
      title:"Purity Guarantee",
      description:
      "Trusted quality with genuine precious metals and craftsmanship."
    },

    {
      icon:Wrench,
      title:"Repair & Polishing",
      description:
      "Professional restoration, resizing and jewellery care services."
    },

    {
      icon:Gift,
      title:"Custom Designs",
      description:
      "Personalized jewellery creations made according to your vision."
    },

  ];




  return (


<section

id="services"

className="
relative
overflow-hidden
bg-[#050505]
py-28
px-6
"

>


<div

className="
mx-auto
max-w-7xl
"

>




{/* Heading */}


<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="
mb-20
text-center
"

>


<p

className="
mb-5
text-sm
uppercase
tracking-[10px]
text-[#D4AF37]
"

>
Our Services
</p>



<h2

className="
text-5xl
md:text-7xl
font-serif
text-white
"

>

Exceptional Jewellery Care

</h2>



<p

className="
mx-auto
mt-6
max-w-3xl
leading-8
text-gray-400
"

>

From handcrafted creations to professional jewellery
services, experience excellence built on decades of trust.

</p>


</motion.div>






{/* Cards */}


<div

className="
grid
gap-8
md:grid-cols-2
lg:grid-cols-3
"

>


{

services.map((service,index)=>{


const Icon = service.icon;


return (

<motion.div


key={service.title}


initial={{
opacity:0,
y:40
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}


transition={{
duration:.7,
delay:index*.12
}}


whileHover={{
y:-10
}}


className="
group
relative
rounded-[30px]
border
border-[#D4AF37]/20
bg-[#0b0b0b]
p-8
overflow-hidden
"


>


{/* Glow */}


<div

className="
absolute
inset-0
opacity-0
transition
duration-500
group-hover:opacity-100
bg-[radial-gradient(circle_at_top,rgba(212,175,55,.15),transparent_60%)]
"

/>





<div

className="
relative
"

>


<div

className="
mb-7
flex
h-16
w-16
items-center
justify-center
rounded-2xl
border
border-[#D4AF37]/40
bg-black
"

>

<Icon

size={32}

className="text-[#D4AF37]"

/>


</div>




<h3

className="
text-2xl
font-serif
text-white
"

>

{service.title}

</h3>



<p

className="
mt-4
leading-7
text-gray-400
"

>

{service.description}

</p>



</div>



</motion.div>

)


})

}


</div>




</div>


</section>


  );

}


export default Services;