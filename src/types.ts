export interface GenOptions {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
  excludeAmbiguous: boolean;
  easyToRead: boolean;
  easyToSpeak: boolean;
  excludeChars: string;
  prefix: string;
  suffix: string;
}

export interface SavedPassword {
  id: string;
  label: string;
  password: string;
  timestamp: number;
  options: string;
}

export type PresetName = 'standard' | 'pin' | 'memorable' | 'strongest';
