import { redirect, type MetaFunction } from "@remix-run/node";


export function loader(){
  return redirect("/menu.pdf")
}
