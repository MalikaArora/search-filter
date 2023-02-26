import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "appFilter"
})

export class FilterPipe implements PipeTransform {
  // transform(value: any, args?: any): any {
  //   if (!value) return null;
  //   if (!args) return value;

  //   args = args.toLowerCase(); debugger;
  //   return value.filter(function (item) {
  //     return JSON.stringify(item)
  //       .toLowerCase()
  //       .includes(args);
  //   });
  // }

  transform(values: any, args?: any[]): any[] {
    let res = values.filter(a => {
      return args.length ? args.indexOf(a.status) != -1 : values;
    })      
    console.log("Res ", res);
    return res;
  }

  transformvalue(value: any, key:any, args?: any): any {
    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase(); debugger;
    return value.filter(function (item) {
      return JSON.stringify(item.key)
        .toLowerCase()
        .includes(args);
    });
  }
}
// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({ name: 'appFilter' })
// export class FilterPipe implements PipeTransform {
//   /**
//    * Pipe filters the list of elements based on the search text provided
//    *
//    * @param items list of elements to search in
//    * @param searchText search string
//    * @returns list of elements filtered by search text or []
//    */
//   transform(items: any[], searchText: string): any[] {
//     if (!items) {
//       return [];
//     }
//     if (!searchText) {
//       return items;
//     }
//     searchText = searchText.toLocaleLowerCase();

//     return items.filter(it => {
//       return it.toLocaleLowerCase().includes(searchText);
//     });
//   }
// }
