export interface Section1 {
  bg_image: string;
  title: string;
}

export interface Section2 {
  bg_image: string;
  left_image: string;
  title: string;
  description: string;
}

export interface Section4Card {
  uuid: string;
  bg_image: string;
  title1: string;
  title2: string;
  button_text: string;
  button_link: string;
}

export interface Section4 {
  title: string;
  description: string;
  cards: Section4Card[];
}

export interface Section5 {
  title: string;
}

export interface Section6Card {
  uuid: string;
  image: string;
  button_text: string;
  button_link: string;
}

export interface Section6 {
  title: string;
  cards: Section6Card[];
}

export interface Section7 {
  title: string;
  sub_title: string;
}

export interface Section8Card {
  uuid: string;
  title: ILocalizedText;
  sub_title: ILocalizedText;
  description: ILocalizedText;
  button_text: ILocalizedText;
  button_link: string;
  first_image?: string;
  second_image?: string;
  image?: string;
}

export interface Section8 {
  card1: Section8Card;
  card2: Section8Card;
  card3: Section8Card;
  title: string;
}

export interface Section9 {
  link_url: string;
  left_image: string;
  bg_image: string;
  title: string;
  description: string;
  link_text: string;
}

export interface Section3Item {
  uuid: string;
  title: string;
  image: string;
  image_link: string;
}

export interface sectionNString {
  title: string;
}

export interface IHomeApiRes {
  _id: string;
  section1: Section1;
  section2: Section2;
  section3: Section3Item[];
  section4: Section4;
  section5: Section5;
  section6: Section6;
  section7: Section7;
  section8: Section8;
  section9: Section9;
  sectionNString: sectionNString;
}

export interface IHomeStoryData {
  thumb_image: string;
  title: string;
  sub_title: string;
  _id: string;
}
