import {Client, Account, ID, Databases, Storage } from 'appwrite'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

export const account= new Account(client)
export const databases = new Databases(client)
export const storage = new Storage(client)

export { client, ID }