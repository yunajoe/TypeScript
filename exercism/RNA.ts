type DNATYPE = {
  [key: string]: string;
};

const DNA: DNATYPE = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};
export function toRna(str: string) {
  return str
    .split("")
    .map((value) => {
      if (!DNA[value]) {
        throw "Invalid input DNA.";
      }
      return DNA[value];
    })
    .join("");
}

// sol2)

// function toRna(sequence:string){
//     return sequence.split("").map((value)=>{
//       switch(value){
//         case "G":
//         return "C"
//         case "C":
//         return "G"
//         case "T":
//         return "A"
//         case "A":
//         return "U"

//         default:
//         throw new Error("Invalud input DNA")
//       }
//     })
//   }

// sol3)
// type M = {
//   [key: string]: string;
// };

// const DNATYPE: M = {
//   G: "C",
//   C: "G",
//   T: "A",
//   A: "U",
// };

// function toRna(dna: string) {
//   if (/[^ACGT]/.test(dna)) {
//     throw "Invalid input DNA.";
//   }
//   return dna.replace(/[ACGT]/g, (value) => DNATYPE[value]);
// }
