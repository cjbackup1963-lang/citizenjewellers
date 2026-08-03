import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


function Collections() {


  const collections = [

    {
      title:"Gold Jewellery",
      subtitle:"21K & 22K Gold Creations",
      image:"/images/gold.webp",
    },

    {
      title:"Diamond Collection",
      subtitle:"Brilliance Beyond Time",
      image:"/images/diamond.webp",
    },

    {
      title:"Bridal Collection",
      subtitle:"Royal Wedding Masterpieces",
      image:"/images/bridal.webp",
    },

    {
      title:"Men's Collection",
      subtitle:"Luxury For Modern Gentlemen",
      image:"/images/mens.webp",
    },

  ];



  return (


<section
id="collections"
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

transition={{
duration:.8
}}

className="
mb-20
text-center
"

>


<p
className="
mb-5
uppercase
tracking-[10px]
text-sm
text-[#D4AF37]
"
>
Luxury Collections
</p>



<h2
className="
text-5xl
md:text-7xl
font-serif
text-white
"
>
Discover Elegance
</h2>



<p
className="
mx-auto
mt-6
max-w-2xl
leading-8
text-gray-400
"
>
Explore handcrafted jewellery collections designed
with heritage, precision and timeless beauty.
</p>


</motion.div>





{/* Cards */}


<div
className="
grid
gap-8
md:grid-cols-2
"
>


{
collections.map((item,index)=>(


<motion.div

key={item.title}

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.8,
delay:index*.15
}}

whileHover={{
y:-12
}}

className="
group
relative
h-[520px]
overflow-hidden
rounded-[32px]
border
border-[#D4AF37]/30
bg-black
"

>



{/* Image */}


<img

src={item.image}

alt={item.title}

loading="lazy"

className="
absolute
inset-0
h-full
w-full
object-cover
transition
duration-[1200ms]
group-hover:scale-110
"

/>




{/* Dark Luxury Overlay */}

<div

className="
absolute
inset-0
bg-gradient-to-t
from-black
via-black/40
to-transparent
"

/>





{/* Shine Effect */}

<div

className="
absolute
-inset-x-full
inset-y-0
rotate-12
bg-white/10
transition-all
duration-1000
group-hover:translate-x-[200%]
"

/>






{/* Content Glass */}


<div

className="
absolute
bottom-8
left-8
right-8
rounded-2xl
border
border-white/10
bg-black/40
p-7
backdrop-blur-md
"

>


<h3

className="
text-3xl
md:text-4xl
font-serif
text-white
"

>

{item.title}

</h3>



<p

className="
mt-3
text-[#D4AF37]
tracking-wide
"

>

{item.subtitle}

</p>




<button

className="
mt-6
flex
items-center
gap-3
text-white
transition-all
group-hover:gap-5
"

>

Explore Collection

<ArrowRight size={18}/>


</button>



</div>





</motion.div>


))
}


</div>



</div>


</section>


  );

}


export default Collections;