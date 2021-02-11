interface MajorCredits {
  credit: number;
  _brand: "Major";
}

interface MinorCredits {
  credit: number;
  _brand: "Minor";
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number {
  return (subject1.credits + subject2.credits);
}
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number {
  return (subject1.credits + subject2.credits);
}
