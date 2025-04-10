import { SelectOption } from "./Select";

export interface SelectControl {
  options: SelectOption[];
  value: SelectOption;
  name: string;
  isRemove: boolean;
  isInitial: boolean;
}
export const INITIAL_SELECTS: SelectControl[] = [
  {
    options: [],
    value: { label: "-", value: " 0" },
    name: "Chifla",
    isRemove: false,
    isInitial: false,
  }, {
    options: [
      { label: "-", value: " 0" },
      { label: "PÂRJOALĂ VITĂ (35lei)", value: "35", images: '../src/img/pirjoala-de-vita.svg' },
      { label: "FILEU PUI PANE (32 lei)", value: "32", images: '../src/img/pirjoala-de-pui.svg' },
      { label: "FILEU PUI GRILL (32 lei)", value: "32", images: '../src/img/pirjoala-de-pui.svg' },
    ],
    value: { label: "-", value: " 0" },
    name: "carne",
    isRemove: false,
    isInitial: true,
  },
  {
    options: [
      { label: "-", value: " 0" },
      { label: "SOS KETCHUP (10lei)", value: "10", images: '../src/img/ketchup.svg' },
      { label: "SOS TARTAR (10lei)", value: "10", images: '../src/img/tartar-sos.svg' },
      { label: "SOS MAIONEZA (10lei)", value: "8", images: '../src/img/bacon-crocant.svg' },
    ],
    value: { label: "-", value: " 0" },
    name: "sos-jos",
    isRemove: false,
    isInitial: true,
  },

  {
    options: [
      { label: "-", value: " 0" },
      { label: "SOS KETCHUP (10lei)", value: "25", images: '../src/img/ketchup.svg' },
      { label: "SOS TARTAR (10lei)", value: "25", images: '../src/img/tartar-sos.svg' },
      { label: "SOS MAIONEZA (10lei)", value: "25", images: '../src/img/bacon-crocant.svg' },
    ],
    value: { label: "-", value: " 0" },
    name: "sos-top",
    isRemove: false,
    isInitial: true,
  },

  {
    options: [
      { label: "-", value: " 0" },
      { label: `CAȘCAVAL "CHEDDAR" (10lei)`, value: "25", images: '../src/img/cascaval-dorblu.svg' },
      { label: "CAȘCAVAL DORBLU (10lei)", value: "25", images: '../src/img/cascaval-dorblu.svg' },
    ],
    value: { label: "-", value: " 0" },
    name: "cheese",
    isRemove: false,
    isInitial: true,
  },
  {
    options: [


    ],
    value: { label: "chifla", value: " 0" },
    name: "chifla",
    isRemove: false,
    isInitial: false,
  },
];


