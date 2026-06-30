import { createClient } from "next-sanity";
export const client = createClient({
  projectId: "hilxute1",
  dataset: "production",
  apiVersion: "2026-06-29",
  useCdn: false,
  token:
    "skRCb6OOq81rkFF194CKL912Z58U9BSbYwwFp8glbx5CttqdJDXsVzurSMc0KZ4CDJL0vNAn4yKcIyb3Zw1a4C4Y0EmDhAzNHNc8IiTKKtgOF2p5phpt4C2gzNsHy1pBi58OsxJ3KmNyHbXxClR1wUVZXlUeyyPmxLuP0l6aIDYX1gFRSgWd",
});
