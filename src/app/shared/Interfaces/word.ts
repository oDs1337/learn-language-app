export interface Word {
  _id?: {
    $oid: string;
  };
  word_single_indefinite: string;
  word_single_definite: string;
  word_plural_indefinite: string;
  word_plural_definite: string;
  word_plural_genitive: string;
  picture_url?: string;
}
