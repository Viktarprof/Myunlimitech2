import { AiOutlinePhone } from "react-icons/ai";
import { PiNotePencil } from "react-icons/pi";
import iconFastDelivery from "./media/iconFastDelivery.png"
import iconCalendar from "./media/iconCalendar.png"

export const topBatInfo = [
    {
        id: 1,
        logo: <AiOutlinePhone/>,
        text: "(+48) 48 623 18 02",
        altText: "phone",
        isIcon: true,
    }, 
    {
        id: 2,
        logo: <PiNotePencil/>,
        text: "NAPISZ DO NAS!",
        altText: "note",
        isIcon: true,
        
    }, 
    {
        id: 3,
        logo: iconFastDelivery,
        text: "DARMOWA DOSTAWA",
        altText: "truckDelivery",
        isIcon: false,
    }, 
    {
        id: 4,
        logo: iconCalendar,
        text: "30 DNI NA DARMOWY ZWROT",
        altText: "calendar",
        isIcon: false,
    }, 
]

export const navName = [
    {
        id: 1,
        text: "Bony podarunkowe",
    },
    {
        id: 2,
        text: "Nowości",
    },{
        id: 3,
        text: "Bestsellery",
    },{
        id: 4,
        text: "% Wyprzedaż %",
    },
]

export const selectProduct = [
    {
        id: 1,
        value: "buty1", 
        text: "Damskie buty skórzane",
    },
    {
        id: 2,
        value: "buty2", 
        text: "Meskie buty skórzane",
    },{
        id: 3,
        value: "buty3", 
        text: "Buty skórzane dla dzoeci",
    },{
        id: 4,
        value: "buty4", 
        text: "Buty zimowe",
    },
]