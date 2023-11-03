import React from 'react';

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
        <Accordion className={styles.accordion}>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        İsdi  suyun  gəlməmə  və  ya  suyun  həcminin  zəyifləməsi nədən ola bilər?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        İsdi  suyun  gəlməməsi  və  ya  suyun  həcminin  zəyifləməsi yuyulma  vaxdının  catdığını  bildirir.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Təzyiqin   düsməsinin səbəbi nədir?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Təzyiqin düsməsininin səbəbi genisləndirilmə  cənində  havanın  olmamasıdır.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Raditorlar niyə qızmır?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        radyatrların  qızmaması  radyatr  stemində  suyun  çirkli  maddəyə  dönüşməsindəndi. Dövrüyə   məhdudlaşdığı üçün yuyulmalıdı
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}