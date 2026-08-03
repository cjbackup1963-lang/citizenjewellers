import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";


function FAQ() {


  const questions = [

    {
      question:"What jewellery collections do you offer?",
      answer:
      "We offer premium gold jewellery, diamond jewellery, bridal collections, gemstone jewellery and customized designs crafted with excellence."
    },

    {
      question:"Do you provide authentic gold jewellery?",
      answer:
      "Yes, Citizen Jewellers provides genuine gold jewellery with trusted quality standards and transparent dealing."
    },

    {
      question:"Can I order customized jewellery?",
      answer:
      "Yes, our skilled craftsmen create personalized jewellery designs according to your requirements and preferences."
    },

    {
      question:"Do you offer old gold exchange?",
      answer:
      "Yes, we provide trusted old gold exchange services with proper evaluation and professional guidance."
    },

    {
      question:"How can I contact your showroom?",
      answer:
      "You can contact us through WhatsApp, phone or visit our showroom at Lakhani Tower, Saddar Karachi."
    },

  ];



  const [active,setActive] = useState<number | null>(null);




  return (


<section

id="faq"

className="
relative
bg-[#050505]
py-32
px-6
"

>


<div

className="
mx-auto
max-w-4xl
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
mb-16
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
Knowledge
</p>



<h2

className="
text-5xl
md:text-7xl
font-serif
text-white
"

>

Frequently Asked Questions

</h2>


<p

className="
mt-6
text-gray-400
leading-8
"

>

Everything you need to know before choosing your
perfect jewellery piece.

</p>



</motion.div>






{/* Accordion */}



<div

className="
space-y-5
"

>


{

questions.map((item,index)=>{


const open = active === index;


return (


<motion.div


key={item.question}


initial={{
opacity:0,
y:20
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}


className="
overflow-hidden
rounded-3xl
border
border-[#D4AF37]/20
bg-[#0b0b0b]
"


>


<button

onClick={()=>
setActive(open ? null : index)
}


className="
flex
w-full
items-center
justify-between
p-7
text-left
"

>


<span

className="
text-lg
md:text-xl
font-serif
text-white
"

>

{item.question}

</span>



<div

className="
flex
h-8
w-8
items-center
justify-center
rounded-full
border
border-[#D4AF37]/40
"

>

{

open ?

<Minus
size={18}
className="text-[#D4AF37]"
/>

:

<Plus
size={18}
className="text-[#D4AF37]"
/>

}


</div>



</button>





<AnimatePresence>


{

open &&

<motion.div


initial={{
height:0,
opacity:0
}}


animate={{
height:"auto",
opacity:1
}}


exit={{
height:0,
opacity:0
}}


className="
overflow-hidden
"


>


<p

className="
px-7
pb-7
leading-8
text-gray-400
"

>

{item.answer}

</p>


</motion.div>


}


</AnimatePresence>



</motion.div>


)


})


}



</div>




</div>


</section>


  );

}


export default FAQ;