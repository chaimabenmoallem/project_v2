export interface TermData {
  term: string;
  fuzziness: number;
  initialOccurrences: number; // Original number of occurrences
  occurrences: number; // This will be the modifiable/displayed number of occurrences
  relatedTerms: string[];
}
