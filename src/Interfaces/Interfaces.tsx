export interface Friends {
    email: string,
    id: string,
    links: Link[],
    name: string,
    note: string,
    loading: boolean
}

export interface Link {
    id: string,
    isActive: boolean,
    name: string,
    url: string
}

export interface Links {
    links: Link[]
}

export interface User {
    email: string,
    id: string,
    name: string,
    note: string,
    friends: Friends[],
    links: Links[],
    customText?: string,
    loading: boolean,
    date_created?: {}

}