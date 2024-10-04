export interface Artist {
  id: number;
  name: string;
  categories:
    | 'Nothing'
    | 'Vocalist'
    | 'Producer'
    | 'Animator'
    | 'Label'
    | 'Circle'
    | 'Other'
    | 'Band'
    | 'Illustrator'
    | 'Subject';
  roles:
    | 'Default'
    | 'Animator'
    | 'Arranger'
    | 'Composer'
    | 'Distributor'
    | 'Illustrator'
    | 'Instrumentalist'
    | 'Lyricist'
    | 'Mastering'
    | 'Publisher'
    | 'Vocalist'
    | 'VoiceManipulator'
    | 'Other'
    | 'Mixer'
    | 'Chorus'
    | 'Encoder'
    | 'VocalDataProvider';
}
