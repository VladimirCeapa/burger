import { SelectOption } from "./Select";

 export interface SelectControl {
    options: SelectOption[];
    value: SelectOption;
    name: string;
    id: number
    isInitial: boolean;
  }
export  const INITIAL_SELECTS: SelectControl[] = [
    {
      options: [],
      value: { label: "-", value: " 0" },
      name: "chifla",
      id: 1,
      isInitial: false,
    }, {
      options: [
        { label: "-", value: " 0" },
        { label: "PÂRJOALĂ VITĂ", value: "25",images:'../src/img/pirjoala-de-vita.svg' },
        { label: "FILEU PUI PANE (32 lei)", value: "25",images:'../src/img/pirjoala-de-pui.svg' },
        { label: "FILEU PUI GRILL (32 lei)", value: "25",images:'../src/img/pirjoala-de-pui.svg' },
      ],
      value: { label: "-", value: " 0" },
      name: "carne",
      id: 2,
      isInitial: true,
    },
    {
      options: [
        { label: "-", value: " 0" },
        { label: "SOS KETCHUP (10lei)", value: "25",images:'../src/img/ketchup.svg' },
        { label: "SOS TARTAR (10lei)", value: "25",images:'../src/img/tartar-sos.svg' },
        { label: "SOS MAIONEZA (10lei)", value: "25",images:'../src/img/bacon-crocant.svg' },
      ],
      value: { label: "-", value: " 0" },
      name: "sos-jos",
      id: 3,
      isInitial: true,
    },
  
    {
      options: [
        { label: "-", value: " 0" },
        { label: "SOS KETCHUP (10lei)", value: "25",images:'../src/img/ketchup.svg' },
        { label: "SOS TARTAR (10lei)", value: "25",images:'../src/img/tartar-sos.svg' },
        { label: "SOS MAIONEZA (10lei)", value: "25",images:'../src/img/bacon-crocant.svg' },
      ],
      value: { label: "-", value: " 0" },
      name: "sos-jos-top",
      id: 4,
      isInitial: true,
    },
  
    {
      options: [
        { label: "-", value: " 0" },
        { label:`CAȘCAVAL "CHEDDAR" (10lei)`, value: "25",images:'../src/img/cascaval-dorblu.svg' },
        { label: "CAȘCAVAL DORBLU (10lei)", value: "25",images:'../src/img/cascaval-dorblu.svg' },
      ],
      value: { label: "-", value: " 0" },
      name: "cheese",
      id: 5,
      isInitial: true,
    },
    {
      options: [
  
  
      ],
      value: { label: "chifla", value: " 0" },
      name: "chifla",
      id: 6,
      isInitial: true,
    },
  ];

  
 