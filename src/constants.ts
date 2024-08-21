export const jwtConstants = {
  secret: process.env.SECRET,
};

export enum Role {
  User = 'user',
  Admin = 'admin',
}
