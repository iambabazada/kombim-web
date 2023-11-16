import React from 'react';

const testimonialsData = [
    {
        id: crypto.randomUUID,
        header: 'İsti  suyun  gəlməmə  və  ya  suyun  həcminin  zəyifləməsi nədən ola bilər?',
        description: 'Təzyiqin düşməsininin səbəbi genişləndirilmə  çənində  havanın  olmamasıdır.'
    },
    {
        id: crypto.randomUUID,
        header: 'Kombinin səsli isləməsinin səbəbi nədir?',
        description: 'Kombinin  səsli  isləməsi  texniki  baxış  vaxtının   çatdığını  bildirir.'
    },
    {
        id: crypto.randomUUID,
        header: 'Radiatorlar niyə qızmır?',
        description: 'radiatorların qızmaması radiator sistemində suyun çirkli maddəyə dönüşməsindəndir. Dövrüyə məhdudlaşdığı üçün yuyulmalıdır'
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
            {testimonialsData.map((data, index) => (
                <Testimonial data={data} key={index} />
            ))}
        </Accordion>
    );
}

export const Testimonial = ({ data }) => {
    return (
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
