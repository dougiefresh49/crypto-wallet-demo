export interface EthTokenBase {
  symbol: string;
  name?: string;
  address: string;
  logo?: TokenLogo;
  website?: string;
  social?: TokenSocials;
}

export interface EthToken extends EthTokenBase {
  invalid_erc20_symbol?: boolean;
  type?: string;
  ens_address?: string;
  decimals?: number;
  invalid_erc20_decimals?: boolean;
  comment?: string;
  support?: {
    email?: string;
    url?: string;
  };
  deprecation?: {
    new_address?: string;
    note?: string;
    announcement_url?: string;
    time?: string;
    migration_type?: string;
  };
  red_flags?: EthFlag[];
}

export interface TokenLogo {
  src: string;
  width?: string | number;
  height?: string | number;
  ipfs_hash?: string;
}

export interface TokenSocials {
  bitcointalk?: string;
  blog?: string;
  chat?: string;
  discord?: string;
  facebook?: string;
  forum?: string;
  github?: string;
  gitter?: string;
  instagram?: string;
  linkedin?: string;
  medium?: string;
  reddit?: string;
  slack?: string;
  telegram?: string;
  tiktok?: string;
  twitter?: string;
  youtube?: string;
  vimeo?: string;
}

export interface EthFlag {
  type?: string;
  comment?: string;
  url?: string;
}

export type EthTokenMap = Record<string, EthToken>;
