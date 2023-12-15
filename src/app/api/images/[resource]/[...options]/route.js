import { NextResponse } from "next/server";

let s = JSON.stringify

const requestHelper = (data) => {
  return new NextResponse(s(data, null, 2))
}



export async function GET({ cookies, nextUrl: { pathname, searchParams }, credentials, headers }, { params }) {

  return requestHelper({ params, cookie: cookies.getAll(), pathname, searchParams: s(searchParams), credentials, headers: [...headers.keys()].map(key => ({ key, value: headers.get(key), })) })
}