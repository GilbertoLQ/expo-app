export const spacing = {
    base: 8,
    get xs() { return this.base / 2 }, // 4
    get sm() { return this.base }, // 8
    get md() { return this.base * 2 }, // 16
    get lg() { return this.base * 3 }, // 24
    get xl() { return this.base * 4 }, // 32
    get xxl() { return this.base * 6 }, // 48
  } as const;
  
  export const radius = {
    none: 0,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24,
    round: '50%',
  } as const;
  
  export type Spacing = typeof spacing;
  export type Radius = typeof radius;