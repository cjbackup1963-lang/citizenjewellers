import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock
} from "lucide-react";


function Contact() {


const contactInfo = [

{
icon:MapPin,
title:"Showroom Location",
text:
"Citizen Jewellers, Lakhani Tower, Main Zaibunissa Street, Saddar Karachi"
},

{
icon:Phone,
title:"Call Us",
text:
"0335 2484936"
},

{
icon:MessageCircle,
title:"WhatsApp Consultation",
text:
"Connect with our jewellery experts"
},

{
icon:Clock,
title:"Opening Hours",
text:
"Monday - Saturday | 01:00 PM - 09:00 PM"
},

];



return (


<section

id="contact"

className="
relative
overflow-hidden
bg-[#050505]
py-32
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
Visit Us
</p>




<h2

className="
text-5xl
md:text-7xl
font-serif
text-white
"

>

Our Showroom

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

Experience premium jewellery shopping with
personal consultation from our experts.

</p>


</motion.div>







<div

className="
grid
gap-10
lg:grid-cols-2
"

>



{/* Cards */}


<div

className="
grid
gap-6
sm:grid-cols-2
"

>


{

contactInfo.map((item,index)=>{


const Icon=item.icon;


return (


<motion.div


key={item.title}


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
delay:index*.12
}}


whileHover={{
y:-8
}}


className="
group
rounded-[30px]
border
border-[#D4AF37]/20
bg-[#0b0b0b]
p-7
transition
"

>


<div

className="
flex
h-14
w-14
items-center
justify-center
rounded-2xl
border
border-[#D4AF37]/40
"

>

<Icon

size={28}

className="text-[#D4AF37]"

/>


</div>




<h3

className="
mt-6
text-xl
font-serif
text-white
"

>

{item.title}

</h3>



<p

className="
mt-3
leading-7
text-gray-400
"

>

{item.text}

</p>



</motion.div>


)


})

}


</div>






{/* CTA */}



<motion.div


initial={{
opacity:0,
x:40
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
rounded-[35px]
border
border-[#D4AF37]/30
bg-[#0b0b0b]
p-10
flex
flex-col
justify-center
overflow-hidden
"

>



<div

className="
absolute
inset-0
bg-[radial-gradient(circle_at_top,rgba(212,175,55,.18),transparent_60%)]
"

/>




<div

className="
relative
"

>


<h3

className="
text-4xl
font-serif
text-white
"

>

Find Your Perfect Jewellery

</h3>



<p

className="
mt-6
leading-8
text-gray-400
"

>

Visit our showroom or contact our experts
for customized jewellery consultation,
gold exchange and premium services.

</p>




<div

className="
mt-8
flex
flex-wrap
gap-4
"

>


<a

href="https://wa.me/923352484936"

target="_blank"

rel="noreferrer"

className="
flex
items-center
gap-3
rounded-full
bg-[#D4AF37]
px-8
py-4
font-semibold
text-black
hover:scale-105
transition
"

>

<MessageCircle size={20}/>

WhatsApp

</a>




<a

href="tel:+923352484936"

className="
flex
items-center
gap-3
rounded-full
border
border-[#D4AF37]
px-8
py-4
text-[#D4AF37]
hover:bg-[#D4AF37]
hover:text-black
transition
"

>

<Phone size={20}/>

Call Now

</a>


</div>


</div>



</motion.div>




</div>



</div>


</section>


);

}


export default Contact;