import React from 'react';

const testimonialsData= [
    {
        id: crypto.randomUUID,
        header: 'İsdi  suyun  gəlməmə  və  ya  suyun  həcminin  zəyifləməsi nədən ola bilər?',
        description: 'İsdi  suyun  gəlməmə  və  ya  suyun  həcminin  zəyifləməsi nədən ola bilər?'
    },
    {
        id: crypto.randomUUID,
        header: 'Təzyiqin   düsməsinin səbəbi nədir?',
        description: 'Təzyiqin düsməsininin səbəbi genisləndirilmə  cənində  havanın  olmamasıdır.'
    },
    {
        id: crypto.randomUUID,
        header: 'Raditorlar niyə qızmır?',
        description: 'radyatrların qızmaması radyatr stemində suyun çirkli maddəyə dönüşməsindəndi. Dövrüyə məhdudlaşdığı üçün yuyulmalıdı'
    },
    
    
]


import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import styles from './Testimonials.module.css'

export default function Example() {
    return (
        <Accordion className={styles.accordion} allowZeroExpanded>
            {testimonialsData.map((data,index) => (
                <Testimonial data={data} key={index}/>
            ))}
        </Accordion>
    );
}

export const Testimonial = ({data}) => {
    return(
    <AccordionItem key={data.id}>
            <AccordionItemHeading>
                <AccordionItemButton>
                    {data.header}
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {data.description}
            </AccordionItemPanel>
        </AccordionItem>
    );
}
