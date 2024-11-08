'use client';

import { onEntryChange } from "@/contentstack-sdk";
import {Stack} from '../contentstack-sdk'
import { getPageRes, metaData } from "@/helper";
import { Page } from "@/typescript/pages";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const entryUrl = usePathname();

  const [getEntry, setEntry] = useState<Page>();

  async function fetchData() {
    try {
      const entryRes = await getPageRes(entryUrl);
      if (!entryRes) throw new Error('Status code 404');
      setEntry(entryRes);
      console.log("entryRes", entryRes)
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchData2() {
    //Get multiple Entry
    const Query = Stack.ContentType("page").Query();
    Query.where("title", "Home")
    .includeSchema()
    .includeCount()
    .toJSON()
    .find()
    .then(
      function success(entry) {
        console.log("entry");
        // Retrieve field value by providing a field's uid
        console.log(entry[0][0]);

        // Convert the entry result object to JSON
      },
      function error(err) {
        // err object
      }
    );
  }

  useEffect(() => {
    onEntryChange(() => fetchData());
    fetchData2()
  }, []);

  return (
    <>
      <h1>Hello World!</h1>
    </>
  );
}
