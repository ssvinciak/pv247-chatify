declare module '*.png';

type Uuid = string;

type Action = {
    type: string;
    payload?: any;
};
