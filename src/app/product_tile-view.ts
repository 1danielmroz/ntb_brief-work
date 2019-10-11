export class Product_tile_box {
  id: number;
  title: string;
  group_type: string;
  pictograms: Pictograms[];
  Pictures: string;
  alt: string;
  info:string;
}

export class Pictograms {
  url: string;
  tooltip: string;
}
