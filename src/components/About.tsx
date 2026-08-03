import { motion } from "framer-motion";
import {
  Gem,
  History,
  Sparkles,
  
} from "lucide-react";


function About() {


  const highlights = [

    {
      icon:History,
      title:"Since 1963",
      text:"Over six decades of jewellery excellence"
    },

    {
      icon:Gem,
      title:"Premium Craftsmanship",
      text:"Fine gold, diamonds and gemstones"
    },

    {
      icon:Sparkles,
      title:"Timeless Designs",
      text:"Created for generations to cherish"
    },

  ];



  return (


<section

id="about"

className="
relative
overflow-hidden
bg-[#080808]
py-32
px-6
"

>


<div

className="
mx-auto
max-w-7xl
grid
lg:grid-cols-2
gap-16
items-center
"

>




{/* Image */}


<motion.div


initial={{
opacity:0,
x:-50
}}


whileInView={{
opacity:1,
x:0
}}


viewport={{
once:true
}}


className="
relative
"


>


<div

className="
absolute
-inset-5
rounded-[40px]
bg-[#D4AF37]/10
blur-3xl
"

/>



<div

className="
relative
overflow-hidden
rounded-[35px]
border
border-[#D4AF37]/30
"

>


<img

src="/images/about-showroom.webp"

alt="Citizen Jewellers Heritage"

loading="lazy"

className="
h-[600px]
w-full
object-cover
transition
duration-1000
hover:scale-105
"

/>


</div>





{/* Heritage Badge */}


<div

className="
absolute
bottom-8
left-8
rounded-2xl
border
border-[#D4AF37]/40
bg-black/70
px-8
py-5
backdrop-blur-md
"

>


<p

className="
text-4xl
font-serif
text-[#D4AF37]
"

>
63+
</p>


<p

className="
text-xs
uppercase
tracking-[3px]
text-white
"

>
Years Of Trust
</p>


</div>



</motion.div>






{/* Content */}


<motion.div


initial={{
opacity:0,
x:50
}}


whileInView={{
opacity:1,
x:0
}}


viewport={{
once:true
}}


>


<p

className="
uppercase
tracking-[10px]
text-sm
text-[#D4AF37]
mb-6
"

>
Our Heritage
</p>





<h2

className="
text-5xl
md:text-7xl
font-serif
leading-tight
text-white
"

>

A Legacy Of

<span
className="
block
text-[#D4AF37]
"
>

Timeless Elegance

</span>


</h2>





<p

className="
mt-8
text-lg
leading-8
text-gray-400
"

>

Citizen Jewellers by Lakhani Sons represents
a legacy built on trust, craftsmanship and passion.
Since 1963, we have created jewellery that becomes
part of life's most precious celebrations.

</p>





{/* Highlights */}


<div

className="
mt-10
space-y-6
"

>


{
highlights.map((item,index)=>{


const Icon=item.icon;


return (

<motion.div

key={item.title}

initial={{
opacity:0,
x:30
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
delay:index*.15
}}

className="
flex
gap-5
items-center
"

>


<div

className="
flex
h-12
w-12
items-center
justify-center
rounded-full
border
border-[#D4AF37]/40
"

>

<Icon

size={24}

className="text-[#D4AF37]"

/>


</div>




<div>

<h3

className="
text-lg
font-serif
text-white
"

>

{item.title}

</h3>


<p

className="
text-sm
text-gray-400
"

>

{item.text}

</p>


</div>



</motion.div>

)


})
}



</div>




</motion.div>



</div>


</section>


  );

}


export default About;