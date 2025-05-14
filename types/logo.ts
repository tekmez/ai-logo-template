export interface Logo {
  id: string;
  logoUrl: string;
  prompt: string;
  style: string;
  createdAt: Date;
}

export interface LogoStyle {
  name: string;
  icon?: React.ReactNode;
  image?: string;
}
