import { dbQuery } from "~/db.server";

export type ContentRowType = {
  idContent: number;
  slug: string;
  lang: string;
  type: string;
  title: string;
  publishedAt: string;
  publishedStringDate: string;
  description: string;
  externalUrl: string;
  source: string;
  tags: string[];
};

export async function findAllBookmarks() {
  let queryResult = await dbQuery<ContentRowType>(
    ` select
      id_content as "idContent",
      slug as "slug",
      lang as "lang",
      type as "type",
      title as "title",
      published_at as "publishedAt",
      TO_CHAR(published_at, 'YYYY-MM-DD') as "publishedStringDate",
      description as "description",
      external_url as "externalUrl",
      source as "source",
      tags as "tags"
      from content
      where type = 'link'
      order by published_at desc
    `,
    null
  );
  return queryResult;
}

export async function findAllPosts() {
  let queryResult = await dbQuery<ContentRowType>(
    ` select
      id_content as "idContent",
      slug as "slug",
      lang as "lang",
      type as "type",
      title as "title",
      published_at as "publishedAt",
      TO_CHAR(published_at, 'YYYY-MM-DD') as "publishedStringDate",
      description as "description",
      external_url as "externalUrl",
      source as "source",
      tags as "tags"
      from content
      where type = 'post'
      order by published_at desc
    `,
    null
  );
  return queryResult;
}

export async function findAll() {
  let queryResult = await dbQuery<ContentRowType>(
    ` select
      id_content as "idContent",
      slug as "slug",
      lang as "lang",
      type as "type",
      title as "title",
      published_at as "publishedAt",
      TO_CHAR(published_at, 'YYYY-MM-DD') as "publishedStringDate",
      description as "description",
      external_url as "externalUrl",
      source as "source",
      tags as "tags"
      from content
      order by published_at desc
    `,
    null
  );
  return queryResult;
}