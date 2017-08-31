interface IConfig {
  // Authentication
  pass?: string;
  user?: string;
  saveCredentials?: boolean;
  userId?: string;
  userKey?: string;
  // Disables
  cache?: boolean;
  merge?: boolean;
  // Filters
  episode?: number;
  volume?: number;
  // Settings
  format?: string;
  output?: string;
  series?: string;
  filename?: string;
  tag?: string;
}
